import RecipeDetails from "@/components/shared/RecipeDetails";
import RecipeNotFound from "@/components/shared/RecipeNotFound";
import { CATEGORIES } from "@/constants/categories";
import { BAKED_AR, BAKED_EN } from "@/constants/foods/baked";
import useAppTranslation from "@/hooks/useAppTranslation";
import { useFavoritesStore } from "@/store/favoritesStore";
import { BaseRecipe } from "@/types/recipe.types";
import { useLocalSearchParams, useRouter } from "expo-router";

const BakedDetails = () => {
  const router = useRouter();

  const { isEnLang } = useAppTranslation();
  const { id } = useLocalSearchParams();

  const BAKERYS: BaseRecipe[] = isEnLang ? BAKED_EN : BAKED_AR;

  const bakery: BaseRecipe | undefined = BAKERYS.find(
    (item) => item.id === Number(id)
  );

  const { toggleFavorite, isFavorite } = useFavoritesStore();
  const favorite: boolean =
    bakery?.id !== undefined ? isFavorite(bakery.id, CATEGORIES.BAKED) : false;

  const handleFavoriteToggle = (): void => {
    if (bakery) {
      toggleFavorite({ id: bakery.id, category: CATEGORIES.BAKED });
    }
  };

  if (!bakery) {
    return <RecipeNotFound />;
  }

  return (
    <RecipeDetails
      recipe={bakery}
      onBack={() => router.back()}
      isFavorite={favorite}
      toggleFavorite={handleFavoriteToggle}
    />
  );
};

export default BakedDetails;
