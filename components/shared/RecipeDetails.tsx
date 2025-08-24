import Button from "@/components/shared/Button";
import useAppTranslation from "@/hooks/useAppTranslation";
import { COLORS } from "@/theme/colors";
import { BaseRecipe } from "@/types/recipe.types";
import { getRecipeImage } from "@/utils/getRecipeImage";
import { Ionicons } from "@expo/vector-icons";
import { useMemo } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

interface RecipeDetailsProps {
  recipe: BaseRecipe;
  onBack?: () => void;
  isFavorite?: boolean;
  toggleFavorite?: () => void;
}

const RecipeDetails: React.FC<RecipeDetailsProps> = ({
  recipe,
  onBack,
  isFavorite = false,
  toggleFavorite,
}) => {
  const { isRTL, t } = useAppTranslation();
  const styles = useMemo(() => createStyles(isRTL), [isRTL]);
  const DishesImage = getRecipeImage(recipe.image);

  return (
    <View style={styles.container}>
      <ScrollView>
        <View>
          <Image style={styles.dishesImage} source={DishesImage} />
          {toggleFavorite && (
            <TouchableOpacity
              style={styles.heartContainer}
              onPress={toggleFavorite}
            >
              <Ionicons
                name={isFavorite ? "heart" : "heart-outline"}
                size={24}
                color={isFavorite ? "red" : COLORS.primary}
              />
            </TouchableOpacity>
          )}
        </View>

        <View
          style={[
            styles.content,
            {
              justifyContent: isRTL ? "flex-start" : "flex-end",
            },
          ]}
        >
          <Text style={styles.nameDishes}>{recipe.title}</Text>

          <View style={styles.infoRow}>
            <View style={styles.infoBox}>
              <Ionicons name="time-outline" size={22} color={COLORS.primary} />
              <Text style={styles.infoText}>{recipe.time}</Text>
            </View>

            <View style={styles.infoBox}>
              <Ionicons
                name="people-outline"
                size={22}
                color={COLORS.primary}
              />
              <Text style={styles.infoText}>{recipe.servings}</Text>
            </View>

            <View style={styles.infoBox}>
              <Ionicons
                name="speedometer-outline"
                size={22}
                color={COLORS.primary}
              />
              <Text style={styles.infoText}>{recipe.difficulty}</Text>
            </View>
          </View>

          <Text style={styles.description}>{recipe.description}</Text>

          <Text style={styles.sectionTitle}>{t("ingredients")}</Text>
          {recipe.ingredients.map((item, idx) => (
            <View style={styles.bulletItem} key={idx}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.bulletText}>{item}</Text>
            </View>
          ))}

          <Text style={styles.sectionTitle}>{t("preparation")}</Text>
          {recipe.steps.map((step, idx) => (
            <View style={styles.stepItem} key={idx}>
              <Text style={styles.stepNumber}>{idx + 1}.</Text>
              <Text style={styles.stepText}>{step}</Text>
            </View>
          ))}

          {onBack && <Button title={t("back")} press={onBack} />}
        </View>
      </ScrollView>
    </View>
  );
};

export default RecipeDetails;

const createStyles = (isRTL: boolean) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: COLORS.background,
    },
    dishesImage: {
      width: "100%",
      height: 300,
      resizeMode: "cover",
    },
    heartContainer: {
      position: "absolute",
      bottom: 15,
      right: 20,
      borderRadius: 50,
      backgroundColor: "#FFF",
      width: 44,
      height: 44,
      alignItems: "center",
      justifyContent: "center",
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 3,
      elevation: 4,
    },
    content: {
      padding: 20,
      alignItems: isRTL ? "flex-end" : "flex-start", // عمود → محاذاة أفقية
    },
    nameDishes: {
      color: COLORS.primary,
      fontFamily: "OpenSans",
      fontSize: 26,
      marginBottom: 15,
      textAlign: isRTL ? "right" : "left",
    },
    infoRow: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginBottom: 20,
    },
    infoBox: {
      flex: 1,
      marginHorizontal: 5,
      paddingVertical: 10,
      backgroundColor: COLORS.card,
      borderRadius: 12,
      alignItems: "center",
      borderWidth: 1,
      borderColor: COLORS.border,
    },
    infoText: {
      color: COLORS.primary,
      fontFamily: "OpenSans",
      textAlign: "center",
      marginTop: 5,
      fontSize: 14,
    },
    description: {
      color: COLORS.text,
      fontSize: 16,
      marginBottom: 20,
      lineHeight: 22,
      width: "100%",
      textAlign: isRTL ? "right" : "left",
    },
    sectionTitle: {
      color: COLORS.primary,
      fontSize: 20,
      marginVertical: 10,
      fontFamily: "OpenSans",
      textAlign: isRTL ? "right" : "left",
    },
    bulletItem: {
      flexDirection: isRTL ? "row-reverse" : "row",
      alignItems: "center",
      justifyContent: "flex-start",
      marginBottom: 5,
      gap: 10,
    },
    bullet: {
      fontSize: 20,
      color: COLORS.primary,
      marginRight: isRTL ? 0 : 10,
      marginLeft: isRTL ? 10 : 0,
    },
    bulletText: {
      color: COLORS.text,
      fontSize: 16,
      textAlign: isRTL ? "right" : "left",
      flexShrink: 1,
    },
    stepItem: {
      flexDirection: isRTL ? "row-reverse" : "row",
      marginBottom: 10,
      alignItems: "center",
      gap: 10,
    },
    stepNumber: {
      color: COLORS.primary,
      fontSize: 18,
      fontFamily: "OpenSans",
      marginRight: isRTL ? 0 : 8,
      marginLeft: isRTL ? 8 : 0,
    },
    stepText: {
      color: COLORS.text,
      fontSize: 16,
      flex: 1,
      lineHeight: 22,
      textAlign: isRTL ? "right" : "left",
    },
    errorText: {
      color: COLORS.text,
      fontSize: 18,
      textAlign: "center",
      marginTop: 50,
    },
  });


