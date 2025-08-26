import RecipeDetails from "@/components/shared/RecipeDetails";
import RecipeNotFound from "@/components/shared/RecipeNotFound";
import { CATEGORIES } from "@/constants/categories";
import { PHARAONIC_AR, PHARAONIC_EN } from "@/constants/foods/pharaonic";
import useAppTranslation from "@/hooks/useAppTranslation";
import { useFavoritesStore } from "@/store/favoritesStore";
import { BaseRecipe } from "@/types/recipe.types";
import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useMemo } from "react";

const DishesDetails: React.FC = () => {
  const router = useRouter();

  // بيانات مبدأية
  const { isEnLang } = useAppTranslation();
  const { id } = useLocalSearchParams<{ id: string }>();
  const RECIPES: BaseRecipe[] = isEnLang ? PHARAONIC_EN : PHARAONIC_AR;

  const recipe: BaseRecipe | undefined = useMemo(
    () => RECIPES.find((item: BaseRecipe) => item.id === Number(id)),
    [RECIPES, id]
  );

  const { toggleFavorite, isFavorite } = useFavoritesStore();
  const favorite: boolean = useMemo(
    () =>
      recipe?.id !== undefined
        ? isFavorite(recipe.id, CATEGORIES.DIGNITY)
        : false,
    [recipe?.id, isFavorite]
  );

  const handleFavoriteToggle = (): void => {
    if (recipe) {
      toggleFavorite({
        id: recipe.id,
        category: CATEGORIES.DIGNITY,
      });
    }
  };

  if (!recipe) {
    return <RecipeNotFound />;
  }

  return (
    <RecipeDetails
      recipe={recipe}
      onBack={() => router.back()}
      isFavorite={favorite}
      toggleFavorite={handleFavoriteToggle}
    />
  );
};

export default DishesDetails;
