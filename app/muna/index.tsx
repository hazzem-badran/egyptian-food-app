import GenericPage from "@/components/shared/GenericPage";
import { MUNA_AR, MUNA_EN } from "@/constants/foods/muna";
import { ROUTES } from "@/constants/routes";
import useAppTranslation from "@/hooks/useAppTranslation";
import { BaseRecipe } from "@/types/recipe.types";
import React from "react";

const MunaPage = () => {
  const { isArLang } = useAppTranslation();
  const MUNAS: BaseRecipe[] = isArLang ? MUNA_AR : MUNA_EN;

  return <GenericPage title="muna" data={MUNAS} route={ROUTES.MUNA} />;
};

export default MunaPage;
