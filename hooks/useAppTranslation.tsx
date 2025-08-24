import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import * as SecureStore from "expo-secure-store";

const useAppTranslation = () => {
  const { i18n, ...rest } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState<string>(i18n.language);
  const [isRTL, setIsRTL] = useState<boolean>(i18n.language === "ar");

  // Load saved language on app startup
  useEffect(() => {
    const loadLanguage = async () => {
      try {
        const storedLang = await SecureStore.getItemAsync("APP_LANGUAGE");

        if (storedLang && storedLang !== i18n.language) {
          await i18n.changeLanguage(storedLang);
        }
      } catch (error) {
        console.error("Failed to load language:", error);
      }
    };

    loadLanguage();
  }, [i18n]);

  // Handle language changes
  useEffect(() => {
    const onLanguageChanged = (lang: string) => {
      setCurrentLanguage(lang);
      setIsRTL(lang === "ar");
    };

    i18n.on("languageChanged", onLanguageChanged);
    return () => {
      i18n.off("languageChanged", onLanguageChanged);
    };
  }, [i18n]);

  const changeLanguage = async (newLang: any) => {
    if (newLang === i18n.language) return;

    try {
      await SecureStore.setItemAsync("APP_LANGUAGE", newLang);

      await i18n.changeLanguage(newLang); // This will trigger the languageChanged event
    } catch (error) {
      console.error("Language change failed:", error);
    }
  };

  return {
    i18n,
    currentLanguage,
    isRTL,
    changeLanguage,
    isArLang: currentLanguage === "ar",
    isEnLang: currentLanguage === "en",
    ...rest,
  };
};

export default useAppTranslation;
