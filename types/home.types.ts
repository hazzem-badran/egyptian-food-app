export type FoodCategory = {
  title: string;
  color: "amberDark" | "navy" | "olive" | "gold" | "sand" | "maroon";
  isFull?: boolean;
};

export type FoodRow = [FoodCategory | null, FoodCategory | null];
