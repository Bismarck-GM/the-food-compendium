import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import rootStore from '../redux/reducers';

// Categories - Home
export const mockApiDataForCategories = [
  {
    idCategory: '1',
    strCategory: 'Beef',
    strCategoryThumb: 'https://www.themealdb.com/images/category/beef.png',
    strCategoryDescription: 'Beef is the culinary name for meat from cattle, particularly skeletal muscle. Humans have been eating beef since prehistoric times.[1] Beef is a source of high-quality protein and essential nutrients.[2]',
  },
  {
    idCategory: '2',
    strCategory: 'Chicken',
    strCategoryThumb: 'https://www.themealdb.com/images/category/chicken.png',
    strCategoryDescription: 'Chicken is a type of domesticated fowl, a subspecies of the red junglefowl. It is one of the most common and widespread domestic animals, with a total population of more than 19 billion as of 2011.[1] Humans commonly keep chickens as a source of food (consuming both their meat and eggs) and, more rarely, as pets.',
  },
  {
    idCategory: '3',
    strCategory: 'Dessert',
    strCategoryThumb: 'https://www.themealdb.com/images/category/dessert.png',
    strCategoryDescription: 'Dessert is a course that concludes a meal. The course usually consists of sweet foods, such as confections dishes or fruit, and possibly a beverage such as dessert wine or liqueur, however in the United States it may include coffee, cheeses, nuts, or other savory items regarded as a separate course elsewhere. In some parts of the world, such as much of central and western Africa, and most parts of China, there is no tradition of a dessert course to conclude a meal.\r\n\r\nThe term dessert can apply to many confections, such as biscuits, cakes, cookies, custards, gelatins, ice creams, pastries, pies, puddings, and sweet soups, and tarts. Fruit is also commonly found in dessert courses because of its naturally occurring sweetness. Some cultures sweeten foods that are more commonly savory to create desserts.',
  },
  {
    idCategory: '4',
    strCategory: 'Lamb',
    strCategoryThumb: 'https://www.themealdb.com/images/category/lamb.png',
    strCategoryDescription: 'Lamb, hogget, and mutton are the meat of domestic sheep (species Ovis aries) at different ages.\r\n\r\nA sheep in its first year is called a lamb, and its meat is also called lamb. The meat of a juvenile sheep older than one year is hogget; outside the USA this is also a term for the living animal. The meat of an adult sheep is mutton, a term only used for the meat, not the living animals. The term mutton is almost always used to refer to goat meat in the Indian subcontinent.\r\n\r\n',
  },
];

export const mockCategoriesInitialState = {
  categories: {
    loading: true,
    error: null,
    allCategories: null,
  },
};

