import FoodCard from "@/components/home/FoodCard";
import HelpTools from "@/components/home/HelpTools";
import HeroImage from "@/components/home/HeroImage";
import { FOOD_ROWS } from "@/constants/foodRows";
import useAppTranslation from "@/hooks/useAppTranslation";
import { COLORS } from "@/theme/colors";
import { Dimensions, Image, StyleSheet, View } from "react-native";
import Animated, { useAnimatedRef } from "react-native-reanimated";

const { width } = Dimensions.get("window");

export default function Index() {
  const scrollRef = useAnimatedRef<Animated.ScrollView>();
  const { isArLang } = useAppTranslation();

  return (
    <View style={styles.root}>
      <HelpTools />
      <Animated.ScrollView
        ref={scrollRef}
        scrollEventThrottle={16}
        style={[styles.content]}
        bounces
        showsVerticalScrollIndicator={false}
      >
        <HeroImage scrollRef={scrollRef} isArLang={isArLang} />

        <Image
          source={require("@/assets/images/home/decor.jpg")}
          style={styles.decor}
        />

        <View style={styles.containItems}>
          {FOOD_ROWS.map((row, rowIndex) => (
            <View key={rowIndex} style={styles.rowItems}>
              {row.map((item, index) =>
                item ? (
                  <FoodCard
                    key={item.title}
                    title={item.title}
                    color={item.color}
                    isFull={item.isFull}
                    route={item.route}
                  />
                ) : (
                  <View key={`empty-${index}`} style={styles.emptyCard} />
                )
              )}
            </View>
          ))}
        </View>
      </Animated.ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  decor: {
    width: width,
    height: 55,
    marginBottom: 20,
    resizeMode: "repeat",
  },
  content: {
    width: "100%",
    backgroundColor: COLORS.background,
  },
  containItems: {
    paddingTop: 9,
    paddingBottom: 80,
  },
  rowItems: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 20,
    width: "100%",
  },
  emptyCard: {
    width: "47%",
  },
});
