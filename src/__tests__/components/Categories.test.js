import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { fetchMealByCategory, mealCategoryLoadingFalse } from '../../redux/actions/index';
import {
  renderWithRedux,
  screen,
  mockMealByCategoryPopulatedState,
  mockApiDataForMealsByCategories,
  mockMealByCategoryWithErrorState,
} from '../test-utils';
import App from '../../App';

jest.mock('../../redux/actions/index', () => ({
  fetchMealByCategory: jest.fn(
    () => () => Promise.resolve((mockApiDataForMealsByCategories)),
  ),
  mealCategoryLoading: jest.fn(),
  mealCategoryLoadingFalse: jest.fn(),
  mealCategoryQueryError: jest.fn(),
}));

describe('Categories Page Component', () => {
  test('Calls fetchMealByCategory with Params when Store.mealByCategory is null/empty.', async () => {
    await renderWithRedux(<App />, { route: '/the-food-compendium/categories/Beef', initialState: mockMealByCategoryPopulatedState });
    expect(fetchMealByCategory).not.toHaveBeenCalled();
    const title = screen.getAllByText(/Beef/i);
    expect(title[0]).toBeInTheDocument();
  });
  test('Calls mealCategoryLoadingFalse when Store.mealByCategory has or finished fetching items.', () => {
    renderWithRedux(<App />, { route: '/the-food-compendium/categories/Beef', initialState: mockMealByCategoryPopulatedState });
    expect(fetchMealByCategory).not.toHaveBeenCalled();
    expect(mealCategoryLoadingFalse).toHaveBeenCalled();
    const title = screen.getAllByText(/Beef/i);
    expect(title[0]).toBeInTheDocument();
    expect(screen.getAllByTestId(/link-to-recipe/i)[0]).toHaveAttribute('href', '/the-food-compendium/recipes/52874');
  });
  test('Display Error when Store.mealByCategory.error contains message.', () => {
    renderWithRedux(<App />, { route: '/the-food-compendium/categories/Beef', initialState: mockMealByCategoryWithErrorState });
    expect(fetchMealByCategory).not.toHaveBeenCalled();
    const title = screen.getByText(/Some Axios error. Or bad URL./i);
    expect(title).toBeInTheDocument();
  });
});
