import useAppTranslation from "@/hooks/useAppTranslation";
import { COLORS } from "@/theme/colors";
import { getRecipeImage } from "@/utils/getRecipeImage";
import { useRouter } from "expo-router";
import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
} from "react-native";

const DishesCard = ({ item, path }: any) => {
  const router = useRouter();
  const { t, isEnLang } = useAppTranslation();

  const dynamicTextAlign: TextStyle = {
    textAlign: !isEnLang ? "right" : "left",
  };

  // Extract category from path
  // const category = path.replace("/", "");
  const cardImage = getRecipeImage(item?.image);

  return (
    <TouchableOpacity
      style={styles.dishesCard}
      onPress={() => router.push(`${path}/${item.id}` as any)}
    >
      <Image style={styles.cardImge} source={cardImage} />
      <Text
        numberOfLines={1} 
        ellipsizeMode="tail"
        style={[styles.titleCard, dynamicTextAlign]}
      >
        {t(`${item.title}`)}
      </Text>
    </TouchableOpacity>
  );
};

export default DishesCard;

const styles = StyleSheet.create({
  dishesCard: {
    backgroundColor: COLORS.card,
    width: "100%",
    height: 250,
    borderRadius: 9,
    marginBottom: 25,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: COLORS.border,
    shadowColor: COLORS.shadow,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardImge: {
    width: "100%",
    height: "75%",
    resizeMode: "cover",
  },
  titleCard: {
    color: COLORS.primary,
    // fontFamily: "OpenSansItalic",
    fontFamily: "OpenSans",
    fontSize: 22,
    fontWeight: "900",
    textAlign: "right",
    padding: 15,
    paddingRight: 25,
    //  borderTopWidth: 4,
    // borderTopColor: COLORS.sectionColors.oliveDust,
  },
});
