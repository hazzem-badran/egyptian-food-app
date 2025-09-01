import { APPETIZERS_AR, APPETIZERS_EN } from "@/constants/foods/appetizers";
import { BAKED_AR, BAKED_EN } from "@/constants/foods/baked";
import { DESSERTS_AR, DESSERTS_EN } from "@/constants/foods/desserts";
import { DRINKS_AR, DRINKS_EN } from "@/constants/foods/drinks";
import { RECIPES_AR, RECIPES_EN } from "@/constants/foods/recipes";
import { SALADS_AR, SALADS_EN } from "@/constants/foods/salads";
import { CategoryValue, RecipeCollection } from "@/types/recipe.types";

export const DATA_MAP: Record<CategoryValue, RecipeCollection> = {
  appetizers: { ar: APPETIZERS_AR, en: APPETIZERS_EN },
  baked: { ar: BAKED_AR, en: BAKED_EN },
  desserts: { ar: DESSERTS_AR, en: DESSERTS_EN },
  drinks: { ar: DRINKS_AR, en: DRINKS_EN },
  recipes: { ar: RECIPES_AR, en: RECIPES_EN },
  salads: { ar: SALADS_AR, en: SALADS_EN },
};
