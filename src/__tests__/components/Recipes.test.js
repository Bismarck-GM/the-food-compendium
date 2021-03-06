import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { fetchRecipeById } from '../../redux/actions/index';
import {
  renderWithRedux,
  screen,
  mockRecipeWithErrorState,
  mockApiDataForSingleMeal,
} from '../test-utils';
import App from '../../App';

jest.mock('../../redux/actions/index', () => ({
  fetchRecipeById: jest.fn(() => () => Promise.resolve(mockApiDataForSingleMeal)),
  recipeLoadingTrue: jest.fn(),
  recipeLoadingFalse: jest.fn(),
  recipeQueryError: jest.fn(),
}));

describe('Recipes Page Component', () => {
  test('Display Error when Store.mealByCategory.error contains message.', () => {
    renderWithRedux(<App />, { route: '/the-food-compendium/recipes/52772', initialState: mockRecipeWithErrorState });
    expect(fetchRecipeById).not.toHaveBeenCalled();
    const title = screen.getByText(/Some Axios error. Or bad URL./i);
    expect(title).toBeInTheDocument();
  });
});
