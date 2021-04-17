import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Box,
  Skeleton,
  Image,
  Text,
  Heading,
} from '@chakra-ui/react';
import { fetchCategories } from '../redux/actions';

function Home({ fetchCategories, categories }) {
  const { allCategories, error, loading } = categories;

  if (allCategories === null) {
    fetchCategories();
  }

  if (error) {
    return `Error: ${error} `;
  }
  return (
    <Box paddingTop="64px">
      <Skeleton
        isLoaded={!loading}
        height="calc(100vh - 64px)"
        margin={{ base: '0', lg: '0 auto' }}
        display={{ lg: 'flex' }}
        flexDirection={{ lg: 'column' }}
        minWidth="100%"
      >
        { allCategories ? allCategories.map((cat) => (
          <Box
            key={cat.idCategory}
            minWidth={['100%', '100%', '50%']}
            backgroundColor="rgb(0,0,0,0.5)"
            color="white"
            position="relative"
            alignSelf="center"
          >
            <Link
              to={`categories/${cat.strCategory}`}
            >
              <Image src={cat.strCategoryThumb} alt={cat.strCategory} w="100%" />
            </Link>
            <Box backgroundColor="rgb(167,199,231,0.8)" position="absolute" bottom="0" w="100%" p={[2, 4, 6, 8]}>
              <Heading size="lg" fontFamily="'Advent Pro', sans-serif;">
                {`${cat.strCategory}`}
              </Heading>
              <Text fontFamily="'Advent Pro', sans-serif;" color="black">Theres X amount of recepies</Text>
            </Box>
          </Box>
        )) : ''}
      </Skeleton>
    </Box>
  );
}

const mapDispatch = {
  fetchCategories,
};

const mapStateToProps = (state) => ({
  categories: state.categories,
});

Home.propTypes = {
  categories: PropTypes.objectOf(PropTypes.any).isRequired,
  fetchCategories: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatch)(Home);
