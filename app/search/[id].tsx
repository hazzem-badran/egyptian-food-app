import Button from "@/components/shared/Button";
import RecipeNotFound from "@/components/shared/RecipeNotFound";
import { ALL_RECIPES } from "@/constants/foods/allRecipes";
// import { ALL_RECIPES } from "@/constants/foods/allRecipes";
import useAppTranslation from "@/hooks/useAppTranslation";
import { COLORS } from "@/theme/colors";
import { MergedRecipe } from "@/types/recipe.types";
import { getRecipeImage } from "@/utils/getRecipeImage";
import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useMemo } from "react";
import {
  Image,
  ImageSourcePropType,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

interface LocalizedRecipeData {
  title: string;
  description: string;
  time: string;
  servings: string;
  difficulty: string;
  ingredients: string[];
  steps: string[];
}

const SearchDetails: React.FC = () => {
  const params = useLocalSearchParams();
  const id = params.id as string;
  const category = params.category as string;
  const { t, isEnLang } = useAppTranslation();
  const router = useRouter();

  const styles = useMemo(() => createStyles(isEnLang), [isEnLang]);

  // نحول id لرقم
  const recipeId: number = Number(id);

  // نجيب العنصر
  const recipe: MergedRecipe | undefined = ALL_RECIPES.find(
    (item: MergedRecipe) => item.id === recipeId && item.category === category
  );

  // Extract localized data using useMemo for performance
  const localizedData: LocalizedRecipeData | null = useMemo(() => {
    if (!recipe) return null;

    const langKey: keyof { ar: string; en: string } = isEnLang ? "en" : "ar";

    return {
      title: recipe.title[langKey],
      description: recipe.description[langKey],
      time: recipe.time[langKey],
      servings: recipe.servings[langKey],
      difficulty: recipe.difficulty[langKey],
      ingredients: recipe.ingredients[langKey],
      steps: recipe.steps[langKey],
    };
  }, [recipe, isEnLang]);

  const dishImage: ImageSourcePropType | null = useMemo(() => {
    return recipe ? getRecipeImage(recipe.image) : null;
  }, [recipe]);

  const handleBackPress = (): void => {
    router.back();
  };

  if (!recipe || !localizedData) {
    return <RecipeNotFound />;
  }

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* صورة الأكلة */}
        {dishImage && <Image style={styles.dishesImage} source={dishImage} />}

        {/* المحتوى */}
        <View
          style={[
            styles.content,
            {
              alignItems: isEnLang ? "flex-start" : "flex-end",
            },
          ]}
        >
          {/* الاسم */}
          <Text style={styles.nameDishes}>{localizedData.title}</Text>

          {/* معلومات الوقت والصعوبة والحصص */}
          <View style={styles.infoRow}>
            <View style={styles.infoBox}>
              <Ionicons name="time-outline" size={22} color={COLORS.primary} />
              <Text style={styles.infoText}>{localizedData.time}</Text>
            </View>

            <View style={styles.infoBox}>
              <Ionicons
                name="people-outline"
                size={22}
                color={COLORS.primary}
              />
              <Text style={styles.infoText}>{localizedData.servings}</Text>
            </View>

            <View style={styles.infoBox}>
              <Ionicons
                name="speedometer-outline"
                size={22}
                color={COLORS.primary}
              />
              <Text style={styles.infoText}>{localizedData.difficulty}</Text>
            </View>
          </View>

          {/* الوصف */}
          <Text style={styles.description}>{localizedData.description}</Text>

          {/* المكونات */}
          <Text style={styles.sectionTitle}>{t("ingredients")}</Text>
          {localizedData.ingredients.map((item: string, index: number) => (
            <View style={styles.bulletItem} key={index}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.bulletText}>{item}</Text>
            </View>
          ))}

          {/* خطوات التحضير */}
          <Text style={styles.sectionTitle}>{t("preparation")}</Text>
          {localizedData.steps.map((step: string, index: number) => (
            <View style={styles.stepItem} key={index}>
              <Text style={styles.stepNumber}>{index + 1}.</Text>
              <Text style={styles.stepText}>{step}</Text>
            </View>
          ))}

          {/* زر الرجوع */}
          <Button title={t("back")} press={handleBackPress} />
        </View>
      </ScrollView>
    </View>
  );
};

export default SearchDetails;

const createStyles = (isEnLang: boolean) =>
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
    content: {
      padding: 20,
    },
    nameDishes: {
      color: COLORS.primary,
      fontFamily: "IBMPlexBold",
      fontSize: 26,
      marginBottom: 15,
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
      fontFamily: "IBMPlexBold",
      textAlign: "center",
      marginTop: 5,
      fontSize: 14,
    },
    description: {
      color: COLORS.text,
      fontSize: 16,
      marginBottom: 20,
      lineHeight: 22,
      textAlign: isEnLang ? "left" : "right",
    },
    sectionTitle: {
      color: COLORS.primary,
      fontSize: 20,
      marginVertical: 10,
      fontFamily: "IBMPlexBold",
    },
    bulletItem: {
      flexDirection: isEnLang ? "row" : "row-reverse",
      alignItems: "center",
      marginBottom: 5,
      gap: 10,
    },
    bullet: {
      fontSize: 20,
      color: COLORS.primary,
      marginRight: 10,
    },
    bulletText: {
      color: COLORS.text,
      fontSize: 16,
    },
    stepItem: {
      flexDirection: isEnLang ? "row" : "row-reverse",
      marginBottom: 10,
      alignContent: "center",
      gap: 10,
    },
    stepNumber: {
      color: COLORS.primary,
      fontSize: 18,
      marginRight: 8,
      fontFamily: "IBMPlexBold",
    },
    stepText: {
      color: COLORS.text,
      fontSize: 16,
      flex: 1,
      lineHeight: 22,
      textAlign: isEnLang ? "left" : "right",
    },

    notFound: {
      textAlign: "center",
      fontSize: 18,
      marginTop: 50,
      color: COLORS.primary,
    },
  });
