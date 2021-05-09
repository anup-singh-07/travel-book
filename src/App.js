import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Layout from './components/Layout/Layout.js';
import Home from './containers/Home/Home.js';
import Products from './containers/Products/Products.js';
import Services from './containers/Services/Services.js';
import SignUp from './containers/SignUp/SignUp.js';
import Checkout from './containers/Checkout/checkout.js';
import './App.css';

function App() {

  let routes = (
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/home' exact component={Home} />
      <Route path='/products' exact component={Products} />
      <Route path='/services' exact component={Services} />
      <Route path='/checkout' exact component={Checkout}/>
      <Route path='/sign-up' exact component={SignUp} />
    </Switch>
  )
  return (
    <div>
      <Layout />
      {routes}
    </div>
  )
}

export default App;
