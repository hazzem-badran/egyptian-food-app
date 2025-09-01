import { MergedRecipe } from "@/types/recipe.types";
import { mergeRecipes } from "@/utils/mergeRecipes";
import { CATEGORIES } from "../categories";
import { APPETIZERS_AR, APPETIZERS_EN } from "./appetizers";
import { BAKED_AR, BAKED_EN } from "./baked";
import { DESSERTS_AR, DESSERTS_EN } from "./desserts";
import { DRINKS_AR, DRINKS_EN } from "./drinks";
import { PHARAONIC_AR, PHARAONIC_EN } from "./pharaonic";
import { RECIPES_AR, RECIPES_EN } from "./recipes";
import { SALADS_AR, SALADS_EN } from "./salads";

export const ALL_RECIPES: MergedRecipe[] = [
  ...mergeRecipes(APPETIZERS_AR, APPETIZERS_EN, CATEGORIES.APPETIZERS),
  ...mergeRecipes(BAKED_AR, BAKED_EN, CATEGORIES.BAKED),
  ...mergeRecipes(DESSERTS_AR, DESSERTS_EN, CATEGORIES.DESSERTS),
  ...mergeRecipes(DRINKS_AR, DRINKS_EN, CATEGORIES.DRINKS),
  ...mergeRecipes(RECIPES_AR, RECIPES_EN, CATEGORIES.MAIN_DISHES),
  ...mergeRecipes(PHARAONIC_AR, PHARAONIC_EN, CATEGORIES.PHARAONIC),
  ...mergeRecipes(SALADS_AR, SALADS_EN, CATEGORIES.SALADS),
];
