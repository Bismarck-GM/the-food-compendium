import React from 'react';
import PropTypes from 'prop-types';
import { Select, Flex, Heading } from '@chakra-ui/react';

export default function IngredientFilter({ ingArray, clickHandler, currentFilter }) {
  const categories = ['All'];
  ingArray.filter((ing) => {
    const i = categories.findIndex((x) => x === ing.strType);
    if (i <= -1) {
      categories.push(ing.strType);
    }
    return null;
  });
  const selectedFilter = currentFilter.length > 1 ? 'All' : currentFilter[0];

  const changeHandle = (e) => {
    if (e.target.value === 'All') {
      clickHandler(categories.filter((cat) => cat !== 'All'));
    } else {
      clickHandler([e.target.value]);
    }
  };

  return (
    <Flex
      w="100%"
      alignItems="center"
      justifyContent="center"
      mb={{ base: '20px', lg: '30px' }}
    >
      <Heading
        color="white"
        fontFamily="'Advent Pro', sans-serif;"
        marginRight={{ base: '10px', lg: '20px' }}
      >
        Filter:
      </Heading>
      <Select
        value={selectedFilter}
        id="filter"
        variant="flushed"
        color="white"
        fontFamily="'Advent Pro', sans-serif;"
        bgGradient="linear(to-r, yellow.500, red.500)"
        borderColor="tomato"
        borderRadius="5px"
        fontSize={{ base: '20px', lg: '30px' }}
        style={{ textAlignLast: 'center', textAling: 'center' }}
        w={{ base: '80%', lg: '30%' }}
        onChange={changeHandle}
      >
        {categories.map((cat) => (
          <option
            value={cat}
            key={cat}
            style={{ backgroundColor: 'rgb(83,83,83)', fontSize: '20px' }}
          >
            {cat}
          </option>
        ))}
      </Select>
    </Flex>
  );
}

IngredientFilter.propTypes = {
  ingArray: PropTypes.arrayOf(PropTypes.any).isRequired,
  clickHandler: PropTypes.func.isRequired,
  currentFilter: PropTypes.arrayOf(PropTypes.any).isRequired,
};
