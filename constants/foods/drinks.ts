import { BaseRecipe } from "@/types/recipe.types";

export const DRINKS_AR: BaseRecipe[] = [
  {
    id: 1,
    title: "التمر الهندي",
    image: "drink_tamar_hindi",
    description:
      "مشروب بارد شعبي يُحضّر من التمر الهندي المنقوع والمصفّى، ويُحلى بالسكر. يُقدم بكثرة في رمضان والأعياد.",
    time: "30 دقيقة",
    difficulty: "سهل",
    servings: "6 أشخاص",
    ingredients: [
      "1 كوب تمر هندي مجفف",
      "4 أكواب ماء",
      "نصف كوب سكر (أو حسب الرغبة)",
      "مكعبات ثلج للتقديم",
    ],
    steps: [
      "انقع التمر الهندي في الماء لمدة ساعتين.",
      "صفِّ الخليط وأضف السكر.",
      "قلّب جيداً حتى يذوب السكر.",
      "قدمه بارداً مع الثلج.",
    ],
  },
  {
    id: 2,
    title: "الخروب",
    image: "drink_carob",
    description:
      "مشروب بارد يُستخرج من الخروب، يُحلى بالسكر ويُقدّم في الصيف ورمضان.",
    time: "20 دقيقة",
    difficulty: "سهل",
    servings: "5 أشخاص",
    ingredients: ["1 كوب خروب مجروش", "5 أكواب ماء", "نصف كوب سكر"],
    steps: [
      "اغلي الخروب مع الماء لمدة 15 دقيقة.",
      "صفِّ الخليط وأضف السكر.",
      "اتركه يبرد ثم قدّمه بارداً.",
    ],
  },
  {
    id: 3,
    title: "سحلب فلسطيني",
    image: "drink_sahlab",
    description:
      "مشروب ساخن يُحضّر من الحليب والنشا ويُنكّه بالقرفة والمكسّرات، يُقدم شتاءً.",
    time: "15 دقيقة",
    difficulty: "سهل",
    servings: "4 أشخاص",
    ingredients: [
      "4 أكواب حليب",
      "3 ملاعق كبيرة نشا ذرة",
      "4 ملاعق كبيرة سكر",
      "رشة قرفة",
      "مكسرات (للتزيين)",
    ],
    steps: [
      "اخلط النشا مع القليل من الحليب البارد.",
      "اغلي باقي الحليب وأضف السكر.",
      "أضف خليط النشا مع التحريك حتى يتماسك.",
      "قدمه ساخناً مع القرفة والمكسرات.",
    ],
  },
  {
    id: 4,
    title: "النعناع الطازج",
    image: "drink_mint_tea",
    description:
      "شاي ساخن منعش يُغلى مع أوراق النعناع الطازجة ويُقدّم بعد الوجبات.",
    time: "10 دقائق",
    difficulty: "سهل",
    servings: "3 أشخاص",
    ingredients: [
      "3 أكواب ماء",
      "2 ملعقة صغيرة شاي أسود",
      "حفنة أوراق نعناع طازج",
      "سكر حسب الرغبة",
    ],
    steps: [
      "اغلي الماء وأضف الشاي والنعناع.",
      "اتركه يغلي لدقيقة واحدة.",
      "صفِّ الشاي وأضف السكر حسب الرغبة.",
      "قدّمه ساخناً.",
    ],
  },
  {
    id: 5,
    title: "عرق سوس",
    image: "drink_licorice",
    description:
      "مشروب بارد شعبي يُحضّر من مسحوق عرق السوس المنقوع، مشهور بفوائده الهضمية ويقدّم في رمضان.",
    time: "25 دقيقة",
    difficulty: "متوسط",
    servings: "5 أشخاص",
    ingredients: [
      "نصف كوب عرق سوس مطحون",
      "4 أكواب ماء",
      "ملعقة صغيرة بيكربونات الصوديوم (اختياري)",
    ],
    steps: [
      "انقع عرق السوس في الماء لمدة ساعتين.",
      "صفِّه باستخدام قطعة قماش نظيفة.",
      "قدّمه بارداً في أكواب.",
    ],
  },
  {
    id: 6,
    title: "البُرد الغزاوي",
    image: "drink_burd",
    description:
      "مشروب غزاوي تقليدي بارد مصنوع من عصير الليمون والنعنع، منعش جداً في الصيف ويشتهر في المناسبات الرمضانية.",
    time: "15 دقيقة",
    difficulty: "سهل",
    servings: "4 أشخاص",
    ingredients: [
      "4 ليمونات كبيرة",
      "حفنة نعنع طازج",
      "4 أكواب ماء بارد",
      "نصف كوب سكر (حسب الرغبة)",
      "مكعبات ثلج",
    ],
    steps: [
      "اعصر الليمون وضعه في إبريق.",
      "أضف أوراق النعنع والسكر والماء البارد.",
      "حرّك جيداً حتى يذوب السكر.",
      "قدّمه بارداً مع مكعبات الثلج.",
    ],
  },
];

