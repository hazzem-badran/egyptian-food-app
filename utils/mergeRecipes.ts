export const mergeRecipes = (arArray: any, enArray: any, category: string) => {
  return arArray.map((arItem: any) => {
    const enItem = enArray.find((en: any) => en.id === arItem.id)!;
    
    // الحصول على اسم الصورة
    const imageName = (arItem.image || enItem.image).toLowerCase();
    
    
    return {
      id: arItem.id,
      title: { ar: arItem.title, en: enItem.title },
      description: { ar: arItem.description, en: enItem.description },
      image: imageName,
      time: { ar: arItem.time, en: enItem.time },
      difficulty: { ar: arItem.difficulty, en: enItem.difficulty },
      servings: { ar: arItem.servings, en: enItem.servings },
      ingredients: { ar: arItem.ingredients, en: enItem.ingredients },
      steps: { ar: arItem.steps, en: enItem.steps },
      category,
    };
  });
};