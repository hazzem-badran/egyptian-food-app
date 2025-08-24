import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import React from "react";
import { COLORS } from "@/theme/colors";
import useAppTranslation from "@/hooks/useAppTranslation";

interface CardProps {
  title: string;
  color: keyof typeof COLORS.cardColors;
  isFull?: boolean;
}

const Card: React.FC<CardProps> = ({ title, color, isFull }) => {
  const { t } = useAppTranslation();

  const colors = COLORS.cardColors[color];
  const styles = createStyles(colors);

  return (
    <TouchableOpacity
      style={[styles.foodCategory, isFull && styles.foodCategoryFull]}
    >
      <View style={styles.iconContainer}>
        <Image
          source={require("@/assets/icons/salad.png")}
          style={styles.foodIcon}
        />
      </View>
      <Text style={[styles.foodName]}>{t(`${title}`)}</Text>
      {/* {isFull && (
        <View style={styles.iconContainer}>
          <Image
            source={require("@/assets/icons/salad.png")}
            style={styles.foodIcon}
          />
        </View>
      )} */}
    </TouchableOpacity>
  );
};

export default Card;

const createStyles = (color: any) =>
  StyleSheet.create({
    foodCategory: {
      width: "47%",
      height: 140,
      backgroundColor: color.background,
      borderColor: color.border,
      borderRadius: 20,
      alignItems: "center",
      justifyContent: "space-between",
      paddingVertical: 20,
      shadowColor: COLORS.primary,
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.15,
      shadowRadius: 8,
      elevation: 6,
      borderWidth: 3,
    },
    iconContainer: {
      width: 70,
      height: 70,
      borderRadius: 35,
      backgroundColor: "rgba(255, 255, 255, 0.15)",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: 8,
      shadowColor: COLORS.shadow,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.2,
      shadowRadius: 4,
      elevation: 3,
    },
    foodIcon: {
      width: 45,
      height: 45,
      // tintColor: COLORS.white,
      tintColor: color.tintColor,
    },
    foodName: {
      fontSize: 18,
      fontFamily: "IBMPlexBold",
      color: color.text,
      textAlign: "center",
      marginTop: 5,
      fontWeight: "bold",
    },
    foodCategoryFull: {
      width: "100%",
      height: 120,
      borderRadius: 20,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-around",
      marginVertical: 10,
      shadowColor: COLORS.primary,
      shadowOffset: {
        width: 0,
        height: 6,
      },
      shadowOpacity: 0.2,
      shadowRadius: 10,
      elevation: 8,
      borderWidth: 2,
    },
    colorCardFull: {
      backgroundColor: color.background,
      borderColor: color.border,
    },
  });
