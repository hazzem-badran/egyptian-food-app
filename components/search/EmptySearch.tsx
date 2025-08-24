import useAppTranslation from "@/hooks/useAppTranslation";
import { COLORS } from "@/theme/colors";
import { Ionicons } from "@expo/vector-icons";
import React, { useEffect, useRef } from "react";
import { Animated, StyleSheet, Text, View } from "react-native";

const EmptySearch = () => {
  const { t } = useAppTranslation();

  const scaleAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(scaleAnim, {
          toValue: 1.2,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(scaleAnim, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  return (
    <View style={styles.emptyContainer}>
      <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
        <Ionicons name="search-outline" size={48} color={COLORS.primary} />
      </Animated.View>
      <Text style={styles.emptyText}>{t("no_results_found")}</Text>
      <Text style={styles.emptyHint}>{t("try_another_keyword")}</Text>
    </View>
  );
};

export default EmptySearch;

const styles = StyleSheet.create({
  emptyText: {
    fontSize: 18,
    color: COLORS.primary,
    fontFamily: "OpenSans",
    marginTop: 10,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    minHeight: 100,
  },

  emptyHint: {
    fontSize: 14,
    color: COLORS.text,
    marginTop: 5,
    textAlign: "center",

  },
});
