import { ListRenderItem, FlatList, StyleSheet } from "react-native";
import React from "react";
import { GenericPageProps } from "@/types/genericPage.types";
import DishesCard from "./DishesCard";
import { BaseRecipe } from "@/types/recipe.types";
import { SafeAreaView } from "react-native-safe-area-context";
import SectionHeading from "./SectionHeading";
import { COLORS } from "@/theme/colors";
import useAppTranslation from "@/hooks/useAppTranslation";

const GenericPage: React.FC<GenericPageProps> = ({ title, data, route }) => {
  const { isEnLang } = useAppTranslation();


  const styles = createStyles(isEnLang);


  const renderItem: ListRenderItem<BaseRecipe> = ({ item }) => (
    <DishesCard item={item} path={route} />
  );
  const keyExtractor = (item: BaseRecipe): string => item.id.toString();

  return (
    <SafeAreaView style={styles.container}>
      <SectionHeading title={title} />    
      <FlatList
        data={data}
        style={styles.foodList}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default GenericPage;

const createStyles = (isEnLang: boolean) =>
  StyleSheet.create({
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
