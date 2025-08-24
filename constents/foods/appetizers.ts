import { BaseRecipe } from "@/types/recipe.types";

export const APPETIZERS_AR: BaseRecipe[] = [
  {
    id: 1,
    title: "حمص بزيت الزيتون",
    image: "appetizer_hummus",
    description:
      "حمص كريمي مزين بزيت الزيتون، من أشهر المقبلات الفلسطينية ويقدم مع الخبز الطازج أو الخضروات.",
    time: "15 دقيقة",
    difficulty: "سهل",
    servings: "4 أشخاص",
    ingredients: [
      "2 كوب حمص مسلوق",
      "3 ملاعق كبيرة طحينة",
      "عصير ليمونة واحدة",
      "2 ملعقة كبيرة زيت زيتون",
      "ملح وكمون",
    ],
    steps: [
      "اطحن الحمص المسلوق مع الطحينة وعصير الليمون والتوابل حتى يصبح ناعمًا.",
      "أضف القليل من الماء لضبط القوام إذا لزم الأمر.",
      "زين بزيت الزيتون وقدمه مع الخبز.",
    ],
  },
  {
    id: 2,
    title: "بابا غنوج",
    image: "appetizer_baba_ghanoush",
    description:
      "متبل باذنجان مشوي بنكهة مدخنة ممزوج مع الطحينة والثوم، من أشهر المقبلات على المائدة الفلسطينية.",
    time: "20 دقيقة",
    difficulty: "سهل",
    servings: "4 أشخاص",
    ingredients: [
      "2 حبة باذنجان متوسطة مشوية",
      "2 ملعقة كبيرة طحينة",
      "فص ثوم واحد",
      "عصير نصف ليمونة",
      "زيت زيتون، ملح",
    ],
    steps: [
      "اشوي الباذنجان حتى يصبح القشر محروق واللب طري.",
      "أخرج اللب واهرسه مع الطحينة والثوم وعصير الليمون.",
      "تبّل بالملح وزينه بزيت الزيتون وقدمه.",
    ],
  },
  {
    id: 3,
    title: "لبنة بزيت الزيتون والزعتر",
    image: "appetizer_labneh",
    description:
      "لبنة سميكة مغطاة بالزعتر وزيت الزيتون، تُقدّم مع الخبز الطازج.",
    time: "5 دقائق",
    difficulty: "سهل",
    servings: "4 أشخاص",
    ingredients: [
      "1 كوب لبنة",
      "2 ملعقة كبيرة زيت زيتون",
      "1 ملعقة كبيرة زعتر",
      "خبز بيتا للتقديم",
    ],
    steps: [
      "افرد اللبنة في طبق مسطح.",
      "رش فوقها زيت الزيتون ورش الزعتر.",
      "قدمها مع خبز البيتّا الطازج.",
    ],
  },
  {
    id: 4,
    title: "مخللات فلسطينية",
    image: "appetizer_mokhallalat",
    description:
      "تشكيلة من المخللات مثل اللفت والخيار والجزر، تقدم كمقبلات جانبية.",
    time: "حسب الجاهزية",
    difficulty: "سهل",
    servings: "6 أشخاص",
    ingredients: [
      "تشكيلة مخللات (لفت، خيار، جزر)",
      "زيت زيتون (اختياري للتزيين)",
    ],
    steps: [
      "رتب المخللات في طبق تقديم.",
      "يمكن إضافة رشة زيت زيتون حسب الرغبة.",
      "تقدم كمقبل جانبي مع الأطباق الرئيسية.",
    ],
  },
];

export const APPETIZERS_EN: BaseRecipe[] = [
  {
    id: 1,
    title: "Hummus with Olive Oil",
    image: "appetizer_hummus",
    description:
      "Creamy hummus drizzled with olive oil, a classic Palestinian appetizer served with fresh bread or vegetables.",
    time: "15 min",
    difficulty: "Easy",
    servings: "4 people",
    ingredients: [
      "2 cups boiled chickpeas",
      "3 tbsp tahini",
      "Juice of 1 lemon",
      "2 tbsp olive oil",
      "Salt and cumin",
    ],
    steps: [
      "Blend boiled chickpeas with tahini, lemon juice, and spices until smooth.",
      "Adjust consistency with water if needed.",
      "Drizzle with olive oil and serve with bread.",
    ],
  },
  {
    id: 2,
    title: "Baba Ghanoush",
    image: "appetizer_baba_ghanoush",
    description:
      "A smoky dip made from roasted eggplant, tahini, and garlic, popular across Palestinian tables.",
    time: "20 min",
    difficulty: "Easy",
    servings: "4 people",
    ingredients: [
      "2 medium eggplants, roasted",
      "2 tbsp tahini",
      "1 garlic clove",
      "Juice of 1/2 lemon",
      "Olive oil, salt",
    ],
    steps: [
      "Roast eggplants until skin is charred and flesh is soft.",
      "Scoop flesh and mash with tahini, garlic, and lemon juice.",
      "Season with salt, drizzle with olive oil, and serve.",
    ],
  },
  {
    id: 3,
    title: "Labneh with Olive Oil and Za'atar",
    image: "appetizer_labneh",
    description:
      "Thick strained yogurt topped with za'atar and olive oil, served with fresh bread.",
    time: "5 min",
    difficulty: "Easy",
    servings: "4 people",
    ingredients: [
      "1 cup labneh",
      "2 tbsp olive oil",
      "1 tbsp za'atar mix",
      "Pita bread for serving",
    ],
    steps: [
      "Spread labneh in a shallow bowl.",
      "Drizzle with olive oil and sprinkle za'atar on top.",
      "Serve with fresh pita bread.",
    ],
  },
  {
    id: 4,
    title: "Palestinian Pickles (Mokhallalat)",
    image: "appetizer_mokhallalat",
    description:
      "A mix of pickled vegetables such as turnips, cucumbers, and carrots, served as a side appetizer.",
    time: "Varies (pre-made)",
    difficulty: "Easy",
    servings: "6 people",
    ingredients: [
      "Assorted pickled vegetables (turnips, cucumbers, carrots)",
      "Olive oil (optional for garnish)",
    ],
    steps: [
      "Arrange pickled vegetables on a plate.",
      "Optionally drizzle with a little olive oil.",
      "Serve as a side appetizer with main meals.",
    ],
  },
];
