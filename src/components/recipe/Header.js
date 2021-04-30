import React from 'react';
import PropTypes from 'prop-types';
import { Heading } from '@chakra-ui/react';

const Header = ({ mealTitle }) => (
  <Heading
    textAlign="center"
    borderRadius="20px"
    color="white"
    fontFamily="'Advent Pro', sans-serif;"
    textDecor="underline"
    mb={{ base: 6, lg: 4 }}
  >
    {mealTitle}
  </Heading>
);

Header.propTypes = {
  mealTitle: PropTypes.string.isRequired,
};

export default React.memo(Header);
