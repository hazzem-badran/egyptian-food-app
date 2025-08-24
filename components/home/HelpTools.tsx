import { View, StyleSheet } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { ROUTES } from "@/constants/routes";

const HelpTools = () => {
  const router = useRouter();
  return (
    <View style={styles.helpTools}>
      <Ionicons
        name="settings-outline"
        size={26}
        color="white"
        onPress={() => router.push(ROUTES.SETTINGS)}
      />
      <Ionicons
        name="search-outline"
        size={26}
        color="white"
        onPress={() => router.push(ROUTES.SEARCH)}
      />
      <Ionicons
        name="bookmark-outline"
        size={26}
        color="white"
        onPress={() => router.push(ROUTES.FAVORITES)}
      />
    </View>
  );
};

export default HelpTools;

const styles = StyleSheet.create({
  helpTools: {
    position: "absolute",
    top: 55,
    left: 17,
    flexDirection: "row",
    gap: 22,
    zIndex: 1,

  }, 
});
