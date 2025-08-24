import { BaseRecipe } from "@/types/recipe.types";

export const DIGNITY_AR: BaseRecipe[] = [
  {
    id: 1,
    title: "مقلوبة كذابة",
    image: "dignity_maqluba",
    description:
      "نسخة تقليدية مبسطة من المقلوبة الفلسطينية تُحضَّر بالأرز والخضار المتوفرة مثل الباذنجان أو البطاطا، تعكس روح التكيّف الفلسطيني في إعداد الأطباق الشهية بأبسط المكونات.",
    difficulty: "سهلة",
    servings: "٤ أشخاص",
    time: "٣٥ دقيقة",
    ingredients: [
      "٢ كوب أرز",
      "٢ حبة باذنجان أو بطاطا",
      "بهارات (قرفة، كمون، فلفل، ملح)",
      "ماء أو مرق خضار",
    ],
    steps: [
      "قطّع الخضار واقلِها أو اشوِها حسب المتاح.",
      "اغسل الأرز وانقعه ١٥ دقيقة.",
      "ضع الخضار في قاع الطنجرة ثم الأرز فوقها.",
      "أضف البهارات والماء، واطبخ حتى ينضج الأرز.",
      "اقلِب الطنجرة للتقديم.",
    ],
  },
  {
    id: 2,
    title: "مجدرة برغل",
    image: "dignity_mujaddara_burghul",
    description:
      "طبق فلسطيني تقليدي يجمع العدس والبرغل والبصل المقلي، يُعرف ببساطته وقيمته الغذائية العالية.",
    difficulty: "سهلة",
    servings: "٥ أشخاص",
    time: "٣٠ دقيقة",
    ingredients: [
      "١ كوب عدس بني",
      "١ كوب برغل خشن",
      "٢ بصلة كبيرة",
      "زيت نباتي، ملح، كمون",
    ],
    steps: [
      "اسلق العدس حتى ينضج نصف نضج.",
      "أضف البرغل والبهارات واتركه ينضج.",
      "اقلي البصل حتى يصبح ذهبيًا.",
      "قدّم الطبق مزينًا بالبصل المقلي.",
    ],
  },
  {
    id: 3,
    title: "شوربة عدس ",
    image: "dignity_lentil_soup",
    description:
      "شوربة دافئة محضرة من العدس الأصفر والماء مع القليل من البهارات، مثالية في الأيام الباردة وبمكونات متوفرة دائمًا.",
    difficulty: "سهلة",
    servings: "٤ أشخاص",
    time: "٢٥ دقيقة",
    ingredients: ["١ كوب عدس أصفر", "٤ أكواب ماء", "بصلة صغيرة", "ملح، كمون"],
    steps: [
      "اسلق العدس مع الماء والبصلة حتى ينضج.",
      "اطحن المزيج حتى يصبح ناعمًا.",
      "تبّل بالملح والكمون وقدّمها ساخنة.",
    ],
  },
  {
    id: 4,
    title: "معكرونة",
    image: "dignity_pasta",
    description:
      "معكرونة فلسطينية سريعة التحضير بزيت الزيتون والبصل المقلي، خيار اقتصادي ولذيذ.",
    difficulty: "سهلة",
    servings: "٣ أشخاص",
    time: "٢٠ دقيقة",
    ingredients: ["٢ كوب معكرونة", "٢ بصلة", "٣ ملاعق زيت زيتون", "ملح، فلفل"],
    steps: [
      "اسلق المعكرونة حتى تنضج.",
      "اقلي البصل بزيت الزيتون حتى يصبح ذهبيًا.",
      "امزج المعكرونة مع البصل والزيت وقدّمها ساخنة.",
    ],
  },
  {
    id: 5,
    title: "برغل",
    image: "dignity_burghul",
    description:
      "وصفة فلسطينية بسيطة تعتمد على البرغل المطبوخ بزيت الزيتون والبصل، مغذية وسهلة التحضير.",
    difficulty: "سهلة",
    servings: "٤ أشخاص",
    time: "٢٠ دقيقة",
    ingredients: [
      "١ كوب برغل",
      "٢ كوب ماء",
      "٢ بصلة",
      "٣ ملاعق زيت زيتون",
      "ملح وفلفل",
    ],
    steps: [
      "اقلي البصل بزيت الزيتون.",
      "أضف البرغل والماء والملح واتركه ينضج حتى يتشرب الماء.",
      "قدّم الطبق دافئًا.",
    ],
  },
  {
    id: 6,
    title: "خبز الصاج السريع",
    image: "dignity_flatbread",
    description:
      "خبز فلسطيني يُحضّر بسرعة من الطحين والماء والملح، مثالي عند عدم توفر الخبز الجاهز.",
    difficulty: "سهلة",
    servings: "٦ أرغفة",
    time: "٢٠ دقيقة",
    ingredients: ["٢ كوب طحين", "نصف كوب ماء", "رشة ملح", "ملعقة زيت"],
    steps: [
      "اخلط المكونات واعجن حتى تتكون عجينة لينة.",
      "قسم العجينة إلى كرات وافردها رقيقًا.",
      "اخبزها على صاج أو مقلاة ساخنة حتى تنتفخ وتنضج.",
    ],
  },
  {
    id: 7,
    title: "فتة عدس بالمكرونة أو الرز",
    image: "dignity_fatteh_lentil",
    description:
      "طبق فلسطيني بسيط ومشبع يُحضّر من العدس مع القليل من المعكرونة أو الأرز وزيت الزيتون، مناسب للأوقات اللي بتتوفر فيها مكونات محدودة.",
    difficulty: "سهلة",
    servings: "٤ أشخاص",
    time: "٣٠ دقيقة",
    ingredients: [
      "١ كوب عدس",
      "نصف كوب معكرونة صغيرة أو نصف كوب أرز",
      "٢ فص ثوم",
      "زيت زيتون، كمون، ملح",
    ],
    steps: [
      "اسلق العدس مع الملح والكمون حتى ينضج.",
      "أضف نصف كوب من المعكرونة الصغيرة أو الأرز إلى العدس وهو على النار واتركهم يطبخوا مع بعض حتى يستووا.",
      "ضع المزيج في طبق التقديم ورش عليه زيت الزيتون والثوم المهروس حسب الرغبة.",
    ],
  },
  {
    id: 8,
    title: "بطاطا مشوية على النار",
    image: "dignity_roasted_potatoes",
    description:
      "وصفة فلسطينية ريفية تُحضّر بشوي البطاطا مباشرة على الفحم أو النار، بطعم مدخن ولذيذ.",
    difficulty: "سهلة",
    servings: "٣ أشخاص",
    time: "٤٠ دقيقة",
    ingredients: ["٤ حبات بطاطا متوسطة", "ملح (اختياري)"],
    steps: [
      "اغسل البطاطا جيدًا بدون تقشير.",
      "ضعها مباشرة على الفحم أو النار حتى تنضج.",
      "افتحها وقدّمها ساخنة مع القليل من الملح.",
    ],
  },
  {
    id: 9,
    title: "رز أصفر مع حمص",
    image: "dignity_yellow_rice_chickpeas",
    description:
      "طبق فلسطيني بسيط مكوّن من الأرز والحمص المطبوخ مع الكركم والبهارات، يتميز بلونه الذهبي ونكهته الغنية رغم بساطة مكوناته.",
    difficulty: "سهلة",
    servings: "٤ أشخاص",
    time: "٣٠ دقيقة",
    ingredients: [
      "٢ كوب أرز",
      "١ كوب حمص مسلوق",
      "١ ملعقة صغيرة كركم",
      "٣ ملاعق زيت نباتي",
      "ملح، فلفل",
    ],
    steps: [
      "سخن الزيت في طنجرة وأضف الأرز والكركم وقلّب قليلاً.",
      "أضف الحمص والملح والفلفل ثم اسكب الماء.",
      "اطبخ حتى ينضج الأرز ويتشرب الماء.",
      "قدّم الطبق ساخناً كوجبة مشبعة وبسيطة.",
    ],
  },
];

