
// import { BaseRecipe } from "@/types/recipe.types";

import { BaseRecipe } from "@/types/recipe.types";

export const BAKED_AR: BaseRecipe[] = [
  {
    id: 1,
    title: "خبز الطابون",
    image: "baked_taboon_bread",
    description:
      "خبز فلسطيني تقليدي يُخبز في الطابون (فرن الطين)، له قشرة مقرمشة وداخل طري، يُقدّم مع الأكلات الشعبية.",
    time: "60 دقيقة",
    difficulty: "متوسط",
    servings: "6 أشخاص",
    ingredients: [
      "3 أكواب دقيق",
      "1 كوب ماء دافئ",
      "1 ملعقة صغيرة خميرة فورية",
      "1 ملعقة صغيرة ملح",
      "1 ملعقة كبيرة زيت زيتون",
    ],
    steps: [
      "اخلط الدقيق والملح والخميرة.",
      "أضف الماء والزيت واعجن حتى تحصل على عجينة لينة.",
      "اترك العجينة تختمر لمدة نصف ساعة.",
      "قسّم العجينة إلى كرات وافردها على شكل أقراص.",
      "اخبز في طابون أو على صاج ساخن حتى تصبح ذهبية.",
      "قدّمها دافئة مع الأكلات.",
    ],
  },

  {
    id: 3,
    title: "صفيحة فلسطينية",
    image: "baked_sfiha",
    description:
      "صفيحة لحم معبأة بخليط من اللحم المفروم، البصل، الطماطم والتوابل، تُخبز على عجينة رقيقة.",
    time: "90 دقيقة",
    difficulty: "متوسط",
    servings: "6 أشخاص",
    ingredients: [
      "2 كوب دقيق",
      "1 كوب ماء دافئ",
      "1 ملعقة صغيرة خميرة",
      "500 جرام لحم مفروم",
      "1 بصلة مفرومة",
      "2 طماطم مفرومة",
      "ملح، فلفل، بهارات مشكلة",
      "2 ملعقة زيت زيتون",
    ],
    steps: [
      "حضّر العجينة بعجن الدقيق والخميرة والماء.",
      "اترك العجينة تختمر لمدة نصف ساعة.",
      "اقلي البصل في الزيت ثم أضف اللحم والطماطم والتوابل.",
      "افرد العجينة إلى دوائر صغيرة وضع فوقها خليط اللحم.",
      "اخبز في فرن ساخن حتى تنضج وتتحمر.",
      "قدّمها دافئة.",
    ],
  },
  {
    id: 4,
    title: "كعك بالسمسم",
    image: "baked_kaak_sesame",
    description:
      "كعك فلسطيني مميز مطحون بالسمسم، يُقدم عادةً في المناسبات والأعياد.",
    time: "120 دقيقة",
    difficulty: "متوسط",
    servings: "8 أشخاص",
    ingredients: [
      "4 أكواب دقيق",
      "1 كوب سمسم محمص",
      "1 كوب سكر",
      "1 كوب زبدة مذابة",
      "1 ملعقة صغيرة بيكنج باودر",
      "نصف كوب ماء دافئ",
    ],
    steps: [
      "اخلط الدقيق، السكر، السمسم والبيكنج باودر.",
      "أضف الزبدة والماء واعجن حتى تتكون عجينة متماسكة.",
      "شكل الكعك على شكل دوائر أو هلال وزينها بالسمسم.",
      "اخبز في فرن متوسط الحرارة لمدة 20-25 دقيقة ويفضل فرن حطب.",
      "اتركها تبرد وقدّمها مع الشاي.",
    ],
  },
  
];

export const BAKED_EN: BaseRecipe[] = [
  {
    id: 1,
    title: "Taboon Bread",
    image: "baked_taboon_bread",
    description:
      "Traditional Palestinian bread baked in a taboon (clay oven), with a crispy crust and soft inside, usually served with local dishes.",
    time: "60 minutes",
    difficulty: "Medium",
    servings: "6 servings",
    ingredients: [
      "3 cups flour",
      "1 cup warm water",
      "1 tsp instant yeast",
      "1 tsp salt",
      "1 tbsp olive oil",
    ],
    steps: [
      "Mix flour, salt, and yeast.",
      "Add water and oil, knead until smooth dough forms.",
      "Let dough rise for one hour.",
      "Divide dough into balls and roll into flat discs.",
      "Bake in taboon or on a hot griddle until golden.",
      "Serve warm with meals.",
    ],
  },

  {
    id: 3,
    title: "Sfiha (Meat Pie)",
    image: "baked_sfiha",
    description:
      "Palestinian meat pie filled with a mixture of ground meat, onions, tomatoes, and spices, baked on a thin dough.",
    time: "90 minutes",
    difficulty: "Medium",
    servings: "6 servings",
    ingredients: [
      "2 cups flour",
      "1 cup warm water",
      "1 tsp yeast",
      "500g ground meat",
      "1 chopped onion",
      "2 chopped tomatoes",
      "Salt, pepper, mixed spices",
      "2 tbsp olive oil",
    ],
    steps: [
      "Prepare dough by mixing flour, yeast, and water.",
      "Let dough rise for an hour.",
      "Sauté onions in oil, add meat, tomatoes, and spices.",
      "Roll dough into small circles and place meat mixture on top.",
      "Bake in a hot oven until cooked and golden.",
      "Serve warm.",
    ],
  },
  {
    id: 4,
    title: "Kaak with Sesame",
    image: "baked_kaak_sesame",
    description:
      "Distinctive Palestinian sesame bread usually served during celebrations and holidays.",
    time: "120 minutes",
    difficulty: "Medium",
    servings: "8 servings",
    ingredients: [
      "4 cups flour",
      "1 cup toasted sesame seeds",
      "1 cup sugar",
      "1 cup melted butter",
      "1 tsp baking powder",
      "1/2 cup warm water",
      "Pistachios (optional, for decoration)",
    ],
    steps: [
      "Mix flour, sugar, sesame seeds, and baking powder.",
      "Add butter and water, knead to form a firm dough.",
      "Shape kaak into circles or crescents and decorate with pistachios.",
      "Bake in a moderate oven for 20-25 minutes.",
      "Let cool and serve with tea.",
    ],
  },
  
];
