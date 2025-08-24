import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert,
} from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import useAppTranslation from "@/hooks/useAppTranslation";
import { COLORS } from "@/theme/colors";
import { useFavoritesStore } from "@/store/favoritesStore";
import { SafeAreaView } from "react-native-safe-area-context";
import AppFeaturesModal from "@/components/settings/AppFeaturesModal";
import SettingSection from "@/components/settings/SettingSection";
import SettingItem from "@/components/settings/SettingItem";

const SettingsPage = () => {
  const router = useRouter();
  const { t, changeLanguage, isArLang, isEnLang } = useAppTranslation();
  const { favorites, clearAllFavorites } = useFavoritesStore();
  const [showFeaturesModal, setShowFeaturesModal] = useState(false);

  const styles = createStyles(isArLang);

  const handleClearFavorites = () => {
    Alert.alert(t("clear_favorites"), t("clear_favorites_confirm"), [
      {
        text: t("no"),
        style: "cancel",
      },
      {
        text: t("yes"),
        style: "destructive",
        onPress: () => {
          clearAllFavorites();
          Alert.alert(t("favorites_cleared"));
        },
      },
    ]);
  };

  const handleChangeShowFeaturesModal = (show: boolean) => {
    setShowFeaturesModal(show);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>{t("settings")}</Text>

        {/* App Features */}
        <SettingSection title={t("app_features")}>
          <SettingItem
            icon="star"
            title={t("app_features")}
            onPress={() => setShowFeaturesModal(true)}
          />
        </SettingSection>

        {/* Language Settings */}
        <SettingSection title={t("language_settings")}>
          <View style={styles.languageButtons}>
            <TouchableOpacity
              onPress={() => changeLanguage("ar")}
              disabled={isArLang}
              style={[
                styles.languageButton,
                isArLang && styles.activeLanguageButton,
              ]}
            >
              <Text
                style={
                  isArLang
                    ? styles.activeLanguageText
                    : styles.languageButtonText
                }
              >
                العربية
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => changeLanguage("en")}
              disabled={isEnLang}
              style={[
                styles.languageButton,
                isEnLang && styles.activeLanguageButton,
              ]}
            >
              <Text
                style={
                  isEnLang
                    ? styles.activeLanguageText
                    : styles.languageButtonText
                }
              >
                English
              </Text>
            </TouchableOpacity>
          </View>
        </SettingSection>
        {/* App Settings */}

        <SettingSection title={t("app_settings")}>
          <SettingItem
            icon="heart"
            title={`${t("clear_favorites")} (${favorites.length})`}
            onPress={handleClearFavorites}
          />
        </SettingSection>

        <TouchableOpacity
          onPress={() => router.back()}
          style={styles.backButton}
        >
          <Text style={styles.backText}>{t("back")}</Text>
          <Ionicons name="arrow-back" size={20} color={COLORS.primary} />
        </TouchableOpacity>
      </ScrollView>

      <AppFeaturesModal
        visible={showFeaturesModal}
        changeShow={handleChangeShowFeaturesModal}
      />
    </SafeAreaView>
  );
};

export default SettingsPage;

const createStyles = (isArLang: boolean) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: COLORS.background,
      padding: 20,
    },
    title: {
      fontSize: 28,
      fontWeight: "bold",
      marginBottom: 30,
      textAlign: "center",
      color: COLORS.primary,
      writingDirection: isArLang ? "ltr" : "rtl",
    },

    languageButtons: {
      flexDirection: isArLang ? "row" : "row-reverse",
      gap: 12,
    },
    languageButton: {
      flex: 1,
      paddingVertical: 12,
      paddingHorizontal: 20,
      backgroundColor: "#f5f5f5",
      borderRadius: 8,
      borderWidth: 2,
      borderColor: "transparent",
    },
    activeLanguageButton: {
      backgroundColor: COLORS.primary,
      borderColor: COLORS.primary,
    },
    languageButtonText: {
      color: "#666",
      fontSize: 16,
      textAlign: "center",
      fontWeight: "500",
    },
    activeLanguageText: {
      color: "#fff",
      fontSize: 16,
      textAlign: "center",
      fontWeight: "600",
    },
    backButton: {
      flexDirection: isArLang ? "row" : "row-reverse",
      alignItems: "center",
      justifyContent: "center",
      marginTop: 20,
      marginBottom: 40,
      paddingVertical: 12,
    },
    backText: {
      color: COLORS.primary,
      fontSize: 16,
      marginHorizontal: 8,
      fontWeight: "500",
    },
  });
