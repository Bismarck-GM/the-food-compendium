import React from 'react';
import PropTypes from 'prop-types';
import Masonry from 'react-masonry-css';
import {
  Box,
  Heading,
  GridItem,
} from '@chakra-ui/react';
import IngredientFilter from './IngredientFilter';

const IngredientList = ({ ingArray, handleFilter, currentFilter }) => {
  const filteredIngredients = currentFilter.length > 1 || currentFilter[0] === 'All' ? ingArray : ingArray.filter(
    (ingredient) => ingredient.strType === currentFilter[0],
  );
  let mBreak = 16;
  if (filteredIngredients.length <= 20) {
    mBreak = 6;
  } else {
    mBreak = 10;
  }
  const masonryBreakPoints = {
    768: 5,
    2000: [mBreak],
  };
  return (
    <Box
      w="100%"
    >
      <Heading
        textAlign="center"
        borderRadius="20px"
        color="white"
        fontFamily="'Advent Pro', sans-serif;"
        textDecor="underline"
        mb={{ base: 6 }}
      >
        Ingredients List
      </Heading>
      <IngredientFilter
        ingArray={ingArray}
        clickHandler={handleFilter}
        currentFilter={currentFilter}
      />
      <Masonry
        breakpointCols={masonryBreakPoints}
        className="masonry-ingredients"
        columnClassName="masonry-ingredients_column"
      >
        {filteredIngredients.map((ingredient) => (
          <GridItem
            key={ingredient.idIngredient}
            border="1px solid white"
            color="white"
            p={3}
            textAlign="center"
            marginBottom="6px"
          >
            {ingredient.strIngredient}
          </GridItem>
        ))}
      </Masonry>
    </Box>
  );
};

IngredientList.propTypes = {
  ingArray: PropTypes.arrayOf(PropTypes.any).isRequired,
  handleFilter: PropTypes.func.isRequired,
  currentFilter: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default IngredientList;