export const DRINKS_EN: BaseRecipe[] = [
  {
    id: 1,
    title: "Tamarind Drink",
    image: "drink_tamar_hindi",
    description:
      "A popular cold drink made from soaked and strained tamarind, sweetened with sugar. Widely served during Ramadan and holidays.",
    time: "30 minutes",
    difficulty: "Easy",
    servings: "6 servings",
    ingredients: [
      "1 cup dried tamarind",
      "4 cups water",
      "1/2 cup sugar (or to taste)",
      "Ice cubes for serving",
    ],
    steps: [
      "Soak tamarind in water for 2 hours.",
      "Strain the mixture and add sugar.",
      "Stir well until sugar dissolves.",
      "Serve cold with ice.",
    ],
  },
  {
    id: 2,
    title: "Carob Drink",
    image: "drink_carob",
    description:
      "A refreshing cold drink made from carob pods, sweetened with sugar, commonly served in summer and Ramadan.",
    time: "20 minutes",
    difficulty: "Easy",
    servings: "5 servings",
    ingredients: ["1 cup crushed carob", "5 cups water", "1/2 cup sugar"],
    steps: [
      "Boil carob with water for 15 minutes.",
      "Strain the mixture and add sugar.",
      "Let it cool and serve chilled.",
    ],
  },
  {
    id: 3,
    title: "Palestinian Sahlab",
    image: "drink_sahlab",
    description:
      "A hot winter drink made with milk and starch, flavored with cinnamon and nuts.",
    time: "15 minutes",
    difficulty: "Easy",
    servings: "4 servings",
    ingredients: [
      "4 cups milk",
      "3 tbsp cornstarch",
      "4 tbsp sugar",
      "A pinch of cinnamon",
      "Chopped nuts for garnish",
    ],
    steps: [
      "Mix cornstarch with a little cold milk.",
      "Heat remaining milk and add sugar.",
      "Add starch mixture and stir until thickened.",
      "Serve hot with cinnamon and nuts.",
    ],
  },
  {
    id: 4,
    title: "Fresh Mint Tea",
    image: "drink_mint_tea",
    description:
      "Refreshing hot tea brewed with fresh mint leaves, often served after meals.",
    time: "10 minutes",
    difficulty: "Easy",
    servings: "3 servings",
    ingredients: [
      "3 cups water",
      "2 tsp black tea",
      "Handful of fresh mint leaves",
      "Sugar to taste",
    ],
    steps: [
      "Boil water and add tea and mint leaves.",
      "Let simmer for 1 minute.",
      "Strain and sweeten to taste.",
      "Serve hot.",
    ],
  },
  {
    id: 5,
    title: "Licorice Drink",
    image: "drink_licorice",
    description:
      "A popular cold drink made from soaked licorice powder, known for its digestive benefits and often served in Ramadan.",
    time: "25 minutes",
    difficulty: "Medium",
    servings: "5 servings",
    ingredients: [
      "1/2 cup licorice powder",
      "4 cups water",
      "1 tsp baking soda (optional)",
    ],
    steps: [
      "Soak licorice powder in water for 2 hours.",
      "Strain using a clean cloth.",
      "Serve cold in glasses.",
    ],
  },
  {
    id: 6,
    title: "Gaza Burd Drink",
    image: "drink_burd",
    description:
      "A traditional cold Gazan drink made from lemon juice and fresh mint, very refreshing in summer and popular during Ramadan.",
    time: "15 minutes",
    difficulty: "Easy",
    servings: "4 servings",
    ingredients: [
      "4 large lemons",
      "Handful of fresh mint leaves",
      "4 cups cold water",
      "1/2 cup sugar (to taste)",
      "Ice cubes",
    ],
    steps: [
      "Juice the lemons into a pitcher.",
      "Add mint leaves, sugar, and cold water.",
      "Stir well until sugar dissolves.",
      "Serve chilled with ice cubes.",
    ],
  },
];
