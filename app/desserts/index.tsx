import GenericPage from "@/components/shared/GenericPage";
import { DESSERTS_AR, DESSERTS_EN } from "@/constants/foods/desserts";
import { ROUTES } from "@/constants/routes";
import useAppTranslation from "@/hooks/useAppTranslation";
import { BaseRecipe } from "@/types/recipe.types";
import React from "react";

const DessertsPage = () => {
  const { isArLang } = useAppTranslation();
  const DESSERTS: BaseRecipe[] = isArLang ? DESSERTS_AR : DESSERTS_EN;

  return (
    <GenericPage
      title="desserts"
      data={DESSERTS}
      route={ROUTES.DESSERTS}
    />
  );
};

export default DessertsPage;
