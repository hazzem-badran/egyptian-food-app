import { Stack } from "expo-router";
import { I18nextProvider } from "react-i18next";
import i18n from "@/locales/i18n";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      {/* <StatusBar /> */}
      <I18nextProvider i18n={i18n}>
        <Stack screenOptions={{ headerShown: false }} />
      </I18nextProvider>
    </SafeAreaProvider>
  );
}
