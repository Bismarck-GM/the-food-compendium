import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../../redux/actions';
import * as types from '../../redux/actions/types';
// eslint-disable-next-line no-unused-vars
import axiosMock from '../axiosMock';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Thunk fetchCategories', () => {
  it('creates CREATE_CATEGORIES when fetching categories has been done', () => {
    const expectedActions = [
      {
        type: types.CREATE_CATEGORIES,
        payload: [
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
      },
    ];
    const store = mockStore({ categories: [] });
    return store.dispatch(actions.fetchCategories()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('creates CATEGORIES_QUERY_ERROR when fetching categories has failed', () => {
    const expectedActions = [
      {
        type: types.CATEGORIES_QUERY_ERROR,
        payload: 'Request failed with status code 404',
      },
    ];
    const store = mockStore({ categories: [] });
    return store.dispatch(actions.fetchCategories()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});

describe('Thunk fetchMealByCategory', () => {
  it('creates CREATE_MEAL_CATEGORY when fetching Meals by Categories has been done and normalized', () => {
    const expectedActions = [
      {
        type: types.CREATE_MEAL_CATEGORY,
        payload: {
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
    ];
    const store = mockStore({ mealByCategory: [] });
    return store.dispatch(actions.fetchMealByCategory('Beef')).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('creates MEAL_CATEGORY_QUERY_ERROR when fetching Meals by Categories has failed', () => {
    const expectedActions = [
      {
        type: types.MEAL_CATEGORY_QUERY_ERROR,
        payload: 'Request failed with status code 404',
      },
    ];
    const store = mockStore({ mealByCategory: [] });
    return store.dispatch(actions.fetchMealByCategory('FAIL')).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});

describe('Thunk fetchRecipeById', () => {
  it('creates CREATE_RECIPE when fetchRecipeById has been done and normalized', () => {
    const expectedActions = [
      {
        type: types.CREATE_RECIPE,
        payload: {
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
    ];
    const store = mockStore({ recipes: [] });
    return store.dispatch(actions.fetchRecipeById(52772)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
  it('creates RECIPE_QUERY_ERROR when fetchRecipeById has failed', () => {
    const expectedActions = [
      {
        type: types.RECIPE_QUERY_ERROR,
        payload: 'Request failed with status code 404',
      },
    ];
    const store = mockStore({ recipes: { error: '' } });
    return store.dispatch(actions.fetchRecipeById(123)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
