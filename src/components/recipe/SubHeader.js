import React from 'react';
import PropTypes from 'prop-types';
import { Heading } from '@chakra-ui/react';

const SubHeader = ({ area }) => (
  <Heading
    fontSize={{ base: 'md', lg: 'lg' }}
    textAlign="center"
    borderRadius="20px"
    color="white"
    fontFamily="'Cedarville Cursive', cursive"
    mb={{ base: 6 }}
    opacity="0.6"
  >
    {`${area} Cuisine`}
  </Heading>
);

SubHeader.propTypes = {
  area: PropTypes.string.isRequired,
};

export default React.memo(SubHeader);
