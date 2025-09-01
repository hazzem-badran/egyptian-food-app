import RecipeDetails from "@/components/shared/RecipeDetails";
import RecipeNotFound from "@/components/shared/RecipeNotFound";
import { CATEGORIES } from "@/constants/categories";
import { DESSERTS_AR, DESSERTS_EN } from "@/constants/foods/desserts";
import useAppTranslation from "@/hooks/useAppTranslation";
import { useFavoritesStore } from "@/store/favoritesStore";
import { BaseRecipe } from "@/types/recipe.types";
import { useLocalSearchParams, useRouter } from "expo-router";

const DessertsDetails = () => {
  const router = useRouter();

  // بيانات مبدأية
  const { isEnLang } = useAppTranslation();
  const { id } = useLocalSearchParams();
  const DESSERTS: BaseRecipe[] = isEnLang ? DESSERTS_EN : DESSERTS_AR;

  const dessert = DESSERTS.find((item) => item.id === Number(id));
  const { toggleFavorite, isFavorite } = useFavoritesStore();
  const favorite: boolean =
    dessert?.id !== undefined
      ? isFavorite(dessert.id, CATEGORIES.DESSERTS)
      : false;

  const handleFavoriteToggle = (): void => {
    if (dessert) {
      toggleFavorite({
        id: dessert.id,
        category: CATEGORIES.DESSERTS,
      });
    }
  };

  if (!dessert) {
    return <RecipeNotFound />;
  }

  return (
    <RecipeDetails
      recipe={dessert}
      onBack={() => router.back()}
      isFavorite={favorite}
      toggleFavorite={handleFavoriteToggle}
    />
  );
};

export default DessertsDetails;
