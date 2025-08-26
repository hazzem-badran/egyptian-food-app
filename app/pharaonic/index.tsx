import GenericPage from "@/components/shared/GenericPage";
import { PHARAONIC_AR, PHARAONIC_EN } from "@/constants/foods/pharaonic";
import { ROUTES } from "@/constants/routes";
import useAppTranslation from "@/hooks/useAppTranslation";
import { BaseRecipe } from "@/types/recipe.types";

const PharaonicPage = () => {
  const { isArLang } = useAppTranslation();

  const RECIPES: BaseRecipe[] = isArLang
    ? PHARAONIC_AR
    : PHARAONIC_EN;

  return (
    <GenericPage
      title={"pharaonic_dishes"}
      data={RECIPES}
      route={ROUTES.PHARAONIC}
    />
  );
};

export default PharaonicPage;
