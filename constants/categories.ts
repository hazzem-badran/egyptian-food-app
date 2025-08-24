import { CategoryKey, CategoryValue } from "@/types/recipe.types";

export const CATEGORIES: Record<CategoryKey,CategoryValue> = {
  SALADS: "salads",
  DESSERTS: "desserts",
  APPETIZERS: "appetizers",
  MAIN_DISHES: "recipes",
  DIGNITY: "dignity",
  MUNA: "muna",
  BAKED: "baked",
  DRINKS: "drinks",
} as const;
