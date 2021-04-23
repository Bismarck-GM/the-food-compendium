import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Box,
  Skeleton,
  Image,
  Heading,
} from '@chakra-ui/react';
import Masonry from 'react-masonry-css';
import { fetchCategories, mealCategoryLoading } from '../redux/actions';

function Home({ fetchCategories, mealCategoryLoading, categories }) {
  const { allCategories, error, loading } = categories;
  const dayPhrase = 'What would you like to eat today?';
  const [phrase, setPhrase] = useState(dayPhrase);
  const masonryBreakPoints = {
    768: 1,
    2000: 3,
  };

  useEffect(() => {
    mealCategoryLoading();
    if (allCategories === null) {
      fetchCategories();
    }
  }, []);

  if (error) {
    return `Error: ${error} `;
  }

  return (
    <Box
      overflowY="scroll"
    >
      <Heading
        backgroundColor="rgb(254,180,0)"
        size="lg"
        fontFamily="'Advent Pro', sans-serif;"
        textAlign="center"
        position="sticky"
        top="0"
        zIndex="12"
        w="100%"
        transition="all .5s ease-in-out"
      >
        {phrase}
      </Heading>
      <Skeleton
        isLoaded={!loading}
        px={{ base: 0, md: 3, xl: '10%' }}
        py={{ base: 0, lg: 6 }}
        position="relative"
        margin={{ base: '0', lg: '0 auto' }}
        minWidth="100%"
        minHeight={loading ? { base: 'calc(100vh - 88px)', lg: 'calc(100vh - 144px)' } : { lg: 'calc(100vh - 144px)' }}
        // backgroundColor="rgb(0,0,0,0.3)"
        _after={{
          content: '""',
          background: 'linear-gradient(0deg, rgba(1,1,1,1) 0%, rgba(117,117,117,1) 100%)',
          // bgGradient: 'linear(to-r, red.500, yellow.500)',
          bgSize: 'cover',
          bgRepeat: 'no-repeat',
          opacity: '1',
          top: '0',
          left: '0',
          bottom: '0',
          right: '0',
          position: 'absolute',
          zIndex: '-1',
        }}
      >
        <Masonry
          breakpointCols={masonryBreakPoints}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
          display={{ base: 'block', md: 'grid' }}
          gridTemplateColumns={{ md: '1fr 1fr', lg: '1fr 1fr 1fr 1fr' }}
          gridGap={{ md: '5px 5px', lg: '20px 20px' }}
          px={{ base: 0, md: 3, xl: 6 }}
          py={{ base: 0, lg: 6 }}
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
              boxShadow="dark-lg"
              transition="all .4s ease-in-out"
              _hover={{ transform: 'scale(1.05)', zIndex: '10' }}
              borderY={{ base: '2px solid black', lg: 'none' }}
              marginBottom={{ base: 0, lg: 6 }}
              role="group"
              onMouseOver={() => setPhrase(`Yay! ${cat.strCategory}!`)}
              onMouseOut={() => setPhrase(dayPhrase)}
              onFocus={() => setPhrase(`${cat.strCategory}?`)}
              onBlur={() => setPhrase(dayPhrase)}
            >
              <Link
                to={`categories/${cat.strCategory}`}
              >
                <Image
                  src={`${process.env.PUBLIC_URL}/images/${cat.strCategory}.jpg`}
                  alt={cat.strCategory}
                  w="100%"
                />
              </Link>
              <Box
                backgroundColor={{ base: 'rgb(96,135,135,0.9)', lg: 'initial' }}
                position="absolute"
                bottom={{ base: '20px', lg: '0' }}
                left={{ base: 'none', lg: '0' }}
                right={{ base: '0', lg: 'none' }}
                w={{ base: '40%', lg: '100%' }}
                p={[2, 4]}
                _groupHover={{
                  lg: {
                    backgroundColor: 'rgb(96,135,135,0.95)',
                  },
                }}
                transition="all .5s ease-in-out"
              >
                <Heading
                  size="xl"
                  fontSize={{ base: 'md', lg: '3xl' }}
                  fontFamily="'Advent Pro', sans-serif;"
                >
                  {`${cat.strCategory}`}
                </Heading>
              </Box>
            </Box>
          )) : ''}
        </Masonry>
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
