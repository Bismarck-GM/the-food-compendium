import React from 'react';
import PropTypes from 'prop-types';
import Masonry from 'react-masonry-css';
import {
  Box,
  Text,
  Heading,
  Icon,
  GridItem,
} from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { TiTick } from 'react-icons/ti';
import { toggleRecipeIngredient } from '../../redux/actions';
import Separator from './Separator';

const Ingredients = ({ currentRecipe }) => {
  const dispatch = useDispatch();
  const doneColors = [
    'rgba(141,212,178,0.5)',
    'rgba(156,225,168,0.5)',
    'rgba(185,234,170,0.5)',
    'rgba(216,244,175,0.5)',
  ];

  const randomDoneColor = () => (doneColors[Math.floor(Math.random() * doneColors.length)]);

  return (
    <Box
      h={{ base: '', lg: 1 }}
      top={{ base: '', lg: '0' }}
      position={{ base: 'static', lg: 'sticky' }}
    >
      <Heading
        textAlign="center"
        borderRadius="20px"
        color="white"
        fontFamily="'Advent Pro', sans-serif;"
        textDecor="underline"
        mb={{ base: 6 }}
      >
        Ingredients
      </Heading>
      <Masonry
        breakpointCols={2}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {currentRecipe.ingredients.map((ing) => (
          <GridItem
            key={ing.id}
            border={ing.isDone ? '1px solid transparent' : '1px solid white'}
            borderRadius={ing.isDone ? 'xl' : ''}
            transition="border-radius 0.5s 0s ease"
            position="relative"
            color="white"
            marginBottom="10px"
            whiteSpace="pre-wrap"
            fontFamily="'Open Sans', sans-serif;"
            onClick={() => dispatch(toggleRecipeIngredient(currentRecipe.idMeal, ing, ing.isDone))}
          >

            <Icon
              visibility={ing.isDone ? 'visible' : 'hidden'}
              as={TiTick}
              position="absolute"
              top="-14px"
              right="-9px"
              w={8}
              h={8}
              zIndex="10"
              transition="fill 3s 3s ease"
              fill="white"
              fontWeight="bold"
            />

            <Box
              boxShadow={ing.isDone ? '0 0 1rem 0 rgba(0, 0, 0, .5)' : ''}
              backgroundColor={ing.isDone ? `${randomDoneColor()}` : ''}
              style={ing.isDone ? { backdropFilter: 'blur(2px)' } : {}}
              borderRadius={ing.isDone ? 'xl' : ''}
              transition="background 0.5s 0s ease, border-radius 0.5s 0s ease"
            >
              <Separator text={ing.measure} />
              <Text textAlign="center" fontSize="xl">
                {`${ing.ingredient}`}
              </Text>
            </Box>
          </GridItem>
        ))}
      </Masonry>
    </Box>
  );
};

Ingredients.propTypes = {
  currentRecipe: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Ingredients;
