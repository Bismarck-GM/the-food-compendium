import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchCategories } from '../redux/actions';

function Home({ fetchCategories, categories }) {
  const { data, error, loading } = categories;

  console.log(categories);

  useEffect(() => {
    fetchCategories();
  }, []);

  if (error) {
    return `Error: ${error} `;
  }

  if (loading) {
    return 'Loading...';
  }

  if (data) {
    return (
      <div className="App">
        {`${data.categories}`}
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
  fetchCategories,
};

const mapStateToProps = (state) => ({
  categories: state.categories,
});

Home.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
  fetchCategories: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatch)(Home);
