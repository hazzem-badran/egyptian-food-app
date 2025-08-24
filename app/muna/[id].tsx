import RecipeDetails from "@/components/shared/RecipeDetails";
import RecipeNotFound from "@/components/shared/RecipeNotFound";
import { CATEGORIES } from "@/constants/categories";
import { MUNA_AR, MUNA_EN } from "@/constants/foods/muna";
import useAppTranslation from "@/hooks/useAppTranslation";
import { useFavoritesStore } from "@/store/favoritesStore";
import { BaseRecipe, CategoryKey } from "@/types/recipe.types";
import { useLocalSearchParams, useRouter } from "expo-router";

const MunaDetails = () => {
  const router = useRouter();

  //  مبدأية
  const { isEnLang } = useAppTranslation();
  const { id } = useLocalSearchParams<{ id: string }>();
  const MUNAS: BaseRecipe[] = isEnLang ? MUNA_EN : MUNA_AR;

  const muna: BaseRecipe | undefined = MUNAS.find(
    (item) => item.id === Number(id)
  );

  const { toggleFavorite, isFavorite } = useFavoritesStore();
  const favorite: boolean =
    muna?.id !== undefined
      ? isFavorite(muna.id, CATEGORIES.MUNA as CategoryKey)
      : false;

  // Handle case when muna is not found
  if (!muna) {
    return <RecipeNotFound />;
  }

  const handleFavoriteToggle = (): void => {
    if (muna) {
      toggleFavorite({ id: muna.id, category: CATEGORIES.MUNA as CategoryKey });
    }
  };

  const handleBackPress = (): void => {
    router.back();
  };

  return (
    <RecipeDetails
      recipe={muna}
      onBack={handleBackPress}
      isFavorite={favorite}
      toggleFavorite={handleFavoriteToggle}
    />
  );
};

export default MunaDetails;
