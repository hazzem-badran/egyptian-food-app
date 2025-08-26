// النوع الأساسي للوصفة قبل الدمج
export interface BaseRecipe {
  id: number;
  title: string;
  image: string;
  description: string;
  time: string;
  difficulty: string;
  servings: string;
  ingredients: string[];
  steps: string[];
}

// النوع للنصوص متعددة اللغات
export interface MultiLanguageText {
  ar: string;
  en: string;
}

// النوع للمصفوفات متعددة اللغات
export interface MultiLanguageArray {
  ar: string[];
  en: string[];
}

// النوع النهائي للوصفة بعد الدمج
export interface MergedRecipe {
  id: number;
  title: MultiLanguageText;
  image: string;
  description: MultiLanguageText;
  time: MultiLanguageText;
  difficulty: MultiLanguageText;
  servings: MultiLanguageText;
  ingredients: MultiLanguageArray;
  steps: MultiLanguageArray;
  category: string;
}

// أنواع الفئات
export type CategoryKey =
  | "SALADS"
  | "DESSERTS"
  | "APPETIZERS"
  | "MAIN_DISHES"
  | "PHARAONIC"
  | "BAKED"
  | "DRINKS";

export type CategoryValue =
  | "salads"
  | "desserts"
  | "appetizers"
  | "egyptian"
  | "pharaonic"
  | "baked"
  | "drinks";

// أنواع إضافية مفيدة
export type RecipeLanguage = "ar" | "en";

export interface RecipeCollection {
  ar: BaseRecipe[];
  en: BaseRecipe[];
}

// نوع مساعد للوصول للبيانات
export type DataMapType = Record<CategoryValue, RecipeCollection>;

// نوع مساعد للحصول على وصفة بلغة معينة
export type GetRecipesByLanguage<T extends CategoryValue> = (
  category: T,
  language: RecipeLanguage
) => BaseRecipe[];

// أنواع الصور
export type ImageKey =
  // Recipe Images
  | "egyptian_koshari"
  | "egyptian_molokhia"
  | "egyptian_fatta"
  | "egyptian_okra"
  | "egyptian_moussaka"
  | "egyptian_mahshi"
  | "egyptian_potato_stew"
  | "egyptian_fish"
  | "egyptian_shrimp"
  | "egyptian_seafood_tagen"
  | "egyptian_pigeon"
  | "egyptian_kofta"
  | "egyptian_kebab"
  | "egyptian_chicken"
  | "egyptian_default"
  // Pharaonic Recipe Images
  | "pharaonic_lentils"
  | "pharaonic_onion_soup"
  | "pharaonic_salad"
  | "pharaonic_duck"
  | "pharaonic_goose"
  | "pharaonic_pigeon"
  | "pharaonic_deer"
  | "pharaonic_grilled_fish"
  | "pharaonic_dried_fish"
  | "pharaonic_fish_stew"
  | "pharaonic_default"
  // Appetizer Images
  | "appetizer_foul_medames"
  | "appetizer_taameya"
  | "appetizer_baba_ghanoush"
  | "appetizer_pickled_eggplant"
  | "appetizer_egg_omelette"
  | "appetizer_sambousek"
  | "appetizer_default"
  // Baked Images
  | "baked_baladi_bread"
  | "baked_fino_kaiser"
  | "baked_oat_bread"
  | "baked_masboubah"
  | "baked_feteer_meshaltet"
  | "baked_baton_saleh"
  | "baked_manaqeesh"
  | "baked_nawameh"
  | "baked_baksamat"
  | "baked_default"
  // Dessert Images
  | "dessert_egyptian_knafeh"
  | "dessert_basbousa"
  | "dessert_umm_ali"
  | "dessert_rice_pudding"
  | "dessert_mehalabia"
  | "dessert_balah_alsham"
  | "dessert_luqmat_alqadi"
  | "dessert_halawet_moulid"
  | "dessert_feteer_meshaltet"
  | "dessert_aysh_saraya"
  | "dessert_filled_balah_alsham"
  | "dessert_candy_floss"
  | "dessert_sweet_pumpkin"
  | "dessert_kahk_eid"
  | "dessert_default"
  // Drink Images
  | "drink_tamar_hindi"
  | "drink_karkadeh"
  | "drink_arqsoos"
  | "drink_sobya"
  | "drink_sugarcane"
  | "drink_orange_juice"
  | "drink_mango_juice"
  | "drink_strawberry_juice"
  | "drink_black_tea"
  | "drink_default"
  // Salad Images
  | "salad_rocket"
  | "salad_tahini"
  | "salad_eggplant"
  | "salad_tomato_onion"
  | "salad_cabbage"
  | "salad_potato"
  | "salad_mixed_cabbage"
  | "salad_carrot_corn"
  | "salad_cucumber_mint"
  | "salad_radish_parsley"
  | "salad_default";

// نوع للصور
export type ImageSource = any; // React Native's ImageSourcePropType

// نوع خريطة الصور
export type ImagesMap = Record<ImageKey, ImageSource>;
