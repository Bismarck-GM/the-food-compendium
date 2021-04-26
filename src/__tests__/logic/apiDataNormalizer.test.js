import { normalizeDataByMeal, normalizeDataRecipe } from '../../redux/actions/normalizers';

const apiDataForSingleMeal = {
  meals: [
    {
      idMeal: '52772',
      strMeal: 'Teriyaki Chicken Casserole',
      strDrinkAlternate: null,
      strCategory: 'Chicken',
      strArea: 'Japanese',
      strInstructions: 'Preheat oven to 350° F. Spray a 9x13-inch baking pan with non-stick spray.\r\nCombine soy sauce, ½ cup water, brown sugar, ginger and garlic in a small saucepan and cover. Bring to a boil over medium heat. Remove lid and cook for one minute once boiling.\r\nMeanwhile, stir together the corn starch and 2 tablespoons of water in a separate dish until smooth. Once sauce is boiling, add mixture to the saucepan and stir to combine. Cook until the sauce starts to thicken then remove from heat.\r\nPlace the chicken breasts in the prepared pan. Pour one cup of the sauce over top of chicken. Place chicken in oven and bake 35 minutes or until cooked through. Remove from oven and shred chicken in the dish using two forks.\r\n*Meanwhile, steam or cook the vegetables according to package directions.\r\nAdd the cooked vegetables and rice to the casserole dish with the chicken. Add most of the remaining sauce, reserving a bit to drizzle over the top when serving. Gently toss everything together in the casserole dish until combined. Return to oven and cook 15 minutes. Remove from oven and let stand 5 minutes before serving. Drizzle each serving with remaining sauce. Enjoy!',
      strMealThumb: 'https://www.themealdb.com/images/media/meals/wvpsxx1468256321.jpg',
      strTags: 'Meat,Casserole',
      strYoutube: 'https://www.youtube.com/watch?v=4aZr5hZXP_s',
      strIngredient1: 'soy sauce',
      strIngredient2: 'water',
      strIngredient3: 'brown sugar',
      strIngredient4: 'ground ginger',
      strIngredient5: 'minced garlic',
      strIngredient6: 'cornstarch',
      strIngredient7: 'chicken breasts',
      strIngredient8: 'stir-fry vegetables',
      strIngredient9: 'brown rice',
      strIngredient10: '',
      strIngredient11: '',
      strIngredient12: '',
      strIngredient13: '',
      strIngredient14: '',
      strIngredient15: '',
      strIngredient16: null,
      strIngredient17: null,
      strIngredient18: null,
      strIngredient19: null,
      strIngredient20: null,
      strMeasure1: '3/4 cup',
      strMeasure2: '1/2 cup',
      strMeasure3: '1/4 cup',
      strMeasure4: '1/2 teaspoon',
      strMeasure5: '1/2 teaspoon',
      strMeasure6: '4 Tablespoons',
      strMeasure7: '2',
      strMeasure8: '1 (12 oz.)',
      strMeasure9: '3 cups',
      strMeasure10: '',
      strMeasure11: '',
      strMeasure12: '',
      strMeasure13: '',
      strMeasure14: '',
      strMeasure15: '',
      strMeasure16: null,
      strMeasure17: null,
      strMeasure18: null,
      strMeasure19: null,
      strMeasure20: null,
      strSource: null,
      strImageSource: null,
      strCreativeCommonsConfirmed: null,
      dateModified: null,
    },
  ],
};

const apiDataForMealsByCategories = {
  meals: [
    {
      strMeal: 'Beef and Mustard Pie',
      strMealThumb: 'https://www.themealdb.com/images/media/meals/sytuqu1511553755.jpg',
      idMeal: '52874',
    },
    {
      strMeal: 'Beef and Oyster pie',
      strMealThumb: 'https://www.themealdb.com/images/media/meals/wrssvt1511556563.jpg',
      idMeal: '52878',
    },
    {
      strMeal: 'Beef Banh Mi Bowls with Sriracha Mayo, Carrot & Pickled Cucumber',
      strMealThumb: 'https://www.themealdb.com/images/media/meals/z0ageb1583189517.jpg',
      idMeal: '52997',
    },
    {
      strMeal: 'Beef Bourguignon',
      strMealThumb: 'https://www.themealdb.com/images/media/meals/vtqxtu1511784197.jpg',
      idMeal: '52904',
    },
    {
      strMeal: 'Beef Brisket Pot Roast',
      strMealThumb: 'https://www.themealdb.com/images/media/meals/ursuup1487348423.jpg',
      idMeal: '52812',
    },
  ],
};

