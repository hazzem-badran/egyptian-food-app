import GenericPage from "@/components/shared/GenericPage";
import { SALADS_AR, SALADS_EN } from "@/constants/foods/salads";
import { ROUTES } from "@/constants/routes";
import useAppTranslation from "@/hooks/useAppTranslation";
import { BaseRecipe } from "@/types/recipe.types";
import React from "react";

const SaladsPage = () => {
  const { isArLang } = useAppTranslation();
  const SALADS: BaseRecipe[] = isArLang ? SALADS_AR : SALADS_EN;

  return (
    <GenericPage title="Salads | سلطات" data={SALADS} route={ROUTES.SALADS} />
  );
};

export default SaladsPage;
