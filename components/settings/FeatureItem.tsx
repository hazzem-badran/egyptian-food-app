import useAppTranslation from "@/hooks/useAppTranslation";
import { COLORS } from "@/theme/colors";
import { FeaturesItemProps } from "@/types/featuresItemProps.types";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, View } from "react-native";


const FeatureItem: React.FC<FeaturesItemProps> = ({
  icon,
  title,
  description,
}) => {
  const { isEnLang } = useAppTranslation();

  const styles = createStyles(isEnLang);
  return (
    <View style={styles.featureItem}>
      <View style={styles.featureIconContainer}>
        <Ionicons name={icon as any} size={28} color={COLORS.primary} />
      </View>
      <View style={styles.featureContent}>
        <Text style={styles.featureTitle}>{title}</Text>
        <Text style={styles.featureDescription}>{description}</Text>
      </View>
    </View>
  );
};

export default FeatureItem;

const createStyles = (isEnLang: boolean) =>
  StyleSheet.create({
    featureItem: {
      flexDirection: isEnLang ? "row-reverse" : "row",
      backgroundColor: "#fff",
      borderRadius: 12,
      padding: 16,
      marginBottom: 12,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 3.84,
      elevation: 5,
    },
    featureIconContainer: {
      width: 50,
      height: 50,
      borderRadius: 25,
      backgroundColor: `${COLORS.primary}15`,
      justifyContent: "center",
      alignItems: "center",
      // marginRight: isEnLang ? 0 : 12,
      marginLeft: isEnLang ? 0 : 12,
      marginRight: isEnLang ? 12 : 0,
    },
    featureContent: {
      flex: 1,
    },
    featureTitle: {
      fontSize: 16,
      fontWeight: "600",
      color: COLORS.primary,
      marginBottom: 4,
      textAlign: !isEnLang ? "right" : "left",

    },
    featureDescription: {
      fontSize: 14,
      color: "#666",
      textAlign: !isEnLang ? "right" : "left",

      lineHeight: 20,
    },
  });
