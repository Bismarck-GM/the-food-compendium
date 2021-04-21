import React from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Text,
  Heading,
  StackDivider,
  VStack,
  Fade,
} from '@chakra-ui/react';

export default function RecipeContainer({ props }) {
  const { match: { params: { id: currentMealId } } } = props;
  const { recipes: { mobileCards } } = props;
  const currentRecipeId = currentMealId;
  const { recipes: { allRecipes: { [currentRecipeId]: currentRecipe } } } = props;

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
          <VStack
            divider={<StackDivider borderColor="gray.200" />}
            spacing={6}
            align="stretch"
            justify="space-between"
          >
            {currentRecipe.steppedInstructions.map((i) => (
              <Text
                key={i.instructionId}
                color="white"
                whiteSpace="pre-wrap"
                fontFamily="'Open Sans', sans-serif;"
              >
                {i.instruction.length > 1 ? `${i.instructionId}. ${i.instruction}` : '' }
              </Text>
            ))}
          </VStack>
        </Box>
      </Fade>
    );
  }

  if (mobileCards.ingredients) {
    return (
      <Fade in={!!mobileCards.ingredients} unmountOnExit>
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
            Ingredients
          </Heading>
        </Box>
      </Fade>
    );
  }

  if (mobileCards.tools) {
    return 'Tools';
  }
}

RecipeContainer.defaultProps = {
  recipes: {},
  match: {},
};

RecipeContainer.propTypes = {
  props: PropTypes.objectOf(PropTypes.any).isRequired,
  recipes: PropTypes.objectOf(PropTypes.any),
  match: PropTypes.objectOf(PropTypes.any),
};
