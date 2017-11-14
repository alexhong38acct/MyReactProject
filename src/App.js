import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

//  components
import Header from './components/Header';
import Home from './components/Home';
import SimpleSlider from './components/SimpleSlider';

import Product from './components/Product';
import Products from './components/Products';
import Contact from './components/Contact';
import Footer from './components/Footer';

import sampleProducts from './sample-products.js';

//  includes
import './assets/css/main.min.css';
import './assets/css/slick.min.css';


class App extends Component {
  constructor() {
    super();

    //  getinitialState
    this.state = {
      product: {...sampleProducts}
    };
  }

  render() {
    return (
      <Router>
      <div className="App">
        <Header />


        <SimpleSlider />

        { /* Dump sample-products.js data */
          Object
            .keys(this.state.product)
            .map(key => <Product key={key} details={this.state.product[key] }/>)
        }

        <Contact />
        {/*
          <Route exact path='/' component={Home} />
          <Route exact path='/Products' component={Products} />
          <Route exact path='/Contact' component={Contact} />
        */}
        <Footer />
      </div>
      </Router>
    );
  }
}

export default App;
