import { useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Skeleton,
  Stack,
  Button,
  // Flex,
} from '@chakra-ui/react';
import { connect } from 'react-redux';
import {
  fetchRecipeById,
  showRecipeCard,
  showIngredientCard,
  showToolsCard,
} from '../redux/actions';
import RecipeContainer from '../components/RecipeContainer';

const Recipes = (props) => {
  const {
    recipes,
    fetchRecipeById,
    showRecipeCard,
    showIngredientCard,
    showToolsCard,
  } = props;

  const {
    loading,
    error,
    byId,
    mobileCards,
  } = recipes;

  const { match: { params: { id: currentMealId } } } = props;

  useEffect(() => {
    fetchRecipeById(currentMealId);
  }, []);
  console.log(props, byId, error);
  return (
    <Box
      bgGradient={{ lg: 'linear(0deg, rgba(213,213,213,1) 0%, rgba(246,246,246,1) 100%);' }}
      overflowY="scroll"
    >

      <Skeleton
        isLoaded={!loading}
        minWidth="100%"
        minHeight={loading ? { base: 'calc(100vh - 88px)', lg: 'calc(100vh - 144px)' } : { base: 'calc(100vh - 96px)', lg: 'calc(100vh - 144px)' }}
        margin={{ base: '0' }}
        px={{ base: 3, lg: 6 }}
        paddingTop={{ base: 3, lg: 6 }}
        paddingBottom={{ base: 6, lg: 6 }}
        display={{ lg: 'flex' }}
        justifyContent={{ lg: 'center' }}
        position="relative"
        backgroundColor="rgb(0,0,0,0.4)"
        _after={{
          content: '""',
          bgGradient: 'linear(to-r, red.500, yellow.500)',
          bgSize: 'cover',
          bgRepeat: 'no-repeat',
          opacity: '0.7',
          top: '0',
          left: '0',
          bottom: '0',
          right: '0',
          position: 'absolute',
          zIndex: '-1',
        }}
      >
        {
          byId[currentMealId] ? <RecipeContainer props={props} /> : ''
        }
      </Skeleton>
      <Stack
        width="100vw"
        direction="row"
        position="absolute"
        bottom={{ base: 8, lg: 12 }}
        zIndex="11"
      >
        <Button
          flex="1 1 0"
          colorScheme="orange"
          isActive={!!mobileCards.recipe}
          onClick={showRecipeCard}
          _focus={{
            outline: 0,
          }}
        >
          Steps
        </Button>
        <Button
          flex="1 1 0"
          colorScheme="orange"
          isActive={!!mobileCards.ingredients}
          onClick={showIngredientCard}
          _focus={{
            outline: 0,
          }}
        >
          Ingredients
        </Button>
        <Button
          flex="1 1 0"
          colorScheme="orange"
          isActive={!!mobileCards.tools}
          onClick={showToolsCard}
          _focus={{
            outline: 0,
          }}
        >
          Tools
        </Button>
      </Stack>
    </Box>
  );
};

Recipes.propTypes = {
  recipes: PropTypes.objectOf(PropTypes.any).isRequired,
  match: PropTypes.objectOf(PropTypes.any).isRequired,
  fetchRecipeById: PropTypes.func.isRequired,
  showRecipeCard: PropTypes.func.isRequired,
  showIngredientCard: PropTypes.func.isRequired,
  showToolsCard: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  recipes: state.recipes,
});

const mapDispatch = {
  fetchRecipeById,
  showRecipeCard,
  showIngredientCard,
  showToolsCard,
};

export default connect(mapStateToProps, mapDispatch)(Recipes);
