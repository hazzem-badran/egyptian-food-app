import { SplashScreen, Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useFonts } from "expo-font";
import { useEffect } from "react";
import { I18nextProvider } from "react-i18next";

import i18n from "@/locales/i18n";
import { I18nManager } from "react-native";

  I18nManager.allowRTL(false);
  I18nManager.forceRTL(false);

export default function RootLayout() {
  I18nManager.allowRTL(false);
  I18nManager.forceRTL(false);

  const [loaded, error] = useFonts({
    IBMPlex: require("../assets/fonts/IBMPlexSansArabic-Regular.ttf"),
    IBMPlexBold: require("../assets/fonts/IBMPlexSansArabic-Bold.ttf"),
    IBMPlexSemiBold: require("../assets/fonts/IBMPlexSansArabic-SemiBold.ttf"),
    IBMPlexMedium: require("../assets/fonts/IBMPlexSansArabic-Medium.ttf"),
    IBMPlexLight: require("../assets/fonts/IBMPlexSansArabic-Light.ttf"),
    IBMPlexThin: require("../assets/fonts/IBMPlexSansArabic-Thin.ttf"),
  });

  useEffect(() => {
    I18nManager.allowRTL(false);
  I18nManager.forceRTL(false);
  
    void SplashScreen.preventAutoHideAsync();
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <SafeAreaProvider>
      {/* <StatusBar /> */}
      <I18nextProvider i18n={i18n}>
        <Stack screenOptions={{ headerShown: false }} />
      </I18nextProvider>
    </SafeAreaProvider>
  );
}