export const mockCategoriesPopulatedState = {
  categories: {
    loading: false,
    error: null,
    allCategories: [
      {
        idCategory: '1',
        strCategory: 'Beef',
        strCategoryThumb: 'https://www.themealdb.com/images/category/beef.png',
        strCategoryDescription: 'Beef is the culinary name for meat from cattle, particularly skeletal muscle. Humans have been eating beef since prehistoric times.[1] Beef is a source of high-quality protein and essential nutrients.[2]',
      },
      {
        idCategory: '2',
        strCategory: 'Chicken',
        strCategoryThumb: 'https://www.themealdb.com/images/category/chicken.png',
        strCategoryDescription: 'Chicken is a type of domesticated fowl, a subspecies of the red junglefowl. It is one of the most common and widespread domestic animals, with a total population of more than 19 billion as of 2011.[1] Humans commonly keep chickens as a source of food (consuming both their meat and eggs) and, more rarely, as pets.',
      },
      {
        idCategory: '3',
        strCategory: 'Dessert',
        strCategoryThumb: 'https://www.themealdb.com/images/category/dessert.png',
        strCategoryDescription: 'Dessert is a course that concludes a meal. The course usually consists of sweet foods, such as confections dishes or fruit, and possibly a beverage such as dessert wine or liqueur, however in the United States it may include coffee, cheeses, nuts, or other savory items regarded as a separate course elsewhere. In some parts of the world, such as much of central and western Africa, and most parts of China, there is no tradition of a dessert course to conclude a meal.\r\n\r\nThe term dessert can apply to many confections, such as biscuits, cakes, cookies, custards, gelatins, ice creams, pastries, pies, puddings, and sweet soups, and tarts. Fruit is also commonly found in dessert courses because of its naturally occurring sweetness. Some cultures sweeten foods that are more commonly savory to create desserts.',
      },
      {
        idCategory: '4',
        strCategory: 'Lamb',
        strCategoryThumb: 'https://www.themealdb.com/images/category/lamb.png',
        strCategoryDescription: 'Lamb, hogget, and mutton are the meat of domestic sheep (species Ovis aries) at different ages.\r\n\r\nA sheep in its first year is called a lamb, and its meat is also called lamb. The meat of a juvenile sheep older than one year is hogget; outside the USA this is also a term for the living animal. The meat of an adult sheep is mutton, a term only used for the meat, not the living animals. The term mutton is almost always used to refer to goat meat in the Indian subcontinent.\r\n\r\n',
      },
    ],
  },
};

export const mockCategoriesWithErrorState = {
  categories: {
    loading: false,
    error: 'Some Axios error. Or bad URL.',
    allCategories: [
      {
        idCategory: '1',
        strCategory: 'Beef',
        strCategoryThumb: 'https://www.themealdb.com/images/category/beef.png',
        strCategoryDescription: 'Beef is the culinary name for meat from cattle, particularly skeletal muscle. Humans have been eating beef since prehistoric times.[1] Beef is a source of high-quality protein and essential nutrients.[2]',
      },
    ],
  },
};
// Meal By Category
export const mockApiDataForMealsByCategories = {
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

export const mockMealByCategoryInitialState = {
  mealByCategory: {
    loading: true,
    error: null,
    byCategory: null,
  },
};

export const mockMealByCategoryPopulatedState = {
  mealByCategory: {
    loading: false,
    error: null,
    byCategory: {
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
    },
  },
};

export const mockMealByCategoryWithErrorState = {
  mealByCategory: {
    loading: false,
    error: 'Some Axios error. Or bad URL.',
    byCategory: {
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
    },
  },
};

// Meal Recipe
export const mockApiDataForSingleMeal = {
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

export const mockRecipeInitialState = {
  recipes: {
    loading: false,
    error: null,
    mobileCards: {
      recipe: true,
      ingredients: false,
      tools: false,
    },
    byId: {},
  },
};

export const mockRecipePopulatedState = {
  recipes: {
    loading: false,
    error: null,
    mobileCards: {
      recipe: true,
      ingredients: false,
      tools: false,
    },
    byId: {
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
    },
  },
};

export const mockRecipeWithErrorState = {
  recipes: {
    loading: false,
    error: 'Some Axios error. Or bad URL.',
    mobileCards: {
      recipe: true,
      ingredients: false,
      tools: false,
    },
    byId: {
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
    },
  },
};

const thunk = ({ dispatch, getState }) => () => (action) => {
  if (typeof action === 'function') {
    return action(dispatch, getState);
  }

  return jest.fn();
};

export const renderWithRedux = (
  ui,
  {
    initialState,
    store = createStore(rootStore, initialState, applyMiddleware(thunk)),
    route = '/',
    ...renderOptions
  } = {},
) => {
  // eslint-disable-next-line react/prop-types
  const Wrapper = ({ children }) => (
    <Provider store={store}>
      <ChakraProvider>
        {children}
      </ChakraProvider>
    </Provider>
  );

  window.history.pushState({}, 'Test page', route);

  return rtlRender(ui, { wrapper: Wrapper, MemoryRouter, ...renderOptions });
};

export * from '@testing-library/react';
