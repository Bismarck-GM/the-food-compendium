import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { fetchRecipeById } from '../../redux/actions/index';
import {
  renderWithRedux,
  screen,
  // mockRecipePopulatedState,
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
  // beforeAll(() => {
  //   Object.defineProperty(window, 'matchMedia', {
  //     writable: true,
  //     value: jest.fn().mockImplementation((query) => ({
  //       matches: false,
  //       media: query,
  //       onchange: null,
  //       addListener: jest.fn(), // Deprecated
  //       removeListener: jest.fn(), // Deprecated
  //       addEventListener: jest.fn(),
  //       removeEventListener: jest.fn(),
  //       dispatchEvent: jest.fn(),
  //     })),
  //   });
  // });
  // test('Calls fetchRecipeById when Store.recipes is null/empty.', () => {
  // eslint-disable-next-line max-len
  //   renderWithRedux(<App />, { route: '/recipes/52772', initialState: mockRecipePopulatedState });
  //   expect(fetchRecipeById).not.toHaveBeenCalled();
  //   const title = screen.getByText(/Japanese/i);
  //   expect(title).toBeInTheDocument();
  // });
  // eslint-disable-next-line max-len
  // test('Calls mealCategoryLoadingFalse when Store.mealByCategory has or finished fetching items.', () => {
  // eslint-disable-next-line max-len
  //   renderWithRedux(<App />, { route: '/recipes/52772', initialState: mockRecipePopulatedState });
  //   expect(fetchRecipeById).not.toHaveBeenCalled();
  //   expect(recipeLoadingFalse).toHaveBeenCalled();
  //   const title = screen.getByText(/Japanese/i);
  //   expect(title).toBeInTheDocument();
  // eslint-disable-next-line max-len
  //   expect(screen.getByText(/Beef and Mustard Pie/i).closest('a')).toHaveAttribute('href', '/recipes/52874');
  // });
  test('Display Error when Store.mealByCategory.error contains message.', () => {
    renderWithRedux(<App />, { route: '/recipes/52772', initialState: mockRecipeWithErrorState });
    expect(fetchRecipeById).not.toHaveBeenCalled();
    const title = screen.getByText(/Some Axios error. Or bad URL./i);
    expect(title).toBeInTheDocument();
  });
});
