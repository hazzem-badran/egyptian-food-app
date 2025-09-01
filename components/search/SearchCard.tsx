import { ROUTES } from "@/constants/routes";
import useAppTranslation from "@/hooks/useAppTranslation";
import { COLORS } from "@/theme/colors";
import { getRecipeImage } from "@/utils/getRecipeImage";
import { useRouter } from "expo-router";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";

const SearchCard = ({ item }: any) => {
  const router = useRouter();
  const { isEnLang } = useAppTranslation();

  const cardImage = getRecipeImage(item?.image);

  const styles = createStyles(isEnLang);
  return (
    <TouchableOpacity
      style={[styles.recipeCard]}
      onPress={() =>
        router.push({
          pathname: `${ROUTES.SEARCH}/[id]` as any,
          params: { id: item.id, category: item.category },
        })
      }
    >
      <Image source={cardImage} style={styles.recipeImage} />
      <Text style={styles.recipeTitle}>
        {item?.title[isEnLang ? "en" : "ar"]}
      </Text>
    </TouchableOpacity>
  );
};

export default SearchCard;

const createStyles = (isEnLang: boolean) =>
  StyleSheet.create({
    recipeCard: {
      flexDirection: isEnLang ? "row" : "row-reverse",
      alignItems: "center",
      padding: 10,
      marginHorizontal: 15,
      marginBottom: 10,
      borderWidth: 1,
      borderColor: COLORS.primary,
      borderRadius: 10,
      backgroundColor: COLORS.card,
    },
    recipeImage: {
      width: 50,
      height: 50,
      borderRadius: 8,
      marginLeft: isEnLang ? 0 : 10,
      marginRight: isEnLang ? 10 : 0,
    },
    recipeTitle: {
      fontSize: 16,
      fontFamily: "OpenSans",
      color: COLORS.primary,
    },
  });
