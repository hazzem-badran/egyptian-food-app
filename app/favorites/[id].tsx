import RecipeDetails from "@/components/shared/RecipeDetails";
import RecipeNotFound from "@/components/shared/RecipeNotFound";
import { DATA_MAP } from "@/constants/data-map";
import useAppTranslation from "@/hooks/useAppTranslation";
import { useFavoritesStore } from "@/store/favoritesStore";
import { COLORS } from "@/theme/colors";
import { FavoriteItem } from "@/types/favoritesStore.types";
import { BaseRecipe, CategoryValue } from "@/types/recipe.types";
import { useLocalSearchParams, useRouter } from "expo-router";
import {
  StyleSheet,
  Text,
  View,
} from "react-native";

const FavoriteDetails = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { toggleFavorite, isFavorite, favorites } = useFavoritesStore();
  const { isEnLang, t } = useAppTranslation();
  const router = useRouter();

  // البحث عن المفضلة حسب المعرف
  const favorite: FavoriteItem | undefined = favorites.find(
    (fav) => fav.id === Number(id)
  );

  if (!favorite) {
    return (
      <View style={createStyles(isEnLang).container}>
        <Text style={createStyles(isEnLang).errorText}>
          {t("favorite_not_found")}
        </Text>
      </View>
    );
  }

  const categoryData = DATA_MAP[favorite.category as CategoryValue];

  const recipe: BaseRecipe | undefined = (
    isEnLang ? categoryData?.en : categoryData?.ar
  )?.find((item: BaseRecipe) => item.id === favorite.id);

  const isFav: boolean = isFavorite(Number(id), favorite.category);


  const handleFavoriteToggle = (): void => {
    if (recipe) {
      toggleFavorite({ id: recipe.id, category: favorite.category });
    }
    router.back();
  };

  const handleBackPress = (): void => {
    router.back();
  };

  if (!recipe) {
    return <RecipeNotFound />;
  }

  return (
      <RecipeDetails
        recipe={recipe}
        onBack={handleBackPress}
        isFavorite={isFav}
        toggleFavorite={handleFavoriteToggle}
      />
  );
};

export default FavoriteDetails;

const createStyles = (isEnLang: boolean) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: COLORS.background,
    },
    errorText: {
      color: COLORS.text,
      fontSize: 18,
      textAlign: "center",
      marginTop: 50,
    },    
  });
