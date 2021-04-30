import React from 'react';
import { Flex, Image } from '@chakra-ui/react';

const Footer = () => (
  <Flex
    justifyContent="center"
    height={{ base: 8, lg: 12 }}
    backgroundColor="black"
    color="white"
    position="fixed"
    bottom="0"
    w="100vw"
    fontFamily="'Advent Pro', sans-serif;"
  >
    <Image src={`${process.env.PUBLIC_URL}/BismarckGMLogowhite-04.png`} alt="footer-logo" />
  </Flex>
);

export default React.memo(Footer);
