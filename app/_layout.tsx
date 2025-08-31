import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";
import { I18nextProvider } from "react-i18next";
import { SafeAreaProvider } from "react-native-safe-area-context";

import i18n from "@/locales/i18n";
import { I18nManager } from "react-native";



export default function RootLayout() {
  I18nManager.allowRTL(false);
  I18nManager.forceRTL(false);

  const [loaded, error] = useFonts({
    OpenSansItalic: require("../assets/fonts/OpenSans-Italic-VariableFont_wdth_wght.ttf"),
    OpenSans: require("../assets/fonts/OpenSans-VariableFont_wdth_wght.ttf"),
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
