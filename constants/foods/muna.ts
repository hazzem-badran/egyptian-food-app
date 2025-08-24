import { BaseRecipe } from "@/types/recipe.types";

export const MUNA_AR: BaseRecipe[] = [
  {
    id: 1,
    title: "زيت الزيتون الفلسطيني",
    image: "muna_olive_oil",
    description:
      "زيت الزيتون من أساسيات المونة الفلسطينية، يُستخدم في الطهي، التغميس، وإعداد معظم الأطباق التراثية.",
    time: "موسمي (عصر الزيتون)",
    difficulty: "سهل",
    servings: "حسب الاستخدام",
    ingredients: ["زيتون ناضج", "معصرة زيتون تقليدية أو حديثة"],
    steps: [
      "جمع الزيتون في موسم القطاف.",
      "غسله جيدًا وتنقيته من الشوائب.",
      "عصر الزيتون لاستخراج الزيت النقي.",
      "تعبئة الزيت في أوعية زجاجية أو فخارية وتخزينه في مكان بارد.",
    ],
  },
  {
    id: 2,
    title: "زعتر بلدي",
    image: "muna_zaatar",
    description:
      "خليط الزعتر البلدي المجفف والمطحون مع السمسم والسماق وزيت الزيتون، يُعتبر وجبة أساسية للفطور الفلسطيني.",
    time: "30 دقيقة (تحضير الخلطة)",
    difficulty: "سهل",
    servings: "يكفي عدة وجبات",
    ingredients: [
      "زعتر بلدي مجفف",
      "سمسم محمص",
      "سماق",
      "ملح",
      "زيت زيتون للتقديم",
    ],
    steps: [
      "اخلط الزعتر المجفف مع السمسم المحمص والسماق والملح.",
      "يُحفظ في برطمان محكم ويقدم مع زيت الزيتون والخبز.",
    ],
  },
  {
    id: 3,
    title: "مكدوس الباذنجان",
    image: "muna_makdous",
    description:
      "باذنجان محشي بالجوز والفلفل والثوم، يُحفظ في زيت الزيتون ويعتبر من أشهر المؤن الفلسطينية.",
    time: "3 أيام (للتحضير والنقع)",
    difficulty: "متوسط",
    servings: "يكفي عدة وجبات",
    ingredients: [
      "باذنجان صغير الحجم",
      "جوز مفروم",
      "ثوم مهروس",
      "فلفل أحمر حار",
      "ملح وزيت زيتون",
    ],
    steps: [
      "اسلق الباذنجان حتى يلين قليلًا ثم صفيه.",
      "افتح كل باذنجانة واحشيها بخليط الجوز والفلفل والثوم.",
      "رتبها في مرطبان نظيف وصب فوقها زيت الزيتون حتى تغمر.",
      "اتركها عدة أيام قبل الاستخدام ليكتمل الطعم.",
    ],
  },
  {
    id: 4,
    title: "دبس الرمان",
    image: "muna_pomegranate_molasses",
    description:
      "سائل مركز من عصير الرمان يُستخدم لإضافة نكهة حامضة وحلوة للأطباق مثل الفتوش واليخنات.",
    time: "ساعتين",
    difficulty: "متوسط",
    servings: "يكفي عدة وصفات",
    ingredients: [
      "5 أكواب عصير رمان طبيعي",
      "1/2 كوب سكر (اختياري)",
      "رشة ملح",
    ],
    steps: [
      "ضع عصير الرمان في قدر على نار متوسطة.",
      "أضف السكر والملح حسب الرغبة.",
      "اتركه يغلي حتى يقلّ حجمه ويصبح مركزًا.",
      "احفظه في برطمان زجاجي لاستخدامه لاحقًا.",
    ],
  },
  {
    id: 5,
    title: "مربى التين",
    image: "muna_fig_jam",
    description:
      "مربى التين من المؤن الفلسطينية التقليدية، يُحضر من التين الطازج والسكر ويُخزن لفصل الشتاء.",
    time: "ساعة ونصف",
    difficulty: "سهل",
    servings: "يكفي عدة وجبات",
    ingredients: ["2 كيلو تين طازج", "1 كيلو سكر", "عصير نصف ليمونة"],
    steps: [
      "اغسل التين وقطعه نصفين.",
      "ضع التين والسكر في قدر واتركه عدة ساعات حتى يخرج عصيره.",
      "اطبخه على نار هادئة حتى يتماسك، ثم أضف عصير الليمون في النهاية.",
      "برده واحفظه في برطمانات معقمة.",
    ],
  },
];

