import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import Home from './pages/Home';
import Categories from './pages/Categories';
import Recipes from './pages/Recipes';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => (
  <>
    <Router>
      <Navbar />
      <Box
        d="flex"
        flexDir="column"
        alignItems="stretch"
        justifyContent="center"
        height="100vh"
        paddingTop={{ base: 16, lg: 24 }}
        paddingBottom={{ base: 8, lg: '48px' }}
      >
        <Switch>
          <Route path="/the-food-compendium/" exact component={Home} />
          <Route path="/the-food-compendium/categories/:category" exact component={Categories} />
          <Route path="/the-food-compendium/recipes/:id" exact component={Recipes} />
        </Switch>
      </Box>
      <Footer />
    </Router>
  </>
);

export default App;
