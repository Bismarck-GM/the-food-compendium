import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { fetchCategories, fetchMealByCategory, fetchRecipeById } from '../../redux/actions/index';
import {
  renderWithRedux,
  screen,
  mockCategoriesInitialState,
  mockApiDataForCategories,
  mockApiDataForMealsByCategories,
  mockApiDataForSingleMeal,
} from '../test-utils';
import App from '../../App';

jest.mock('../../redux/actions/index', () => ({
  fetchCategories: jest.fn(() => () => Promise.resolve(mockApiDataForCategories)),
  fetchMealByCategory: jest.fn((() => () => Promise.resolve(mockApiDataForMealsByCategories))),
  fetchRecipeById: jest.fn((() => () => Promise.resolve(mockApiDataForSingleMeal))),
  categoriesLoading: jest.fn(),
  mealCategoryLoading: jest.fn(),
  recipeLoadingTrue: jest.fn(),
}));

describe('Root App Component', () => {
  test('Renders Navbar', () => {
    renderWithRedux(<App />, { route: '/the-food-compendium/', initialState: mockCategoriesInitialState });
    const logo = screen.getByText(/The food compendium/i);
    expect(logo).toBeInTheDocument();
  });
  test('Renders Footer', () => {
    renderWithRedux(<App />, { initialState: mockCategoriesInitialState });
    const image = screen.getByAltText(/footer-logo/i);
    expect(image).toBeInTheDocument();
  });

  test('Renders Home Page Component when root route', () => {
    renderWithRedux(<App />, { route: '/the-food-compendium/', initialState: mockCategoriesInitialState });
    expect(fetchCategories).toHaveBeenCalled();
    expect(fetchMealByCategory).not.toHaveBeenCalled();
    expect(fetchRecipeById).not.toHaveBeenCalled();
  });
  test('Renders Categories Page Component when root route', () => {
    renderWithRedux(<App />, { route: '/the-food-compendium/categories/Beef' });
    expect(fetchMealByCategory).toHaveBeenCalled();
    expect(fetchCategories).not.toHaveBeenCalled();
    expect(fetchRecipeById).not.toHaveBeenCalled();
  });
  test('Renders Recipes Page Component when root route', () => {
    renderWithRedux(<App />, { route: '/the-food-compendium/recipes/666' });
    expect(fetchRecipeById).toHaveBeenCalled();
    expect(fetchMealByCategory).not.toHaveBeenCalled();
    expect(fetchCategories).not.toHaveBeenCalled();
    // const title = screen.getByText(/What would you like to eat today?/i);
    // expect(title).toBeInTheDocument();
  });
});
