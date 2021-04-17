import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Categories from './pages/Categories';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => (
  <>
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/categories/:category" exact component={Categories} />
      </Switch>
      <Footer />
    </Router>
  </>
);

export default App;
