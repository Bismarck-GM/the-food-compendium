import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { fetchCategories, categoriesLoadingFalse } from '../../redux/actions/index';
import {
  renderWithRedux,
  screen,
  mockCategoriesInitialState,
  mockCategoriesPopulatedState,
  mockApiDataForCategories,
  mockCategoriesWithErrorState,
} from '../test-utils';
import App from '../../App';

jest.mock('../../redux/actions/index', () => ({
  fetchCategories: jest.fn(() => () => Promise.resolve(mockApiDataForCategories)),
  categoriesLoading: jest.fn(),
  categoriesLoadingFalse: jest.fn(),
  categoriesQueryError: jest.fn(),
}));

describe('Home Page Component', () => {
  test('Calls fetchcategories when Store.Categories is null/empty.', () => {
    renderWithRedux(<App />, { route: '/', initialState: mockCategoriesInitialState });
    expect(fetchCategories).toHaveBeenCalled();
    const title = screen.getByText(/What would you like to eat today?/i);
    expect(title).toBeInTheDocument();
  });
  test('Calls categoriesLoadingFalse when Store.Categories has or finished fetching items.', () => {
    renderWithRedux(<App />, { route: '/', initialState: mockCategoriesPopulatedState });
    expect(fetchCategories).not.toHaveBeenCalled();
    expect(categoriesLoadingFalse).toHaveBeenCalled();
    const title = screen.getByText(/Beef/i);
    expect(title).toBeInTheDocument();
    expect(screen.getByText(/Beef/i).closest('a')).toHaveAttribute('href', '/categories/Beef');
  });
  test('Display Error when Store.Categories.error contains message.', () => {
    renderWithRedux(<App />, { route: '/', initialState: mockCategoriesWithErrorState });
    expect(fetchCategories).not.toHaveBeenCalled();
    const title = screen.getByText(/Some Axios error. Or bad URL./i);
    expect(title).toBeInTheDocument();
  });
});
