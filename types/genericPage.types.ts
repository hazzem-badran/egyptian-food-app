import { BaseRecipe } from "./recipe.types";

export interface GenericPageProps {
  title: string;
  data: BaseRecipe[];
  route: string;
}