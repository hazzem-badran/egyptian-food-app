import { MergedRecipe } from "@/types/recipe.types";
import { CATEGORIES } from "../categories";
import { APPETIZERS_AR, APPETIZERS_EN } from "./appetizers";
import { BAKED_AR, BAKED_EN } from "./baked";
import { DESSERTS_AR, DESSERTS_EN } from "./desserts";
import { DIGNITY_AR, DIGNITY_EN } from "./dignity";
import { DRINKS_AR, DRINKS_EN } from "./drinks";
import { MUNA_AR, MUNA_EN } from "./muna";
import { RECIPES_AR, RECIPES_EN } from "./recipes";
import { SALADS_AR, SALADS_EN } from "./salads";
import { mergeRecipes } from "@/utils/mergeRecipes";

export const ALL_RECIPES: MergedRecipe[] = [
  ...mergeRecipes(APPETIZERS_AR, APPETIZERS_EN, CATEGORIES.APPETIZERS),
  ...mergeRecipes(BAKED_AR, BAKED_EN, CATEGORIES.BAKED),
  ...mergeRecipes(DESSERTS_AR, DESSERTS_EN, CATEGORIES.DESSERTS),
  ...mergeRecipes(DRINKS_AR, DRINKS_EN, CATEGORIES.DRINKS),
  ...mergeRecipes(MUNA_AR, MUNA_EN, CATEGORIES.MUNA),
  ...mergeRecipes(RECIPES_AR, RECIPES_EN, CATEGORIES.MAIN_DISHES),
  ...mergeRecipes(DIGNITY_AR, DIGNITY_EN, CATEGORIES.DIGNITY),
  ...mergeRecipes(SALADS_AR, SALADS_EN, CATEGORIES.SALADS),
];
