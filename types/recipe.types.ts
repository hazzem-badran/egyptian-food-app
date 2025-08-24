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

// الن    وع للمصفوفات متعددة اللغات
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
  | "DIGNITY"
  | "MUNA"
  | "BAKED"
  | "DRINKS";

export type CategoryValue =
  | "salads"
  | "desserts"
  | "appetizers"
  | "recipes"
  | "dignity"
  | "muna"
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
  | "recipe_maqluba"
  | "recipe_musakhan"
  | "recipe_falafel"
  | "recipe_qidra"
  | "recipe_meftoul"
  | "recipe_mujaddara"
  | "recipe_mulukhiyah"
  | "recipe_bamya"
  | "recipe_eggplant_potato_tray"
  | "recipe_mahashi_waraq"
  | "recipe_fatteh"
  | "recipe_roasted_chicken"
  | "recipe_spinach_pie"
  | "recipe_pasta"
  | "recipe_default"
  // Dignity Recipes
  | "dignity_maqluba"
  | "dignity_mujaddara_burghul"
  | "dignity_lentil_soup"
  | "dignity_pasta"
  | "dignity_burghul"
  | "dignity_flatbread"
  | "dignity_fatteh_lentil"
  | "dignity_roasted_potatoes"
  | "dignity_yellow_rice_chickpeas"
  | "dignity_default"
  // Appetizer Images
  | "appetizer_hummus"
  | "appetizer_baba_ghanoush"
  | "appetizer_labneh"
  | "appetizer_mokhallalat"
  | "appetizer_default"
  // Baked Images
  | "baked_taboon_bread"
  | "baked_sfiha"
  | "baked_kaak_sesame"
  | "baked_default"
  // Dessert Images - الصور الجديدة المضافة
  | "dessert_nabulsi_knafeh"
  | "dessert_arabic_knafeh"
  | "dessert_fake_knafeh"
  | "dessert_maamoul"
  | "dessert_barazek"
  | "dessert_eid_kaak"
  | "dessert_mabrousha"
  | "dessert_maqrouda"
  | "dessert_helbeh"
  | "dessert_qatayef"
  | "dessert_awameh"
  | "dessert_hareeseh"
  | "dessert_default"
  // Drink Images
  | "drink_tamar_hindi"
  | "drink_carob"
  | "drink_sahlab"
  | "drink_mint_tea"
  | "drink_licorice"
  | "drink_burd"
  | "drink_default"
  // Muna Images
  | "muna_olive_oil"
  | "muna_zaatar"
  | "muna_makdous"
  | "muna_pomegranate_molasses"
  | "muna_fig_jam"
  | "muna_default"
  // Salad Images
  | "salad_arugula"
  | "salad_fattoush"
  | "salad_gaza_spicy_salad"
  | "salad_cucumber_tomato"
  | "salad_default";

// نوع للصور
export type ImageSource = any; // React Native's ImageSourcePropType

// نوع خريطة الصور
export type ImagesMap = Record<ImageKey, ImageSource>;
