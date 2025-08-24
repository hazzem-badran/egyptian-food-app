import { View, Text, StyleSheet, Animated, TouchableOpacity } from "react-native";
import React, { useEffect, useRef } from "react";
import { COLORS } from "@/theme/colors";
import useAppTranslation from "@/hooks/useAppTranslation";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

const RecipeNotFound: React.FC = () => {
  const { t } = useAppTranslation();
  const scaleAnim = useRef<Animated.Value>(new Animated.Value(1)).current;

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

  const handleGoBack = (): void => {
    router.back();
  };

  return (
    <View style={styles.recipeNotFound}>
      <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
        <Ionicons
          name="alert-circle-outline"
          size={80}
          color={COLORS.primary}
        />
      </Animated.View>
      <Text style={styles.errorText}>{t("recipe_not_found")}</Text>
      
      <TouchableOpacity style={styles.backButton} onPress={handleGoBack}>
        <Ionicons
          name="arrow-back"
          size={24}
          color={COLORS.background}
          style={styles.backIcon}
        />
        <Text style={styles.backButtonText}>{t("back")}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RecipeNotFound;

const styles = StyleSheet.create({
  recipeNotFound: {
    flex: 1,
    backgroundColor: COLORS.background,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },

  errorText: {
    color: COLORS.text,
    fontSize: 18,
    textAlign: "center",
    marginTop: 50,
    marginBottom: 40,
  },

  backButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.primary,
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 25,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },

  backIcon: {
    marginRight: 8,
  },

  backButtonText: {
    color: COLORS.background,
    fontSize: 16,
    fontWeight: "600",
  },
});
