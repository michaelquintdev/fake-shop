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

  // Calculating total price based on when the cart changes values
  useEffect(() => {
    const newPrice = cart.reduce(function(accumulator, currentValue) {
      return accumulator + currentValue.price;
    }, 0)
    setPrice(newPrice)
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
      <nav>
          <div id = 'logo'>
            <Link to = '/' className = 'link'>Fake Store</Link>
          </div>
          <div className = 'nav-links'>
            <Link to = '/' className = 'link item'>Home</Link>
            <Link to = '/shop' className = 'link item'>Shop</Link>
            <Link to = '/cart' className = 'link item '>Cart({cart.length})</Link>
          </div>
      </nav>

      {/* Switches */}
      <div className = 'main-body'>
        <Switch>
          {/* Parameter in Item.js listed below */}
          <Route path = '/shop/:itemID'>
            <Item data = {data} addToCart = {addToCart}/>
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
      <footer>
        <h2>Little About the Project</h2>
        <p>Fake Shop has been a front-end project I've been working on intermittently for the past couple months. The main stack used in this is React and Redux, although initially it was created without Redux using prop driling. If you'd like to see more of the technical side of this project the Github Repo is below, within that is a Read Me with a map of all the components and how they interweave as well. Hopefully this showcases a good amount of what I can do! Cheers.</p>
      </footer>
    </div>
  );
}

export default App;
