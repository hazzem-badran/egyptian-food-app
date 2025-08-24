import { FoodRow } from "@/types/home.types";
import { ROUTES } from "./routes";


export const FOOD_ROWS: FoodRow[] = [
  [
    { title: "salads" , color: "amberDark", route: ROUTES.SALADS },
    { title: "desserts", color: "navy", route: ROUTES.DESSERTS },
  ],
  [
    { title: "appetizers", color: "olive", route: ROUTES.APPETIZERS },
    { title: "main_dishes", color: "gold", route: ROUTES.MAIN_DISHES },
  ],
  [{ title: "pharaonic_dishes", color: "sand", isFull: true, route: ROUTES.PHARAONIC }, null],
  [
    { title: "muna", color: "olive", route: ROUTES.MUNA },
    { title: "baked", color: "maroon", route: ROUTES.BAKED },
  ],
  [{ title: "drinks", color: "navy", route: ROUTES.DRINKS }, null],
];