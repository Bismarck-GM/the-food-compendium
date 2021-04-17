import React from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Box,
  Flex,
  HStack,
  IconButton,
  // Button,
  // Menu,
  // MenuList,
  // MenuItem,
  useDisclosure,
  useColorModeValue,
  Stack,
  // MenuButton,
  Heading,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

const Links = ['Home', 'Projects', 'Team'];

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  // const { allCategories, currentFilter } = categories;
  return (
    <>
      <Box bg={useColorModeValue('rgb(167,199,231)', 'rgb(167,199,231)')} px={4} position="fixed" w="100%" zIndex="100">
        <Flex h={16} alignItems="center" justifyContent="space-between">
          <IconButton
            size="md"
            variant="outline"
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label="Open Menu"
            display={{ md: !isOpen ? 'none' : 'inherit' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems="center">
            <Box>
              <Heading fontFamily="'Butterfly Kids', cursive" size="lg">
                The
                food
                compendium
              </Heading>
            </Box>
            <HStack
              as="nav"
              spacing={4}
              display={{ base: 'none', md: 'flex' }}
            >
              {Links.map((link) => (
                <Link to="/" key={link}>{link}</Link>
              ))}
            </HStack>
          </HStack>
          {/* <Flex alignItems="center">
            <Menu>
              <MenuButton
                as={Button}
                variant="outline"
                cursor="pointer"
              >
                {currentFilter}
                <TriangleDownIcon
                  size="sm"
                />
              </MenuButton>
              <MenuList zIndex="101">
                { allCategories ? allCategories.map((cat) => (
                  <Link to={`categories/${cat.strCategory}`} key={cat.idCategory}>
                    <MenuItem key={cat.idCategory}>{cat.strCategory}</MenuItem>
                  </Link>
                )) : ''}
              </MenuList>
            </Menu>
          </Flex> */}
        </Flex>

        {isOpen ? (
          <Box pb={4}>
            <Stack as="nav" spacing={4}>
              {Links.map((link) => (
                <Link to="/" key={link}>{link}</Link>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
};

// Navbar.propTypes = {
//   categories: PropTypes.objectOf(PropTypes.any).isRequired,
// };

const mapStateToProps = (state) => ({
  categories: state.categories,
});

export default connect(mapStateToProps)(Navbar);
