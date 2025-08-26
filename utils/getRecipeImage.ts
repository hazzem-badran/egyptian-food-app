import { IMAGES } from "@/constants/foodimages";

export const getRecipeImage = (imageKey: string) => {
  // console.log("imageKey", imageKey);

  // Try to get the image directly using the provided key
  const key = imageKey as keyof typeof IMAGES;
  if (IMAGES[key]) {
    return IMAGES[key];
  }

  // If still not found, return appropriate default based on category
  const category = imageKey?.split("_")[0]?.toLowerCase();
  switch (category) {
    case "appetizer":
      return IMAGES.appetizer_default;
    case "baked":
      return IMAGES.baked_default;
    case "dessert":
      return IMAGES.dessert_default;
    case "drink":
      return IMAGES.drink_default;
    case "salad":
      return IMAGES.salad_default;
    case "pharaonic":
      return IMAGES.pharaonic_default;
    default:
      return IMAGES.egyptian_default;
  }
};
