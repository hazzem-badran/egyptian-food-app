import RecipeDetails from "@/components/shared/RecipeDetails";
import RecipeNotFound from "@/components/shared/RecipeNotFound";
import { CATEGORIES } from "@/constants/categories";
import { APPETIZERS_AR, APPETIZERS_EN } from "@/constants/foods/appetizers";
import useAppTranslation from "@/hooks/useAppTranslation";
import { useFavoritesStore } from "@/store/favoritesStore";
import { BaseRecipe } from "@/types/recipe.types";
import { useLocalSearchParams, useRouter } from "expo-router";

const AppetiersDetails = () => {
  const router = useRouter();

  const { isEnLang } = useAppTranslation();
  const { id } = useLocalSearchParams<{ id: string }>();
  const APPETIZERS: BaseRecipe[] = isEnLang ? APPETIZERS_EN : APPETIZERS_AR;

  const appetizer: BaseRecipe | undefined = APPETIZERS.find(
    (item) => item.id === Number(id)
  );
  const { toggleFavorite, isFavorite } = useFavoritesStore();
  const favorite: boolean =
    appetizer?.id !== undefined
      ? isFavorite(appetizer.id, CATEGORIES.APPETIZERS)
      : false;

  const handleFavoriteToggle = (): void => {
    if (appetizer) {
      toggleFavorite({
        id: appetizer.id,
        category: CATEGORIES.APPETIZERS,
      });
    }
  };

  if (!appetizer) {
    return <RecipeNotFound />;
  }

  return (
    <RecipeDetails
      recipe={appetizer}
      onBack={() => router.back()}
      isFavorite={favorite}
      toggleFavorite={handleFavoriteToggle}
    />
  );
};

export default AppetiersDetails;
