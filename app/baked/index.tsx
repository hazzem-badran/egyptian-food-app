import GenericPage from "@/components/shared/GenericPage";
import { BAKED_AR, BAKED_EN } from "@/constants/foods/baked";
import { ROUTES } from "@/constants/routes";
import useAppTranslation from "@/hooks/useAppTranslation";
import { BaseRecipe } from "@/types/recipe.types";
import React from "react";
const BakedPage = () => {
  const { isArLang } = useAppTranslation();

  const BAKED: BaseRecipe[] = isArLang ? BAKED_AR : BAKED_EN;

  return (
    <GenericPage title="baked" data={BAKED} route={ROUTES.BAKED} />
  );
};

export default BakedPage;
