import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Masonry from 'react-masonry-css';
import {
  Box,
  Text,
  Heading,
  StackDivider,
  VStack,
  Fade,
  // Grid,
  GridItem,
} from '@chakra-ui/react';
import Separator from './Separator';
import { toggleRecipeStep, toggleRecipeIngredient } from '../redux/actions';

const RecipeContainer = (args) => {
  const { toggleRecipeIngredient, toggleRecipeStep, props } = args;
  const { match: { params: { id: currentMealId } } } = props;
  const { recipes: { mobileCards } } = props;
  const currentRecipeId = currentMealId;
  const { recipes: { byId: { [currentRecipeId]: currentRecipe } } } = props;

  if (mobileCards.recipe) {
    return (
      <Fade in={mobileCards.recipe} unmountOnExit>
        <Box
          h="100%"
        >
          <Heading
            textAlign="center"
            borderRadius="20px"
            color="white"
            fontFamily="'Advent Pro', sans-serif;"
            textDecor="underline"
            mb={{ base: 6 }}
          >
            {currentRecipe.strMeal}
          </Heading>
          <Heading
            size="md"
            textAlign="center"
            borderRadius="20px"
            color="white"
            fontFamily="'Cedarville Cursive', cursive"
            mb={{ base: 6 }}
            opacity="0.5"
          >
            {`${currentRecipe.strArea} Cuisine`}
          </Heading>
          <VStack
            divider={<StackDivider borderColor="gray.200" />}
            spacing={6}
            align="stretch"
            justify="space-between"
          >
            {currentRecipe.steppedInstructions.map((step) => (
              <Text
                key={step.instructionId}
                color="white"
                whiteSpace="pre-wrap"
                fontFamily="'Open Sans', sans-serif;"
                onClick={() => toggleRecipeStep(currentRecipe, step, step.isDone)}
              >
                {step.instruction.length > 1 ? `${step.instructionId}. ${step.instruction}` : '' }
              </Text>
            ))}
          </VStack>
        </Box>
      </Fade>
    );
  }

  if (mobileCards.ingredients) {
    return (
      <Fade in={!!mobileCards.ingredients}>
        <Box>
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
                border={ing.isDone ? '1 px solid rgb(185,234,170)' : '1px solid white'}
                color="white"
                marginBottom="10px"
                whiteSpace="pre-wrap"
                fontFamily="'Open Sans', sans-serif;"
                onClick={() => toggleRecipeIngredient(currentRecipe, ing, ing.isDone)}
              >
                <Box
                  boxShadow="0 0 1rem 0 rgba(0, 0, 0, .5)"
                  // backgroundColor="rgba(255, 255, 255, .1)"
                  style={{ backdropFilter: 'blur(2px)' }}
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
      </Fade>
    );
  }

  if (mobileCards.tools) {
    return 'Tools';
  }

  return 'Something went terribly wrong. :\'(';
};

RecipeContainer.defaultProps = {
  recipes: {},
  match: {},
};

RecipeContainer.propTypes = {
  props: PropTypes.objectOf(PropTypes.any).isRequired,
  recipes: PropTypes.objectOf(PropTypes.any),
  match: PropTypes.objectOf(PropTypes.any),
};

const mapDispatch = {
  toggleRecipeStep,
  toggleRecipeIngredient,
};

export default connect(null, mapDispatch)(RecipeContainer);
