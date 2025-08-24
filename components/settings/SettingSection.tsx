import useAppTranslation from "@/hooks/useAppTranslation";
import { COLORS } from "@/theme/colors";
import { SettingSectionProps } from "@/types/settingSectionProps.types";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const SettingSection: React.FC<SettingSectionProps> = ({ title, children }) => {
  const { isEnLang } = useAppTranslation();
  const styles = createStyles(isEnLang);

  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{title}</Text>
      {children}
    </View>
  );
};

export default SettingSection;

const createStyles = (isEnLang: boolean) =>
  StyleSheet.create({
    section: {
      marginBottom: 25,
      backgroundColor: "#fff",
      borderRadius: 12,
      padding: 15,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 3.84,
      elevation: 5,
    },
    sectionTitle: {
      fontSize: 18,
      fontWeight: "600",
      marginBottom: 15,
      color: COLORS.primary,
      textAlign: !isEnLang ? "right" : "left",

    },
  });
