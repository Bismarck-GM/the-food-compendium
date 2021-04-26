import React from 'react';
// We're using our own custom render function and not RTL's render
// our custom utils also re-export everything from RTL
// so we can import fireEvent and screen here as well
import { render, screen } from '../test-utils';
import Home from '../../pages/Home';
// eslint-disable-next-line no-unused-vars
import axiosMock from '../axiosMock';

// const thunk = ({ dispatch, getState }) => next => action => {
//   if (typeof action === 'function') {
//     return action(dispatch, getState);
//   }

//   return next(action);
// };

// const create = () => {
//   const store = {
//     getState: jest.fn(() => ({})),
//     dispatch: jest.fn(),
//   };
//   const next = jest.fn();

//   const invoke = action => thunk(store)(next)(action);

//   return { store, next, invoke };
// };

// it('Renders the connected app with initialState', () => {
//   render(<Home />, {
//     initialState: {
//       categories: {
//         loading: true,
//         error: null,
//         allCategories: null,
//       },
//       fetchCategories: jest.fn(),
//     },
//   });

//   expect(screen.getByText(/What would you like to eat today/i)).toBeInTheDocument();
// });
