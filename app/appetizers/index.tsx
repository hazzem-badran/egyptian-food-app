import GenericPage from "@/components/shared/GenericPage";
import { APPETIZERS_AR, APPETIZERS_EN } from "@/constants/foods/appetizers";
import { ROUTES } from "@/constants/routes";
import useAppTranslation from "@/hooks/useAppTranslation";
import { BaseRecipe } from "@/types/recipe.types";
import React from "react";

const AppetizersPage = () => {
  const { isArLang } = useAppTranslation();
  const APPETIZERS: BaseRecipe[] = isArLang ? APPETIZERS_AR : APPETIZERS_EN;

  return (
    <GenericPage
      title="appetizers"
      data={APPETIZERS}
      route={ROUTES.APPETIZERS}
    />
  );
};

export default AppetizersPage;
