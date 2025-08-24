import EmptyFavorites from "@/components/favorites/EmptyFavorites";
import DishesCard from "@/components/shared/DishesCard";
import SectionHeading from "@/components/shared/SectionHeading";
import { DATA_MAP } from "@/constants/data-map";
import { ROUTES } from "@/constants/routes";
import useAppTranslation from "@/hooks/useAppTranslation";
import { useFavoritesStore } from "@/store/favoritesStore";
import { COLORS } from "@/theme/colors";
import { BaseRecipe, CategoryValue } from "@/types/recipe.types";
import React from "react";
import { FlatList, ListRenderItem, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const FavoritesPage = () => {
  const { favorites } = useFavoritesStore();
  const { isArLang } = useAppTranslation();

  const recipes: BaseRecipe[] = favorites
    .map((fav) => {
      const categoryData = DATA_MAP[fav.category as CategoryValue];
      if (!categoryData) return null;

      const categoryRecipes = isArLang ? categoryData.ar : categoryData.en;
      return (
        categoryRecipes.find((item: BaseRecipe) => item.id === fav.id) || null
      );
    })
    .filter((recipe): recipe is BaseRecipe => recipe !== null);

  const renderItem: ListRenderItem<BaseRecipe> = ({ item }) => (
    <DishesCard item={item} path={ROUTES.FAVORITES} />
  );

  const keyExtractor = (item: BaseRecipe): string => item.id.toString();

  return (
    <SafeAreaView style={styles.container}>
      <SectionHeading title="Favorite | المفضلة" />

      <FlatList
        data={recipes}
        style={styles.foodList}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={<EmptyFavorites />}
      />
    </SafeAreaView>
  );
};

export default FavoritesPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    paddingHorizontal: 30,
  },
  foodList: {
    flex: 1,
    marginVertical: 16,
  },
});
