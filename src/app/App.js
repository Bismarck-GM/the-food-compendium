import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import useFetch from '../api/useFetch';
import { SIMPLECATEGORIES } from '../api/apidata';
import { createFilter } from '../redux/actions';

function App({ createFilter }) {
  const { data, error, loading } = useFetch(SIMPLECATEGORIES);

  useEffect(() => {
    // eventually dispatch redux action
    // if you need to store something
    // eslint-disable-next-line no-unused-expressions
    data ? createFilter(data.meals) : '';
    // createFilter(data.meals);
  }, [data]);

  if (error) {
    return `Error: ${error} `;
  }

  if (loading) {
    return 'Loading...';
  }

  if (data) {
    return (
      <div className="App">
        {`${data.meals[0]}`}
      </div>
    );
  }

  return (
    <div className="App">
      Tuvieja
    </div>
  );
}

const mapDispatch = {
  createFilter,
};

App.propTypes = {
  createFilter: PropTypes.func.isRequired,
};

export default connect(null, mapDispatch)(App);