// const createStyles = (isRTL: boolean) =>
//   StyleSheet.create({
//     container: {
//       flex: 1,
//       backgroundColor: COLORS.background,
//     },
//     dishesImage: {
//       width: "100%",
//       height: 300,
//       resizeMode: "cover",
//     },
//     heartContainer: {
//       position: "absolute",
//       bottom: 15,
//       right: 20,
//       borderRadius: 50,
//       backgroundColor: "#FFF",
//       width: 44,
//       height: 44,
//       alignItems: "center",
//       justifyContent: "center",
//       shadowColor: "#000",
//       shadowOffset: { width: 0, height: 2 },
//       shadowOpacity: 0.2,
//       shadowRadius: 3,
//       elevation: 4,
//     },
//     content: {
//       padding: 20,
//     },
//     nameDishes: {
//       color: COLORS.primary,
//       fontFamily: "OpenSans",
//       fontSize: 26,
//       marginBottom: 15,
//     },
//     infoRow: {
//       flexDirection: "row",
//       justifyContent: "space-between",
//       marginBottom: 20,
//     },
//     infoBox: {
//       flex: 1,
//       marginHorizontal: 5,
//       paddingVertical: 10,
//       backgroundColor: COLORS.card,
//       borderRadius: 12,
//       alignItems: "center",
//       borderWidth: 1,
//       borderColor: COLORS.border,
//     },
//     infoText: {
//       color: COLORS.primary,
//       fontFamily: "OpenSans",
//       textAlign: "center",
//       marginTop: 5,
//       fontSize: 14,
//     },
//     description: {
//       color: COLORS.text,
//       fontSize: 16,
//       marginBottom: 20,
//       lineHeight: 22,
//       width: "100%",
//       // textAlign: isRTL ? "left" : "right",
//               justifyContent: isRTL ? "flex-start" : "flex-end",

      
//     },
//     sectionTitle: {
//       color: COLORS.primary,
//       fontSize: 20,
//       marginVertical: 10,
//       fontFamily: "OpenSans",
//     },
//     bulletItem: {
//       flexDirection: isRTL ? "row" : "row-reverse",
//       alignItems: "center",
//       marginBottom: 5,
//       gap: 10,
//     },
//     bullet: {
//       fontSize: 20,
//       color: COLORS.primary,
//       // marginRight: 10,
//       marginRight: isRTL ? 10 : 0,
//       marginLeft: isRTL ? 0 : 10,
//     },
//     bulletText: {
//       color: COLORS.text,
//       fontSize: 16,
//     },
//     stepItem: {
//       flexDirection: isRTL ? "row" : "row-reverse",
//       marginBottom: 10,
//       alignContent: "center",
//       gap: 10,
//     },
//     stepNumber: {
//       color: COLORS.primary,
//       fontSize: 18,
//       // marginRight: 8,
//       marginRight: isRTL ? 8 : 0,
//       marginLeft: isRTL ? 0 : 8,

//       fontFamily: "OpenSans",
//     },
//     stepText: {
//       color: COLORS.text,
//       fontSize: 16,
//       flex: 1,
//       lineHeight: 22,
//       textAlign: isRTL ? "left" : "right",
//     },

//     errorText: {
//       color: COLORS.text,
//       fontSize: 18,
//       textAlign: "center",
//       marginTop: 50,
//     },
//   });
