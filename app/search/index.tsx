import NotFoundSearch from "@/components/search/EmptySearch";
import SearchCard from "@/components/search/SearchCard";
import SectionHeading from "@/components/shared/SectionHeading";
import { ALL_RECIPES } from "@/constants/foods/allRecipes";
// constents
import useAppTranslation from "@/hooks/useAppTranslation";
import { COLORS } from "@/theme/colors";
import { MergedRecipe } from "@/types/recipe.types";
import React, { useCallback, useState } from "react";
import {
  FlatList,
  ListRenderItem,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SearchPage: React.FC = () => {
  const { t, isEnLang } = useAppTranslation();
  const styles = createStyles(isEnLang);

  // State للبحث والنتائج
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [results, setResults] = useState<MergedRecipe[]>([]);

  // دالة البحث
  const searchRecipes = useCallback(
    (query: string, isEnLang: boolean): MergedRecipe[] => {
      if (!query.trim()) return [];

      const langKey: keyof { ar: string; en: string } = isEnLang ? "en" : "ar";
      return ALL_RECIPES.filter(
        (recipe: MergedRecipe) =>
          recipe.title[langKey].toLowerCase().includes(query.toLowerCase()) ||
          recipe.description[langKey]
            .toLowerCase()
            .includes(query.toLowerCase())
      );
    },
    []
  );

  // حدث عند تغيير النص
  const handleSearch = useCallback(
    (query: string): void => {
      setSearchQuery(query);
      const filtered: MergedRecipe[] = searchRecipes(query, isEnLang);
      // إزالة أي تكرارات محتملة
      const uniqueResults: MergedRecipe[] = filtered.filter(
        (item: MergedRecipe, index: number, self: MergedRecipe[]) =>
          index === self.findIndex((r: MergedRecipe) => r.id === item.id)
      );
      setResults(uniqueResults);
    },
    [isEnLang, searchRecipes]
  );

  // Render item function for FlatList
  const renderSearchItem: ListRenderItem<MergedRecipe> = useCallback(
    ({ item }) => <SearchCard item={item} />,

    []
  );

  // Key extractor for FlatList
  const keyExtractor = useCallback(
    (item: MergedRecipe): string => item.id.toString(),
    []
  );

  // console.log("results  ", results);
  return (
    <SafeAreaView style={styles.container}>
      <SectionHeading title={t("search")} />

      {/* حقل البحث */}
      <View style={styles.inputContainer} >
        <TextInput
          placeholder={t("search")}
          placeholderTextColor={COLORS.primary}
          style={styles.input}
          value={searchQuery}
          onChangeText={handleSearch}
          returnKeyType="search"
          clearButtonMode="while-editing"
        />
      </View>

      {!searchQuery ? (
        <Text style={styles.emptyText}>{t("start_typing_to_search")}</Text>
      ) : (
        <FlatList
          data={results}
          keyExtractor={keyExtractor}
          renderItem={renderSearchItem}
          ListEmptyComponent={<NotFoundSearch />}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={
            results.length === 0 ? styles.emptyContainer : undefined
          }
        />
      )}
    </SafeAreaView>
  );
};

export default SearchPage;

// ستايلات مع دعم RTL
const createStyles = (isEnLang: boolean) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: COLORS.background,
    },
    inputContainer: {
      flexDirection: "row",
      alignItems: "center",
      borderWidth: 2,
      backgroundColor: COLORS.card,
      borderColor: COLORS.primary,
      borderRadius: 15,
      padding: 4,
      marginBottom: 20,
      marginHorizontal: 15,
    },
    input: {
      flex: 1,
      padding: 12,
      fontSize: 16,
      textAlign: isEnLang ? "left" : "right",
    },
    emptyText: {
      textAlign: "center",
      marginTop: 20,
      fontSize: 16,
      color: COLORS.primary,
      fontFamily: "IBMPlexBold",
    },
    emptyContainer: {
      flexGrow: 1,
      justifyContent: "center",
    },
  });
