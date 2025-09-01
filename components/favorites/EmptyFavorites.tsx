import useAppTranslation from "@/hooks/useAppTranslation";
import { COLORS } from "@/theme/colors";
import { Ionicons } from "@expo/vector-icons";
import React, { useEffect, useRef } from "react";
import { Animated, Easing, StyleSheet, Text, View } from "react-native";

const EmptyFavorites = () => {
  const { t } = useAppTranslation();

  const scaleAnim = useRef(new Animated.Value(0.8)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(scaleAnim, {
          toValue: 1,
          duration: 600,
          useNativeDriver: true,
          easing: Easing.inOut(Easing.ease),
        }),
        Animated.timing(scaleAnim, {
          toValue: 0.8,
          duration: 600,
          useNativeDriver: true,
          easing: Easing.inOut(Easing.ease),
        }),
      ])
    ).start();
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
        <Ionicons name="heart-outline" size={64} color={COLORS.primary} />
      </Animated.View>
      <Text style={styles.text}>{t("no_favorites_yet")}</Text>
      <Text style={styles.hint}>{t("add_favorites_hint")}</Text>
    </View>
  );
};

export default EmptyFavorites;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    minHeight: 300, 
  },
  text: {
    fontSize: 18,
    color: COLORS.primary,
    fontFamily: "OpenSans",
    marginTop: 10,
  },
  hint: {
    fontSize: 14,
    color: COLORS.text,
    marginTop: 5,
    textAlign: "center",
  },
});
