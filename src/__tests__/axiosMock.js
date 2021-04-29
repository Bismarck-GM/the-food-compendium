import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { ALLCATEGORIESURL, singleRecipeURL, mealByCategoryURL } from '../api/apidata';

const recipeIdURL = singleRecipeURL(52772);

const categoryMeals = mealByCategoryURL('Beef');

const axiosMock = new MockAdapter(axios);

axiosMock.onGet(ALLCATEGORIESURL).replyOnce(200, {
  categories: [
    {
      idCategory: 1,
      strCategory: 'Beef',
      strCategoryThumb: 'https://www.themealdb.com/images/category/beef.png',
      strCategoryDescription: 'Beef is the culinary name for meat from cattle, particularly skeletal muscle. Humans have been eating beef since prehistoric times.[1] Beef is a source of high-quality protein and essential nutrients.[2]',
    },
    {
      idCategory: 2,
      strCategory: 'Chicken',
      strCategoryThumb: 'https://www.themealdb.com/images/category/chicken.png',
      strCategoryDescription: 'Chicken is a type of domesticated fowl, a subspecies of the red junglefowl. It is one of the most common and widespread domestic animals, with a total population of more than 19 billion as of 2011.[1] Humans commonly keep chickens as a source of food (consuming both their meat and eggs) and, more rarely, as pets.',
    },
  ],
});

axiosMock.onGet(recipeIdURL).replyOnce(200, {
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
});

axiosMock.onGet(categoryMeals).replyOnce(200, {
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
});

export default axiosMock;
