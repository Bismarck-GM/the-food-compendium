import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@chakra-ui/react';

export default function Separator({ text }) {
  return (
    <Box
      display="flex"
      alignItems="center"
      textAlign="center"
      _before={{
        content: "''",
        flex: 1,
        borderBottom: '1px solid #fff',
        marginRight: '.5em',
        marginLeft: '.5em',
      }}
      _after={{
        content: "''",
        flex: 1,
        borderBottom: '1px solid #fff',
        marginLeft: '.5em',
        marginRight: '.5em',
      }}
    >
      {text}
    </Box>
  );
}

Separator.propTypes = {
  text: PropTypes.string.isRequired,
};
