// Imports
import React, { useEffect, useState } from 'react'
import {Route, Link, Switch} from 'react-router-dom'
import axios from 'axios'
import Login from './components/Login'
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

  // Calculating total price based on when the cart changes values
  useEffect(() => {
    const newPrice = cart.reduce(function(accumulator, currentValue) {
      return accumulator + currentValue.price;
    }, 0)
    setPrice(newPrice.toFixed(2))
  }, [cart])
    

    // Functions
    const addToCart = (product) =>{
      setCart([...cart, { ...product }])
    }

    const removeFromCart = (itemToRemove) => {
      setCart(cart.filter((product) => product !== itemToRemove));
    }

    // updating the cart form 
    const updateForm = (inputName, inputValue) => {
      setFormValues({...formValues, [inputName]: inputValue})
    }

    // Posting credit card information by adding a new 'buy ticket' to a mock backend.
    const submit = () => {}

  return (
    <div className="App">

      {/* Navbar */}
      <div className = 'nav-container'>
          <div className = 'logo'>
            <Link to = '/' className = 'title'>MAQ</Link>
          </div>
          <div className = 'bar'>
            <Link to = '/' className = 'link'>Home</Link>
            <Link to = '/shop' className = 'link'>Shop</Link>
            <Link to = '/cart' className = 'link'>Cart({cart.length})</Link>
            <Link to = '/login' className = 'link'>Login</Link>
          </div>
      </div>

      {/* Switches */}
      <div className = 'main-body'>
        <Switch>
          {/* Parameter in Item.js listed below */}
          <Route path = '/shop/:itemID'>
            <Item data = {data} addToCart = {addToCart}/>
          </Route>
          <Route path = '/login'>
            <Login />
          </Route>
          <Route exact path = '/cart'>
            <Cart cart = {cart} submit = {submit} update = {updateForm} price = {price} removeFromCart = {removeFromCart}/>
          </Route>
          <Route exact path = '/shop'>
            <Shop data = {data}/>
          </Route>
          <Route exact path = '/' component = {Home}/>
        </Switch>
      </div>
    </div>
  );
}

export default App;