export const MUNA_EN: BaseRecipe[] = [
  {
    id: 1,
    title: "Palestinian Olive Oil",
    image: "muna_olive_oil",
    description:
      "Olive oil is a staple of Palestinian pantry items, used for cooking, dipping, and preparing most traditional dishes.",
    time: "Seasonal (Olive pressing)",
    difficulty: "Easy",
    servings: "Varies by use",
    ingredients: ["Ripe olives", "Traditional or modern olive press"],
    steps: [
      "Harvest olives during the picking season.",
      "Wash and clean the olives thoroughly.",
      "Press the olives to extract pure oil.",
      "Store in glass or clay containers in a cool place.",
    ],
  },
  {
    id: 2,
    title: "Za'atar Blend",
    image: "muna_zaatar",
    description:
      "A blend of dried thyme, toasted sesame, and sumac with olive oil, a staple Palestinian breakfast mix.",
    time: "30 minutes (blend preparation)",
    difficulty: "Easy",
    servings: "Multiple servings",
    ingredients: [
      "Dried Palestinian thyme",
      "Toasted sesame seeds",
      "Sumac",
      "Salt",
      "Olive oil for serving",
    ],
    steps: [
      "Mix dried thyme with toasted sesame, sumac, and salt.",
      "Store in an airtight jar and serve with olive oil and bread.",
    ],
  },
  {
    id: 3,
    title: "Makdous (Stuffed Eggplants)",
    image: "muna_makdous",
    description:
      "Small eggplants stuffed with walnuts, garlic, and chili peppers, preserved in olive oil and widely enjoyed in Palestine.",
    time: "3 days (soaking and preparation)",
    difficulty: "Medium",
    servings: "Multiple servings",
    ingredients: [
      "Small eggplants",
      "Chopped walnuts",
      "Mashed garlic",
      "Red chili peppers",
      "Salt and olive oil",
    ],
    steps: [
      "Boil the eggplants until slightly tender, then drain well.",
      "Slit each eggplant and stuff with walnut, garlic, and chili mixture.",
      "Arrange in a jar and cover completely with olive oil.",
      "Let it rest for several days before serving.",
    ],
  },
  {
    id: 4,
    title: "Pomegranate Molasses",
    image: "muna_pomegranate_molasses",
    description:
      "A thick, tangy syrup made from pomegranate juice, commonly used to flavor dishes like fattoush and stews.",
    time: "2 hours",
    difficulty: "Medium",
    servings: "Multiple recipes",
    ingredients: [
      "5 cups fresh pomegranate juice",
      "1/2 cup sugar (optional)",
      "Pinch of salt",
    ],
    steps: [
      "Place pomegranate juice in a pot over medium heat.",
      "Add sugar and salt as desired.",
      "Simmer until reduced and thickened.",
      "Store in a glass jar for later use.",
    ],
  },
  {
    id: 5,
    title: "Fig Jam",
    image: "muna_fig_jam",
    description:
      "A traditional Palestinian preserve made from fresh figs and sugar, stored for winter months.",
    time: "1.5 hours",
    difficulty: "Easy",
    servings: "Multiple servings",
    ingredients: ["2 kg fresh figs", "1 kg sugar", "Juice of half a lemon"],
    steps: [
      "Wash and halve the figs.",
      "Combine figs and sugar in a pot and let sit for a few hours to release juices.",
      "Cook on low heat until thickened, then add lemon juice at the end.",
      "Cool and store in sterilized jars.",
    ],
  },
];
