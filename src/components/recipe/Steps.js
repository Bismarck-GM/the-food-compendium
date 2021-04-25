import React from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Text,
  Heading,
  StackDivider,
  VStack,
  Icon,
  GridItem,
} from '@chakra-ui/react';
import { TiTick } from 'react-icons/ti';
import Header from './Header';
import SubHeader from './SubHeader';

const Steps = ({ currentRecipe, isDesktop, toggleRecipeStep }) => {
  if (isDesktop) {
    return (
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
          spacing={3}
          align="stretch"
          justify="space-between"
        >
          {currentRecipe.steppedInstructions.map((step) => (
            <GridItem
              key={step.instructionId}
              position="relative"
              // border={step.isDone ? '1 px solid rgb(185,234,170)' : 'none'}
              borderRadius={step.isDone ? 'xl' : ''}
              transition="border-radius 0.5s 0s ease"
              px="5%"
              color="white"
              backgroundColor={step.isDone ? 'rgb(185,234,170, 0.3)' : null}
              marginBottom="10px"
              whiteSpace="pre-wrap"
              fontFamily="'Open Sans', sans-serif;"
              onClick={() => toggleRecipeStep(currentRecipe.idMeal, step, step.isDone)}
            >
              {step.instruction.length > 1 ? (
                <Box py={6}>
                  <Text
                    display="inline-block"
                    paddingLeft={4}
                  >
                    {`Step ${step.instructionId}`}
                    {step.isDone ? (
                      <Icon
                        as={TiTick}
                        position="absolute"
                        top="-15px"
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
                    // textAlign="center"
                    fontWeight="medium"
                    paddingLeft={10}
                  >
                    {step.instruction}
                  </Text>
                </Box>
              ) : null }
            </GridItem>
          ))}
        </VStack>
      </Box>
    );
  }
  return (
    <>
      <Header mealTitle={currentRecipe.strMeal} />
      <SubHeader area={currentRecipe.strArea} />
      <VStack
        divider={<StackDivider borderColor="gray.200" />}
        spacing={6}
        align="stretch"
        justify="space-between"
      >
        {currentRecipe.steppedInstructions.map((step) => (
          <Box
            color="white"
            position="relative"
            key={step.instructionId}
            onClick={() => toggleRecipeStep(currentRecipe.idMeal, step, step.isDone)}
            px={{ base: 6, md: 6 }}
            _first={{ marginTop: 6 }}
          >
            {step.isDone ? (
              <Icon
                as={TiTick}
                position="absolute"
                bottom="-20px"
                right="0"
                w={8}
                h={8}
                zIndex="10"
                transition="background 3s 0s ease"
              />
            ) : null}
            <Text
              whiteSpace="pre-wrap"
              fontFamily="'Open Sans', sans-serif;"
              textDecor={step.isDone ? 'line-through' : 'none'}
              transition="all .4s ease-in-out"
            >
              {step.instruction.length > 1 ? `${step.instructionId}. ${step.instruction}` : null }
            </Text>
          </Box>
        ))}
      </VStack>
    </>
  );
};

Steps.propTypes = {
  currentRecipe: PropTypes.objectOf(PropTypes.any).isRequired,
  toggleRecipeStep: PropTypes.func.isRequired,
  isDesktop: PropTypes.bool.isRequired,
};

export default Steps;
