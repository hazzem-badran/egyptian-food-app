import GenericPage from "@/components/shared/GenericPage";
import { RECIPES_AR, RECIPES_EN } from "@/constants/foods/recipes";
import { ROUTES } from "@/constants/routes";
import useAppTranslation from "@/hooks/useAppTranslation";
import { BaseRecipe } from "@/types/recipe.types";
import React from "react";

const MainDishesPage = () => {
  const { isArLang } = useAppTranslation();
  const RECIPES: BaseRecipe[] = isArLang ? RECIPES_AR : RECIPES_EN;

  return (
    <GenericPage
      title="Main Dishes | الأطباق الرئيسية"
      data={RECIPES}
      route={ROUTES.MAIN_DISHES}
    />
  );
};

export default MainDishesPage;
