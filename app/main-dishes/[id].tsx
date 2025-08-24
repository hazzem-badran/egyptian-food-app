import RecipeDetails from "@/components/shared/RecipeDetails";
import RecipeNotFound from "@/components/shared/RecipeNotFound";
import { CATEGORIES } from "@/constants/categories";
import { RECIPES_AR, RECIPES_EN } from "@/constants/foods/recipes";
import useAppTranslation from "@/hooks/useAppTranslation";
import { useFavoritesStore } from "@/store/favoritesStore";
import { BaseRecipe, CategoryKey } from "@/types/recipe.types";
import { useLocalSearchParams, useRouter } from "expo-router";
import React from "react";


const DishesDetails = () => {
  const router = useRouter();

  // بيانات مبدأية
  const { isEnLang } = useAppTranslation();
  const { id } = useLocalSearchParams<{ id: string }>();
  const RECIPES: BaseRecipe[] = isEnLang ? RECIPES_EN : RECIPES_AR;

  const recipe: BaseRecipe | undefined = RECIPES.find(
    (item) => item.id === Number(id)
  );
  const { toggleFavorite, isFavorite } = useFavoritesStore();
  const favorite: boolean =
    recipe?.id !== undefined
      ? isFavorite(recipe.id, CATEGORIES.MAIN_DISHES as CategoryKey)
      : false;

  if (!recipe) {
    return <RecipeNotFound />;
  }

  const handleFavoriteToggle = (): void => {
    if (recipe) {
      toggleFavorite({ id: recipe.id, category: "recipes" });
    }
  };

  const handleBackPress = (): void => {
    router.back();
  };

  return (
    <RecipeDetails
      recipe={recipe}
      onBack={handleBackPress}
      isFavorite={favorite}
      toggleFavorite={handleFavoriteToggle}
    />
  );
};

export default DishesDetails;
