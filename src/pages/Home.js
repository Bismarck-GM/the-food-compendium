import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Box,
  Skeleton,
  Image,
  // Text,
  Heading,
} from '@chakra-ui/react';
import { fetchCategories, mealCategoryLoading } from '../redux/actions';

function Home({ fetchCategories, mealCategoryLoading, categories }) {
  const { allCategories, error, loading } = categories;

  useEffect(() => {
    mealCategoryLoading();
  }, []);

  if (allCategories === null) {
    fetchCategories();
  }

  if (error) {
    return `Error: ${error} `;
  }
  return (
    <Box
      overflowY="scroll"
    >
      <Skeleton
        isLoaded={!loading}
        position="relative"
        margin={{ base: '0', lg: '0 auto' }}
        minWidth="100%"
        minHeight={loading ? { base: 'calc(100vh - 88px)', lg: 'calc(100vh - 144px)' } : { lg: 'calc(100vh - 144px)' }}
        backgroundColor="rgb(0,0,0,0.6)"
        _after={{
          content: '""',
          bgGradient: 'linear(to-r, red.500, yellow.500)',
          bgSize: 'cover',
          bgRepeat: 'no-repeat',
          opacity: '0.9',
          top: '0',
          left: '0',
          bottom: '0',
          right: '0',
          position: 'absolute',
          zIndex: '-1',
        }}
      >
        <Heading backgroundColor="rgb(170, 151, 164, 0.8)" size="lg" fontFamily="'Advent Pro', sans-serif;" textAlign="center">What would you like to eat today?</Heading>
        <Box
          display={{ base: 'block', md: 'grid' }}
          gridTemplateColumns={{ md: '1fr 1fr', lg: '1fr 1fr 1fr' }}
          gridGap={{ md: '5px 5px', lg: '10px 10px' }}
          px={{ base: 0, md: 3, xl: 24 }}
          py={{ base: 0, lg: 6 }}
          // bgGradient="linear(0deg, rgba(213,213,213,1) 0%, rgba(246,246,246,1) 100%);"
          minHeight={{ lg: 'calc(100vh - 144px)' }}
        >
          { allCategories ? allCategories.map((cat) => (
            <Box
              key={cat.idCategory}
              minWidth={['100%', '100%', '50%']}
              backgroundColor="rgb(127,127,127,0.2)"
              color="white"
              position="relative"
              alignSelf="center"
              borderRadius={{ lg: '30px' }}
              boxShadow="dark-lg"
              transition="all .4s ease-in-out"
              _hover={{ transform: 'scale(1.05)', zIndex: '10' }}
              padding={6}
            >
              <Link
                to={`categories/${cat.strCategory}`}
              >
                <Image
                  src={cat.strCategoryThumb}
                  alt={cat.strCategory}
                  w="100%"
                  borderRadius={{ lg: '30px' }}
                />
              </Link>
              <Box
                backgroundColor="rgb(215,150,47,0.7)"
                position="absolute"
                bottom="0"
                left="0"
                w="100%"
                p={[2, 4]}
                borderBottomRadius={{ lg: '30px' }}
              >
                <Heading size="md" fontFamily="'Advent Pro', sans-serif;">
                  {`${cat.strCategory}`}
                </Heading>
              </Box>
            </Box>
          )) : ''}
        </Box>
      </Skeleton>
    </Box>
  );
}

const mapDispatch = {
  fetchCategories,
  mealCategoryLoading,
};

const mapStateToProps = (state) => ({
  categories: state.categories,
});

Home.propTypes = {
  categories: PropTypes.objectOf(PropTypes.any).isRequired,
  fetchCategories: PropTypes.func.isRequired,
  mealCategoryLoading: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatch)(Home);
