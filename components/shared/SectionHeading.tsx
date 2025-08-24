import useAppTranslation from "@/hooks/useAppTranslation";
import { COLORS } from "@/theme/colors";
import { SectionHeadingProps } from "@/types/sectionHeadingProps.types";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const SectionHeading: React.FC<SectionHeadingProps> = ({ title }) => {
  const { t } = useAppTranslation();
  const router = useRouter();

  return (
    <View
      style={[
        styles.container,
        Platform.OS === "android" && styles.androidContainer,
      ]}
    >
      <Text style={styles.heading}>{t(title)}</Text>

      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Ionicons name="chevron-forward" size={28} color={COLORS.primary} />
      </TouchableOpacity>
    </View>
  );
};

export default SectionHeading;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
    marginTop: 0,
    position: "relative",
  },
  androidContainer: {
    marginTop: 25,
  },
  heading: {
    fontSize: 22,
    fontFamily: "OpenSansItalic",
    fontWeight: "900",
    textAlign: "center",
    color: COLORS.primary,

  },
  backButton: {
    position: "absolute",
    right: 0,
    // padding: 8,
  },
});
