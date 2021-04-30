import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  Box,
  Skeleton,
  Image,
  Heading,
} from '@chakra-ui/react';
import Masonry from 'react-masonry-css';
import {
  fetchCategories,
  categoriesLoading,
  categoriesLoadingFalse,
} from '../redux/actions';

function Home() {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories);
  const { allCategories, error, loading } = categories;
  const dayPhrase = 'What would you like to eat today?';
  const [loaded, setLoaded] = useState(false);
  const masonryBreakPoints = {
    768: 1,
    2000: 3,
  };

  useEffect(() => {
    if (allCategories === null) {
      dispatch(fetchCategories());
    } else {
      dispatch(categoriesLoadingFalse());
    }
    return () => {
      dispatch(categoriesLoading());
    };
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
        {dayPhrase}
      </Heading>
      <Skeleton
        isLoaded={!loading}
        startColor="rgba(1,1,1,1)"
        endColor="rgba(205,205,205,1)"
        px={{ base: 0, md: 3, xl: '10%' }}
        py={{ base: 0, lg: 6 }}
        position="relative"
        margin={{ base: '0', lg: '0 auto' }}
        minWidth="100%"
        minHeight={loading ? { base: 'calc(100vh - 88px)', lg: 'calc(100vh - 144px)' } : { lg: 'calc(100vh - 144px)' }}
        background="linear-gradient(0deg, rgba(1,1,1,1) 0%, rgba(117,117,117,1) 100%)"
      >
        <Masonry
          breakpointCols={masonryBreakPoints}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
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
            >
              <Link
                to={`/the-food-compendium/categories/${cat.strCategory}`}
              >
                {loaded ? null : (
                  <Skeleton
                    isLoaded={loaded}
                    display="block"
                    minH="400px"
                    minW="400px"
                  />
                )}
                <Image
                  display={loaded ? 'block' : 'none'}
                  src={`${process.env.PUBLIC_URL}/images/${cat.strCategory}.jpg`}
                  alt={cat.strCategory}
                  w="100%"
                  onLoad={
                    allCategories.length === Number(cat.idCategory)
                      ? () => setLoaded(true)
                      : null
                  }
                />
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
              </Link>
            </Box>
          )) : ''}
        </Masonry>
      </Skeleton>
    </Box>
  );
}

export default Home;
