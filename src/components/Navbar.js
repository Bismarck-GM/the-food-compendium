import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  Text,
  Heading,
  Link as Anchor,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { FaGithub, FaHome } from 'react-icons/fa';

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box bgGradient="linear(to-r, red.500, yellow.500)" px={4} position="fixed" w="100%" zIndex="100" color="white" top="0">
        <Flex h={{ base: 16, lg: 24 }} alignItems="center" justifyContent="space-between">
          <IconButton
            size="md"
            backgroundColor="inherit"
            outline="none"
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label="Open Menu"
            display={{ md: !isOpen ? 'none' : 'inherit' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems="center">
            <Box>
              <Heading display={{ base: 'none', md: 'block' }} fontFamily="'Butterfly Kids', cursive" size="2xl">
                The
                food
                compendium
              </Heading>
              <Heading display={{ base: 'block', md: 'none' }} letterSpacing="3px" fontFamily="'Cedarville Cursive', cursive" size="2xl">
                t.f.c.
              </Heading>
            </Box>
            <HStack
              as="nav"
              spacing={4}
              display={{ base: 'none', md: 'flex' }}
            >
              <Link to="/" size="lg">
                <FaHome style={{ display: 'inline', margin: '0 5px' }} />
                Home
              </Link>
              <Anchor href="https://github.com/Bismarck-GM/" isExternal>
                <FaGithub style={{ display: 'inline', margin: '0 5px' }} />
                My Github
              </Anchor>
            </HStack>
          </HStack>
        </Flex>
        {isOpen ? (
          <Drawer onClose={onClose} isOpen={isOpen} size="full" placement="bottom">
            <DrawerOverlay>
              <DrawerContent bgGradient="linear(to-r, red.500, yellow.500)">
                <DrawerHeader>
                  <CloseIcon onClick={isOpen ? onClose : onOpen} />
                </DrawerHeader>
                <DrawerBody display="flex" flexDir="column" justifyContent="center" alignItems="center">
                  <Link to="/" onClick={isOpen ? onClose : onOpen}>
                    <Text fontSize="40px" textDecor="underline">
                      <FaHome style={{ display: 'inline', margin: '0 5px' }} />
                      Home
                    </Text>
                  </Link>
                  <Anchor href="https://github.com/Bismarck-GM/" isExternal>
                    <Text fontSize="40px" textDecor="underline">
                      <FaGithub style={{ display: 'inline', margin: '0 5px' }} />
                      My Github
                    </Text>
                  </Anchor>
                </DrawerBody>
              </DrawerContent>
            </DrawerOverlay>
          </Drawer>

        ) : null}
      </Box>
    </>
  );
};

const mapStateToProps = (state) => ({
  categories: state.categories,
});

export default connect(mapStateToProps)(Navbar);
