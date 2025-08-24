import GenericPage from "@/components/shared/GenericPage";
import { DRINKS_AR, DRINKS_EN } from "@/constants/foods/drinks";
import { ROUTES } from "@/constants/routes";
import useAppTranslation from "@/hooks/useAppTranslation";
import { BaseRecipe } from "@/types/recipe.types";

const DrinksPage = () => {
  const { isArLang } = useAppTranslation();
  const DRINKS: BaseRecipe[] = isArLang ? DRINKS_AR : DRINKS_EN;

  return (
    <GenericPage
      title="Drinks | المشوبات التقليدية"
      data={DRINKS}
      route={ROUTES.DRINKS}
    />
  );
};

export default DrinksPage;
