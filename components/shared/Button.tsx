import { COLORS } from "@/theme/colors";
import { ButtonProps } from "@/types/button.types";
import React from "react";
import { Platform, StyleSheet, Text, TouchableOpacity } from "react-native";

const Button: React.FC<ButtonProps> = ({ title, press }) => {
  return (
    <TouchableOpacity
      style={[
        styles.backButton,
        Platform.OS === "android" && styles.androidBackButton,
      ]}
      onPress={press}
    >
      <Text style={styles.backButtonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  backButton: {
    marginVertical: 30,
    padding: 15,
    backgroundColor: COLORS.primary,
    borderRadius: 8,
    alignItems: "center",
    width: "100%"
  },
  androidBackButton: {
    marginBottom: 50,
  },
  backButtonText: {
    color: COLORS.white,
    fontFamily: "OpenSans",
    fontSize: 18,
  },
});
