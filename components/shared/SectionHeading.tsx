import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { COLORS } from "@/theme/colors";
import React from "react";
import { SectionHeadingProps } from "@/types/sectionHeadingProps.types";

const SectionHeading: React.FC<SectionHeadingProps> = ({ title }) => {
  const router = useRouter();

  return (
    <View
      style={[
        styles.container,
        Platform.OS === "android" && styles.androidContainer,
      ]}
    >
      <Text style={styles.heading}>{title}</Text>

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
    fontSize: 18,
    fontFamily: "IBMPlexBold",
    fontWeight: "bold",
    textAlign: "center",
  },
  backButton: {
    position: "absolute",
    right: 0,
    // padding: 8,
  },
});
