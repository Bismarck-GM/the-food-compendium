import { useEffect } from 'react';
import {
  Box,
  Skeleton,
} from '@chakra-ui/react';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchIngredients,
  ingredientsLoadingTrue,
  ingredientsLoadingFalse,
  ingredientsChangeFilter,
} from '../redux/actions';
import IngredientList from '../components/IngredientList';

const Recipes = () => {
  const dispatch = useDispatch();
  const ingredientList = useSelector((state) => state.ingredients);
  const {
    loading,
    error,
    ingredients,
    filter,
  } = ingredientList;

  const handleFilterChange = (newFilter) => {
    dispatch(ingredientsChangeFilter(newFilter));
  };

  useEffect(() => {
    if (ingredients === null) {
      dispatch(fetchIngredients());
    } else {
      dispatch(ingredientsLoadingFalse());
    }
    return () => {
      dispatch(ingredientsLoadingTrue());
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
          ingredients === null
            ? '' : (
              <IngredientList
                ingArray={ingredients}
                handleFilter={handleFilterChange}
                currentFilter={filter}
              />
            )
        }
      </Skeleton>
    </Box>
  );
};

export default Recipes;