export const DIGNITY_EN: BaseRecipe[] = [
  {
    id: 1,
    title: "Fake Maqluba",
    image: "dignity_maqluba",
    description:
      "A simplified version of the traditional Palestinian Maqluba made with rice and available vegetables like eggplant or potatoes, reflecting Palestinian creativity in preparing hearty dishes with basic ingredients.",
    difficulty: "Easy",
    servings: "4 people",
    time: "35 mins",
    ingredients: [
      "2 cups rice",
      "2 eggplants or potatoes",
      "Spices (cinnamon, cumin, pepper, salt)",
      "Water or vegetable broth",
    ],
    steps: [
      "Cut and fry or roast the vegetables depending on availability.",
      "Rinse and soak rice for 15 minutes.",
      "Layer vegetables at the bottom of the pot, then add rice on top.",
      "Add spices and water, cook until rice is done.",
      "Flip the pot to serve.",
    ],
  },
  {
    id: 2,
    title: "Mujaddara with Bulgur",
    image: "dignity_mujaddara_burghul",
    description:
      "A classic Palestinian dish made with lentils, bulgur, and caramelized onions, known for its simplicity and nutritional value.",
    difficulty: "Easy",
    servings: "5 people",
    time: "30 mins",
    ingredients: [
      "1 cup brown lentils",
      "1 cup coarse bulgur",
      "2 large onions",
      "Vegetable oil, salt, cumin",
    ],
    steps: [
      "Boil lentils until half-cooked.",
      "Add bulgur and spices, and cook until done.",
      "Fry onions until golden and use as topping.",
    ],
  },
  {
    id: 3,
    title: "Lentil Soup",
    image: "dignity_lentil_soup",
    description:
      "A warm soup made with yellow lentils, water, and light spices, perfect for cold days and basic ingredients.",
    difficulty: "Easy",
    servings: "4 people",
    time: "25 mins",
    ingredients: [
      "1 cup yellow lentils",
      "4 cups water",
      "1 small onion",
      "Salt, cumin",
    ],
    steps: [
      "Boil lentils with water and onion until soft.",
      "Blend until smooth.",
      "Season with salt and cumin, serve hot.",
    ],
  },
  {
    id: 4,
    title: "Pasta with Olive Oil and Onion",
    image: "dignity_pasta_oil",
    description:
      "Quick Palestinian pasta dish with fried onions and olive oil, affordable and flavorful.",
    difficulty: "Easy",
    servings: "3 people",
    time: "20 mins",
    ingredients: [
      "2 cups pasta",
      "2 onions",
      "3 tbsp olive oil",
      "Salt, pepper",
    ],
    steps: [
      "Boil pasta until cooked.",
      "Fry onions in olive oil until golden.",
      "Mix pasta with onions and serve warm.",
    ],
  },
  {
    id: 5,
    title: "Bulgur",
    image: "dignity_burghul",
    description:
      "A simple Palestinian recipe using bulgur cooked with olive oil and onions, nutritious and easy to make.",
    difficulty: "Easy",
    servings: "4 people",
    time: "20 mins",
    ingredients: [
      "1 cup bulgur",
      "2 cups water",
      "2 onions",
      "3 tbsp olive oil",
      "Salt, pepper",
    ],
    steps: [
      "Fry onions in olive oil.",
      "Add bulgur, water, and salt, and cook until water is absorbed.",
      "Serve warm.",
    ],
  },
  {
    id: 6,
    title: "Quick Saj Bread",
    image: "dignity_flatbread",
    description:
      "Traditional Palestinian flatbread prepared quickly with flour, water, and salt — perfect when store-bought bread isn’t available.",
    difficulty: "Easy",
    servings: "6 breads",
    time: "20 mins",
    ingredients: [
      "2 cups flour",
      "1/2 cup water",
      "Pinch of salt",
      "1 tbsp oil",
    ],
    steps: [
      "Mix ingredients and knead until smooth.",
      "Divide into balls and roll thin.",
      "Cook on a hot skillet or saj until puffed and cooked through.",
    ],
  },
  {
    id: 7,
    title: "Lentil Fatteh with Pasta or Rice",
    image: "dignity_fatteh_lentil",
    description:
      "A simple and hearty Palestinian dish made by cooking lentils with a small amount of pasta or rice and drizzling with olive oil, perfect when ingredients are limited.",
    difficulty: "Easy",
    servings: "4 people",
    time: "30 mins",
    ingredients: [
      "1 cup lentils",
      "1/2 cup small pasta or 1/2 cup rice",
      "2 cloves garlic",
      "Olive oil, cumin, salt",
    ],
    steps: [
      "Cook lentils with salt and cumin until soft.",
      "Add half a cup of small pasta or rice to the pot with the lentils and cook them together until done.",
      "Serve in a dish and drizzle with olive oil and mashed garlic to taste.",
    ],
  },
  {
    id: 8,
    title: "Fire-Roasted Potatoes",
    image: "dignity_roasted_potatoes",
    description:
      "Rustic Palestinian-style potatoes roasted directly on fire or coals, giving them a smoky, delicious flavor.",
    difficulty: "Easy",
    servings: "3 people",
    time: "40 mins",
    ingredients: ["4 medium potatoes", "Salt (optional)"],
    steps: [
      "Wash potatoes thoroughly without peeling.",
      "Place directly on fire or coals until cooked through.",
      "Open and serve hot with a pinch of salt.",
    ],
  },
  {
    id: 9,
    title: "Yellow Rice with Chickpeas",
    image: "dignity_yellow_rice_chickpeas",
    description:
      "A simple Palestinian dish made of rice and chickpeas flavored with turmeric and spices, known for its golden color and rich taste despite its simplicity.",
    difficulty: "Easy",
    servings: "4 people",
    time: "30 mins",
    ingredients: [
      "2 cups rice",
      "1 cup cooked chickpeas",
      "1 tsp turmeric",
      "3 tbsp vegetable oil",
      "Salt, pepper",
    ],
    steps: [
      "Heat oil in a pot, add rice and turmeric, and stir briefly.",
      "Add chickpeas, salt, and pepper, then pour in water.",
      "Cook until rice is tender and water is absorbed.",
      "Serve hot as a hearty, simple meal.",
    ],
  },
];
