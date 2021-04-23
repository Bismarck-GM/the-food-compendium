import { useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Skeleton,
  Stack,
  Button,
} from '@chakra-ui/react';
import { connect } from 'react-redux';
import {
  fetchRecipeById,
  showRecipeCard,
  showIngredientCard,
  showToolsCard,
  recipeLoadingTrue,
  recipeLoadingFalse,
} from '../redux/actions';
import RecipeContainer from '../components/RecipeContainer';

const Recipes = (props) => {
  const {
    recipes,
    fetchRecipeById,
    showRecipeCard,
    showIngredientCard,
    showToolsCard,
    recipeLoadingTrue,
    recipeLoadingFalse,
  } = props;

  const {
    loading,
    error,
    byId,
    mobileCards,
  } = recipes;

  const { match: { params: { id: currentMealIdURL } } } = props;

  useEffect(() => {
    if (!Object.keys(byId).includes(currentMealIdURL)) {
      fetchRecipeById(currentMealIdURL);
    } else {
      recipeLoadingFalse();
    }
    return () => {
      recipeLoadingTrue();
    };
  }, []);

  if (error) {
    return `Something went wrong. Error: ${error}`;
  }

  return (
    <Box
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
        background="linear-gradient(0deg, rgba(1,1,1,1) 0%, rgba(84,84,84,1) 100%)"
      >
        {
          byId[currentMealIdURL] ? <RecipeContainer props={props} /> : ''
        }
      </Skeleton>
      <Stack
        display={{ base: 'flex', lg: 'none' }}
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
          display="none"
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
  recipeLoadingTrue: PropTypes.func.isRequired,
  recipeLoadingFalse: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  recipes: state.recipes,
});

const mapDispatch = {
  fetchRecipeById,
  showRecipeCard,
  showIngredientCard,
  showToolsCard,
  recipeLoadingTrue,
  recipeLoadingFalse,
};

export default connect(mapStateToProps, mapDispatch)(Recipes);
