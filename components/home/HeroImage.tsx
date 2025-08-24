import React, { useEffect, useState, useCallback } from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  Text,
  TouchableOpacity,
} from "react-native";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useScrollViewOffset,
} from "react-native-reanimated";
import { ALL_RECIPES } from "@/constents/foods/allRecipes";
import { useRouter } from "expo-router";
import { HeroImageProps } from "@/types/heroImageProps.types";
import { getRecipeImage } from "@/utils/getRecipeImage";

const IMG_HEIGHT = 300;
const { width } = Dimensions.get("window");

const HeroImage: React.FC<HeroImageProps> = ({ scrollRef, isArLang }) => {
  const [shuffledRecipes, setShuffledRecipes] = useState<any[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isInitialized, setIsInitialized] = useState(false);
  const scrollOffset = useScrollViewOffset(scrollRef);
  const router = useRouter();

  const imageAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            scrollOffset.value,
            [-IMG_HEIGHT, 0, IMG_HEIGHT],
            [-IMG_HEIGHT / 2, 0, 0]
          ),
        },
        {
          scale: interpolate(
            scrollOffset.value,
            [-IMG_HEIGHT, 0, IMG_HEIGHT],
            [2, 1, 1]
          ),
        },
      ],
    };
  });

  // // دالة خلط Fisher-Yates المحسنة
  const shuffleRecipes = useCallback(() => {
    const shuffled = [...ALL_RECIPES];

    // خوارزمية Fisher-Yates للخلط العشوائي
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    return shuffled;
  }, []);

  // تهيئة أولية للقائمة المخلوطة
  useEffect(() => {
    const initialShuffled = shuffleRecipes();
    setShuffledRecipes(initialShuffled);
    setCurrentIndex(0);
    setIsInitialized(true);
  }, [isArLang, shuffleRecipes]);

  // // التنقل بين الصور
  useEffect(() => {
    if (!isInitialized || shuffledRecipes.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = prevIndex + 1;

        // إذا وصلنا لآخر صورة، نبدأ من جديد بخلط جديد
        if (nextIndex >= shuffledRecipes.length) {
          // خلط جديد للقائمة
          const newShuffled = shuffleRecipes();
          setShuffledRecipes(newShuffled);
          return 0; // البداية من الصورة الأولى في القائمة الجديدة
        }

        return nextIndex;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [isInitialized, shuffledRecipes.length, shuffleRecipes]);

  // الحصول على الوصفة الحالية
  const getCurrentRecipe = () => {
    if (shuffledRecipes.length === 0) {
      return ALL_RECIPES[0]; // fallback
    }
    return shuffledRecipes[currentIndex] || ALL_RECIPES[0];
  };

  const currentRecipe = getCurrentRecipe();
  const heroImage = currentRecipe?.image
    ? getRecipeImage(currentRecipe.image)
    : getRecipeImage("recipe_default");

  return (
    <TouchableOpacity
      onPress={() => {
        // router.push({
        //   pathname: `/[id]`,
        //   params: { id: currentRecipe.id, category: currentRecipe.category },
        // });
      }}
    >
      <Animated.Image
        style={[styles.heroImage, imageAnimatedStyle]}
        // style={[styles.heroImage]}
        source={heroImage}
      />
      {__DEV__ && (
        <View style={styles.debugInfo}>
          <Text style={styles.debugText}>
            {currentIndex + 1} / {shuffledRecipes.length}
          </Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default HeroImage;

const styles = StyleSheet.create({
  heroImage: {
    width: width,
    height: IMG_HEIGHT,
    resizeMode: "cover",
    top: 0,
    left: 0,
  },
  title: {
    position: "absolute",
    bottom: 20,
    left: 20,
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
  },
  // للتطوير فقط - حذف في الإنتاج
  debugInfo: {
    position: "absolute",
    top: 60,
    right: 40,
    backgroundColor: "rgba(0,0,0,0.5)",
    padding: 5,
    borderRadius: 5,
  },
  debugText: {
    color: "white",
    fontSize: 12,
  },
});