const apiDataForSingleMealDigested = {
  52772: {
    steppedInstructions: [
      {
        instructionId: 1,
        instruction: 'Preheat oven to 350° F',
        isDone: false,
      },
      {
        instructionId: 2,
        instruction: 'Spray a 9x13-inch baking pan with non-stick spray',
        isDone: false,
      },
      {
        instructionId: 3,
        instruction: 'Combine soy sauce, ½ cup water, brown sugar, ginger and garlic in a small saucepan and cover',
        isDone: false,
      },
      {
        instructionId: 4,
        instruction: 'Bring to a boil over medium heat',
        isDone: false,
      },
      {
        instructionId: 5,
        instruction: 'Remove lid and cook for one minute once boiling',
        isDone: false,
      },
      {
        instructionId: 6,
        instruction: 'Meanwhile, stir together the corn starch and 2 tablespoons of water in a separate dish until smooth',
        isDone: false,
      },
      {
        instructionId: 7,
        instruction: 'Once sauce is boiling, add mixture to the saucepan and stir to combine',
        isDone: false,
      },
      {
        instructionId: 8,
        instruction: 'Cook until the sauce starts to thicken then remove from heat',
        isDone: false,
      },
      {
        instructionId: 9,
        instruction: 'Place the chicken breasts in the prepared pan',
        isDone: false,
      },
      {
        instructionId: 10,
        instruction: 'Pour one cup of the sauce over top of chicken',
        isDone: false,
      },
      {
        instructionId: 11,
        instruction: 'Place chicken in oven and bake 35 minutes or until cooked through',
        isDone: false,
      },
      {
        instructionId: 12,
        instruction: 'Remove from oven and shred chicken in the dish using two forks',
        isDone: false,
      },
      {
        instructionId: 13,
        instruction: '*Meanwhile, steam or cook the vegetables according to package directions',
        isDone: false,
      },
      {
        instructionId: 14,
        instruction: 'Add the cooked vegetables and rice to the casserole dish with the chicken',
        isDone: false,
      },
      {
        instructionId: 15,
        instruction: 'Add most of the remaining sauce, reserving a bit to drizzle over the top when serving',
        isDone: false,
      },
      {
        instructionId: 16,
        instruction: 'Gently toss everything together in the casserole dish until combined',
        isDone: false,
      },
      {
        instructionId: 17,
        instruction: 'Return to oven and cook 15 minutes',
        isDone: false,
      },
      {
        instructionId: 18,
        instruction: 'Remove from oven and let stand 5 minutes before serving',
        isDone: false,
      },
      {
        instructionId: 19,
        instruction: 'Drizzle each serving with remaining sauce',
        isDone: false,
      },
      {
        instructionId: 20,
        instruction: 'Enjoy!',
        isDone: false,
      },
    ],
    ingredients: [
      {
        id: 1,
        ingredient: 'soy sauce',
        measure: '3/4 cup',
        isDone: false,
      },
      {
        id: 2,
        ingredient: 'water',
        measure: '1/2 cup',
        isDone: false,
      },
      {
        id: 3,
        ingredient: 'brown sugar',
        measure: '1/4 cup',
        isDone: false,
      },
      {
        id: 4,
        ingredient: 'ground ginger',
        measure: '1/2 teaspoon',
        isDone: false,
      },
      {
        id: 5,
        ingredient: 'minced garlic',
        measure: '1/2 teaspoon',
        isDone: false,
      },
      {
        id: 6,
        ingredient: 'cornstarch',
        measure: '4 Tablespoons',
        isDone: false,
      },
      {
        id: 7,
        ingredient: 'chicken breasts',
        measure: '2 units',
        isDone: false,
      },
      {
        id: 8,
        ingredient: 'stir-fry vegetables',
        measure: '1 (12 oz.)',
        isDone: false,
      },
      {
        id: 9,
        ingredient: 'brown rice',
        measure: '3 cups',
        isDone: false,
      },
    ],
    dateModified: null,
    idMeal: '52772',
    strArea: 'Japanese',
    strCategory: 'Chicken',
    strCreativeCommonsConfirmed: null,
    strDrinkAlternate: null,
    strImageSource: null,
    strMeal: 'Teriyaki Chicken Casserole',
    strMealThumb: 'https://www.themealdb.com/images/media/meals/wvpsxx1468256321.jpg',
    strSource: null,
    strTags: 'Meat,Casserole',
    strYoutube: 'https://www.youtube.com/watch?v=4aZr5hZXP_s',
  },
};

const apiDataForMealsByCategoriesDigested = {
  Beef: [
    {
      strMeal: 'Beef and Mustard Pie',
      strMealThumb: 'https://www.themealdb.com/images/media/meals/sytuqu1511553755.jpg',
      idMeal: '52874',
    },
    {
      strMeal: 'Beef and Oyster pie',
      strMealThumb: 'https://www.themealdb.com/images/media/meals/wrssvt1511556563.jpg',
      idMeal: '52878',
    },
    {
      strMeal: 'Beef Banh Mi Bowls with Sriracha Mayo, Carrot & Pickled Cucumber',
      strMealThumb: 'https://www.themealdb.com/images/media/meals/z0ageb1583189517.jpg',
      idMeal: '52997',
    },
    {
      strMeal: 'Beef Bourguignon',
      strMealThumb: 'https://www.themealdb.com/images/media/meals/vtqxtu1511784197.jpg',
      idMeal: '52904',
    },
    {
      strMeal: 'Beef Brisket Pot Roast',
      strMealThumb: 'https://www.themealdb.com/images/media/meals/ursuup1487348423.jpg',
      idMeal: '52812',
    },
  ],
};

describe('normalizeDataByMeal', () => {
  it('should destruct the JSON into digestable data', () => {
    const processedData = normalizeDataByMeal(apiDataForMealsByCategories, 'Beef');
    expect(processedData).toEqual(apiDataForMealsByCategoriesDigested);
  });
});

describe('normalizeDataRecipe', () => {
  it('should destruct the JSON into digestable data', () => {
    const processedData = normalizeDataRecipe(apiDataForSingleMeal, 52772);
    expect(processedData).toEqual(apiDataForSingleMealDigested);
  });
});
