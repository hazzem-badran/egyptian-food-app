import RecipeDetails from "@/components/shared/RecipeDetails";
import RecipeNotFound from "@/components/shared/RecipeNotFound";
import { CATEGORIES } from "@/constants/categories";
import { DRINKS_AR, DRINKS_EN } from "@/constants/foods/drinks";
import useAppTranslation from "@/hooks/useAppTranslation";
import { useFavoritesStore } from "@/store/favoritesStore";
import { BaseRecipe } from "@/types/recipe.types";
import { useLocalSearchParams, useRouter } from "expo-router";

const DrinksDetails = () => {
  const router = useRouter();

  const { isEnLang } = useAppTranslation();
  const { id } = useLocalSearchParams<{ id: string }>();
  const { toggleFavorite, isFavorite } = useFavoritesStore();

  const DRINKS: BaseRecipe[] = isEnLang ? DRINKS_EN : DRINKS_AR;

  const drink: BaseRecipe | undefined = DRINKS.find(
    (item) => item.id === Number(id)
  );
  const favorite: boolean =
    drink?.id !== undefined ? isFavorite(drink.id, CATEGORIES.DRINKS) : false;

  const handleFavoriteToggle = (): void => {
    if (drink) {
      toggleFavorite({
        id: drink.id,
        category: CATEGORIES.DRINKS,
      });
    }
  };

  const handleBackPress = (): void => {
    router.back();
  };

  if (!drink) {
    return <RecipeNotFound />;
  }

  return (
    <RecipeDetails
      recipe={drink}
      onBack={handleBackPress}
      isFavorite={favorite}
      toggleFavorite={handleFavoriteToggle}
    />
  );
};

export default DrinksDetails;
