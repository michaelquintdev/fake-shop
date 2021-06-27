// Imports
import React, { useEffect, useState } from 'react'
import {Route, Link, Switch} from 'react-router-dom'
import axios from 'axios'
import Shop from './components/Shop'
import Home from './components/Home'
import Item from './components/Item'
import Cart from './components/Cart'

const initialFormValues = {
    firstName: '',
    lastName: '',
    address: '',
    zipCode: 0,
    card: 0,
    code: 0,
}

function App() {
  // State, should be managed inside of Redux eventually.
  const [data, setData] = useState([])
  const [cart, setCart] = useState([])
  const [price, setPrice] = useState(0)
  const [formValues, setFormValues] = useState(initialFormValues)

  // Calling API (in the real world would be a backend endpoint) to set data
  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(res => {
        setData(res.data)
      })
      .catch(error => {
        console.log(error);
      })
  }, [])
  useEffect(() => {
    const newPrice = cart.reduce(function(accumulator, currentValue) {
      return accumulator + currentValue.price;
    }, 0)
    setPrice(newPrice)
  }, [cart])
    

    // Functions
    const addToCart = (product) =>{
      setCart([...cart, product])
    }

    const updateForm = (inputName, inputValue) => {
      setFormValues({...formValues, [inputName]: inputValue})
    }

    // Posting credit card information by adding a new 'buy ticket' to a mock backend.
    const submit = () => {}

  return (
    <div className="App">

      {/* Navbar */}
      <nav>
        <h1>Fake Store</h1>
        <div className = 'nav-links'>
          <Link to = '/'>Home</Link>
          <Link to = '/shop'>Shop</Link>
          <Link to = '/cart'>Cart ({cart.length})</Link>
        </div>
      </nav>

      {/* Switches */}
      <Switch>
        {/* Parameter in Item.js listed below */}
        <Route path = '/shop/:itemID'>
          <Item data = {data} addToCart = {addToCart}/>
        </Route>
        <Route exact path = '/cart'>
          <Cart cart = {cart} submit = {submit} update = {updateForm} price = {price}/>
        </Route>
        <Route exact path = '/shop'>
          <Shop data = {data}/>
        </Route>
        <Route exact path = '/' component = {Home}/>
      </Switch>
    </div>
  );
}

export default App;
