import RecipeDetails from "@/components/shared/RecipeDetails";
import RecipeNotFound from "@/components/shared/RecipeNotFound";
import { CATEGORIES } from "@/constants/categories";
import { SALADS_AR, SALADS_EN } from "@/constants/foods/salads";
import useAppTranslation from "@/hooks/useAppTranslation";
import { useFavoritesStore } from "@/store/favoritesStore";
import { BaseRecipe } from "@/types/recipe.types";
import { useLocalSearchParams, useRouter } from "expo-router";
import React from "react";

const SaladsDetails: React.FC = () => {
  const router = useRouter();

  const { isEnLang } = useAppTranslation();
  const { id } = useLocalSearchParams<{ id: string }>();
  const SALADS: BaseRecipe[] = isEnLang ? SALADS_EN : SALADS_AR;

  const salads: BaseRecipe | undefined = SALADS.find(
    (item) => item.id === Number(id)
  );
  const { toggleFavorite, isFavorite } = useFavoritesStore();
  const favorite: boolean =
    salads?.id !== undefined ? isFavorite(salads.id, CATEGORIES.SALADS) : false;


  // Handle case when recipe is not found
  if (!salads) {
    return <RecipeNotFound />;
  }

  const handleFavoriteToggle = (): void => {
    if (salads) {
      toggleFavorite({ id: salads.id, category: CATEGORIES.SALADS });
    }
  };

  const handleBackPress = (): void => {
    router.back();
  };

  return (
    <RecipeDetails
      recipe={salads}
      onBack={handleBackPress}
      isFavorite={favorite}
      toggleFavorite={handleFavoriteToggle}
    />
  );
};

export default SaladsDetails;