import { useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Skeleton,
  Stack,
  Button,
} from '@chakra-ui/react';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchRecipeById,
  showRecipeCard,
  showIngredientCard,
  showToolsCard,
  recipeLoadingTrue,
  recipeLoadingFalse,
} from '../redux/actions';
import RecipesContainer from '../components/RecipesContainer';

const Recipes = (props) => {
  const dispatch = useDispatch();
  const recipes = useSelector((state) => state.recipes);
  const {
    loading,
    error,
    byId,
    mobileCards,
  } = recipes;

  const { match: { params: { id: currentMealIdURL } } } = props;

  useEffect(() => {
    if (!Object.keys(byId).includes(currentMealIdURL)) {
      dispatch(fetchRecipeById(currentMealIdURL));
    } else {
      dispatch(recipeLoadingFalse());
    }
    return () => {
      dispatch(recipeLoadingTrue());
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
          !loading ? (
            <RecipesContainer
              mobileCards={mobileCards}
              currentRecipe={recipes.byId[currentMealIdURL]}
            />
          )
            : ''
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
          onClick={() => dispatch(showRecipeCard())}
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
          onClick={() => dispatch(showIngredientCard())}
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
          onClick={() => dispatch(showToolsCard())}
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
  match: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Recipes;
