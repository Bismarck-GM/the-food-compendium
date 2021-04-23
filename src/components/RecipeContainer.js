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
  Icon,
  GridItem,
  Grid,
} from '@chakra-ui/react';
import { TiTick } from 'react-icons/ti';
import Separator from './Separator';
import useWindowDimensions from './WindowDimension';
import { toggleRecipeStep, toggleRecipeIngredient } from '../redux/actions';

const RecipeContainer = (args) => {
  const { toggleRecipeIngredient, toggleRecipeStep, props } = args;
  const { match: { params: { id: currentMealId } } } = props;
  const { recipes: { mobileCards } } = props;
  const currentRecipeId = currentMealId;
  const { recipes: { byId: { [currentRecipeId]: currentRecipe } } } = props;

  const doneColors = [
    'rgba(141,212,178,0.5)',
    'rgba(156,225,168,0.5)',
    'rgba(185,234,170,0.5)',
    'rgba(216,244,175,0.5)',
  ];

  const randomDoneColor = () => (doneColors[Math.floor(Math.random() * doneColors.length)]);

  const { width } = useWindowDimensions();

  if (width >= 992) {
    return (
      <Box>
        <Heading
          textAlign="center"
          borderRadius="20px"
          color="white"
          fontFamily="'Advent Pro', sans-serif;"
          textDecor="underline"
          mb={{ base: 4 }}
        >
          {currentRecipe.strMeal}
        </Heading>
        <Heading
          size="lg"
          textAlign="center"
          borderRadius="20px"
          color="white"
          fontFamily="'Cedarville Cursive', cursive"
          mb={{ base: 6 }}
          opacity="0.6"
        >
          {`${currentRecipe.strArea} Cuisine`}
        </Heading>
        <Grid
          templateColumns="1fr 1fr"
          gap={12}
          position="relative"
        >
          <Box
            h="100%"
            position="sticky"
            top="0"
          >
            <Heading
              textAlign="center"
              borderRadius="20px"
              color="white"
              fontFamily="'Advent Pro', sans-serif;"
              textDecor="underline"
              mb={{ base: 8 }}
            >
              Steps
            </Heading>
            <VStack
              spacing={6}
              align="stretch"
              justify="space-between"
            >
              {currentRecipe.steppedInstructions.map((step) => (
                <GridItem
                  key={step.instructionId}
                  position="relative"
                  border={step.isDone ? '1 px solid rgb(185,234,170)' : 'none'}
                  borderRadius={step.isDone ? 'xl' : ''}
                  transition="border-radius 0.5s 0s ease"
                  color={step.isDone ? 'white' : 'white'}
                  backgroundColor={step.isDone ? 'rgb(185,234,170, 0.3)' : null}
                  marginBottom="10px"
                  whiteSpace="pre-wrap"
                  fontFamily="'Open Sans', sans-serif;"
                  onClick={() => toggleRecipeStep(currentRecipe, step, step.isDone)}
                >
                  {step.instruction.length > 1 ? (
                    <>
                      <Text
                        display="inline-block"
                      >
                        {`Step ${step.instructionId}`}
                        {step.isDone ? (
                          <Icon
                            as={TiTick}
                            position="absolute"
                            right="-20px"
                            w={12}
                            h={12}
                            zIndex="10"
                            transition="background 1.5s 0s ease"
                          />
                        ) : null}
                      </Text>
                      <Text
                        whiteSpace="pre-wrap"
                        fontFamily="'Open Sans', sans-serif;"
                        fontSize={24}
                        textAlign="center"
                        fontWeight="medium"
                      >
                        {step.instruction}
                      </Text>
                    </>
                  ) : null }
                </GridItem>
              ))}
            </VStack>
          </Box>
          <Box
            position="sticky"
            top="0"
            h={1}
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
                  border={ing.isDone ? '1 px solid rgb(185,234,170)' : '1px solid white'}
                  borderRadius={ing.isDone ? 'xl' : ''}
                  transition="border-radius 0.5s 0s ease"
                  position="relative"
                  color="white"
                  marginBottom="10px"
                  whiteSpace="pre-wrap"
                  fontFamily="'Open Sans', sans-serif;"
                  onClick={() => toggleRecipeIngredient(currentRecipe, ing, ing.isDone)}
                >
                  {ing.isDone ? (
                    <Icon
                      as={TiTick}
                      position="absolute"
                      top="-14px"
                      right="-9px"
                      w={8}
                      h={8}
                      zIndex="10"
                      transition="background 1.5s 0s ease"
                    />
                  ) : ''}
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
        </Grid>
      </Box>
    );
  }

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
                textDecor={step.isDone ? 'line-through' : 'none'}
                transition="all .4s ease-in-out"
              >
                {step.instruction.length > 1 ? `${step.instructionId}. ${step.instruction}` : null }
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
                borderRadius={ing.isDone ? 'xl' : ''}
                transition="border-radius 0.5s 0s ease"
                position="relative"
                color="white"
                marginBottom="10px"
                whiteSpace="pre-wrap"
                fontFamily="'Open Sans', sans-serif;"
                onClick={() => toggleRecipeIngredient(currentRecipe, ing, ing.isDone)}
              >
                {ing.isDone ? (
                  <Icon
                    as={TiTick}
                    position="absolute"
                    top="-14px"
                    right="-9px"
                    w={8}
                    h={8}
                    zIndex="10"
                    transition="background 1.5s 0s ease"
                  />
                ) : ''}
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
