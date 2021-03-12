import React from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import { Container } from 'react-bootstrap';
import Footer from './components/Footer';
import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Container>
          <Route path='/' exact component={HomeScreen}/>
          <Route path='/product/:id' exact component={ProductScreen}/>
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
