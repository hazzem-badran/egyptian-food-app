import Button from "@/components/shared/Button";
import RecipeNotFound from "@/components/shared/RecipeNotFound";
import { ALL_RECIPES } from "@/constants/foods/allRecipes";
import useAppTranslation from "@/hooks/useAppTranslation";
import { useFavoritesStore } from "@/store/favoritesStore";
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
  TouchableOpacity,
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

const HomeDetails = () => {
  const router = useRouter();

  // بيانات مبدأية
  const { isEnLang, t } = useAppTranslation();
  const { toggleFavorite, isFavorite } = useFavoritesStore();
  const params = useLocalSearchParams();
  const id = params.id as string;
  const category = params.category as string;

  const recipeId: number = Number(id);

  const recipe: MergedRecipe | undefined = ALL_RECIPES.find(
    (item) => item.id === recipeId && item.category === category
  );

  const styles = useMemo(() => createStyles(isEnLang), [isEnLang]);

  const favorite: boolean =
    recipe?.id !== undefined ? isFavorite(recipe.id, String(category)) : false;

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

  const DishesImage: ImageSourcePropType | null = useMemo(() => {
    return recipe ? getRecipeImage(recipe.image) : null;
  }, [recipe]);

  // console.log("recipe  ", recipe);

  const handleBackPress = (): void => {
    router.back();
  };

  if (!recipe || !localizedData) {
    return <RecipeNotFound />;
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        {/* صورة الأكلة */}
        <View>
          <Image style={styles.dishesImage} source={DishesImage || undefined} />

          {/* زر القلب */}
          <TouchableOpacity
            style={styles.heartContainer}
            onPress={() => {
              if (recipe) {
                toggleFavorite({
                  id: recipe.id,
                  category: String(category),
                });
              }
            }}
          >
            <Ionicons
              name={favorite ? "heart" : "heart-outline"}
              size={24}
              color={favorite ? "red" : COLORS.primary}
            />
          </TouchableOpacity>
        </View>

        {/* محتوى الصفحة */}
        <View
          style={[
            styles.content,
            {
              alignItems: isEnLang ? "flex-start" : "flex-end",
            },
          ]}
        >
          {/* اسم الأكلة */}
          <Text style={styles.nameDishes}>{localizedData.title}</Text>

          {/* معلومات */}
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

          {/* وصف الأكلة */}
          <Text style={styles.description}>{localizedData.description}</Text>

          {/* المكونات */}
          <Text style={styles.sectionTitle}>{t("ingredients")}</Text>
          {localizedData.ingredients?.map((item: any, index: any) => (
            <View style={styles.bulletItem} key={index}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.bulletText}>{item}</Text>
            </View>
          ))}

          {/* خطوات التحضير */}
          <Text style={styles.sectionTitle}>{t("preparation")}</Text>
          {localizedData.steps?.map((step: any, index: any) => (
            <View style={styles.stepItem} key={index}>
              <Text style={styles.stepNumber}>{index + 1}.</Text>
              <Text style={styles.stepText}>{localizedData.steps[index]}</Text>
            </View>
          ))}

          {/* زر رجوع */}
          <Button title={t("back")} press={handleBackPress} />
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeDetails;

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
    },
    nameDishes: {
      color: COLORS.primary,
      fontFamily: "IBMPlexBold",
      fontSize: 26,
      marginBottom: 15,

      // direction: isEnLang ? "ltr" : "rtl",
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
    errorText: {
      color: COLORS.text,
      fontSize: 18,
      textAlign: "center",
      marginTop: 50,
    },
  });
