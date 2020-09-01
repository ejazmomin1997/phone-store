import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar'
import ProductList from './Components/ProductList'
import Default from './Components/Default'
import Details from './Components/Details'
import Cart from './Components/Cart'
import {Switch,Route} from 'react-router-dom'
import Store from './Components/Store'
import Modal from './Components/Modal'


function App() {
  return (
    <React.Fragment>
      <Navbar></Navbar>
      <Switch>
      <Route exact path = "/" component = {ProductList}></Route>
        <Route path = "/details" component = {Details}></Route>
        <Route path = "/cart" component = {Cart}></Route>
        
        <Route component = {Default}></Route>
        
      </Switch>
      <Modal/>
      
     
     
    </React.Fragment>

   
  );
}

export default App;
