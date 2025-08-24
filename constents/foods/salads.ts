import { BaseRecipe } from "@/types/recipe.types";

export const SALADS_AR: BaseRecipe[] =[
  {
    id: 1,
    title: "سلطة الجرجير",
    image: "salad_hummus",
    description:
      "سلطة منعشة تعتمد على الجرجير الطازج وزيت الزيتون وعصير الليمون، تُقدّم عادةً بجانب الأكلات الفلسطينية.",
    time: "10 دقائق",
    difficulty: "سهل",
    servings: "4 أشخاص",
    ingredients: [
      "حزمة جرجير طازج",
      "2 ملعقة كبيرة زيت زيتون",
      "عصير ليمونة",
      "ملح حسب الرغبة",
    ],
    steps: [
      "اغسل الجرجير وصفيه.",
      "ضع الجرجير في وعاء التقديم.",
      "أضف زيت الزيتون وعصير الليمون ورشة ملح.",
      "قلّب وقدّمه فورًا.",
    ],
  },
  {
    id: 2,
    title: "سلطة الفتوش",
    image: "salad_fattoush",
    description:
      "سلطة ملونة بالخضار الطازجة والخبز المحمص، تُتبّل بزيت الزيتون وعصير الليمون والسماق.",
    time: "15 دقيقة",
    difficulty: "سهل",
    servings: "5 أشخاص",
    ingredients: [
      "2 خيار",
      "2 طماطم",
      "1 فلفل أخضر",
      "خبز عربي محمص",
      "2 ملعقة كبيرة زيت زيتون",
      "عصير ليمونة",
      "ملح وسماق",
    ],
    steps: [
      "قطع الخضار مكعبات.",
      "حمص الخبز وكسّره.",
      "اخلط الخضار والخبز.",
      "أضف الزيت والليمون والملح والسماق، وقلّب.",
    ],
  },
 
  
  {
    id: 5,
    title: "سلطة غزة الحارة",
    image: "salad_gaza_spicy_salad",
    description:
      "صلصة فلسطينية حارة من غزة، تعتمد على الفلفل الحار والطماطم والبقدونس.",
    time: "10 دقائق",
    difficulty: "سهل",
    servings: "4 أشخاص",
    ingredients: [
      "2 فلفل أخضر حار",
      "1 بندورة ناضجة",
      "حزمة بقدونس طازجة",
      "1 بصلة صغيرة",
      "عصير ليمونة",
      "2 ملعقة زيت زيتون",
      "ملح حسب الرغبة",
    ],
    steps: [
      "اهرَس الفلفل والثوم والملح.",
      "أضف البصل والبقدونس والطماطم.",
      "اضف الزيت والليمون وقلّب.",
      "قدمه بجانب الأطباق.",
    ],
  },
  {
    id: 6,
    title: "سلطة خيار وطماطم",
    image: "salad_cucumber_tomato",
    description:
      "سلطة بسيطة من خيار وطماطم وأعشاب، تُعرف أحياناً بسلطة المزارع أو القدس.",
    time: "10 دقائق",
    difficulty: "سهل",
    servings: "4 أشخاص",
    ingredients: [
      "4 بندورة متوسطة",
      "4 خيار صغيرة",
      "3 بصل أخضر",
      "ربع كوب بقدونس مفروم",
      "2 ملعقة زيت زيتون",
      "عصير ليمونة",
      "ملح وفلفل",
    ],
    steps: [
      "قطع البندورة والخيار والبصل والخضار.",
      "اخلط في وعاء وأضف الزيت والليمون والبهارات.",
      "قدّمها فوراً.",
    ],
  },
];

export const SALADS_EN: BaseRecipe[] = [
  {
    id: 1,
    title: "Arugula Salad",
    image: "salad_hummus",
    description:
      "A refreshing salad made with fresh arugula, olive oil, and lemon juice, commonly served alongside Palestinian dishes.",
    time: "10 min",
    difficulty: "Easy",
    servings: "4 people",
    ingredients: [
      "1 bunch of fresh arugula",
      "2 tbsp olive oil",
      "Juice of 1 lemon",
      "Salt to taste",
    ],
    steps: [
      "Wash and drain the arugula.",
      "Place arugula in a serving bowl.",
      "Add olive oil, lemon juice, and salt.",
      "Toss and serve immediately.",
    ],
  },
  {
    id: 2,
    title: "Fattoush Salad",
    image: "salad_fattoush",
    description:
      "A colorful salad made of fresh vegetables and toasted bread, seasoned with olive oil, lemon juice, and sumac.",
    time: "15 min",
    difficulty: "Easy",
    servings: "5 people",
    ingredients: [
      "2 cucumbers",
      "2 tomatoes",
      "1 green bell pepper",
      "Toasted Arabic bread",
      "2 tbsp olive oil",
      "Juice of 1 lemon",
      "Salt and sumac",
    ],
    steps: [
      "Chop the vegetables into cubes.",
      "Toast the bread and break it into pieces.",
      "Mix vegetables and bread together.",
      "Add olive oil, lemon juice, salt, and sumac, then toss.",
    ],
  },

  
  {
    id: 5,
    title: "Gaza Spicy Salad",
    image: "salad_gaza_spicy_salad",
    description:
      "A spicy Palestinian salad from Gaza made with hot peppers, tomatoes, and parsley.",
    time: "10 min",
    difficulty: "Easy",
    servings: "4 people",
    ingredients: [
      "2 hot green peppers",
      "1 ripe tomato",
      "1 bunch fresh parsley",
      "1 small onion",
      "Juice of 1 lemon",
      "2 tbsp olive oil",
      "Salt to taste",
    ],
    steps: [
      "Mash peppers with garlic and salt.",
      "Add onion, parsley, and tomato.",
      "Mix with olive oil and lemon juice.",
      "Serve alongside main dishes.",
    ],
  },
  {
    id: 6,
    title: "Cucumber and Tomato Salad",
    image: "salad_cucumber_tomato",
    description:
      "A simple salad of cucumber, tomatoes, and herbs, often called farmer’s or Jerusalem salad.",
    time: "10 min",
    difficulty: "Easy",
    servings: "4 people",
    ingredients: [
      "4 medium tomatoes",
      "4 small cucumbers",
      "3 green onions",
      "1/4 cup chopped parsley",
      "2 tbsp olive oil",
      "Juice of 1 lemon",
      "Salt and pepper",
    ],
    steps: [
      "Chop tomatoes, cucumbers, onions, and herbs.",
      "Mix in a bowl and add olive oil, lemon juice, and seasonings.",
      "Serve fresh.",
    ],
  },
];
