import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Route, Link, Switch} from 'react-router-dom'
import Shop from './components/Shop'
import Home from './components/Home'
import Item from './components/Item'

function App() {
  const [data, setData] = useState([])
  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(res => {
        console.log(res.data)
        setData(res.data)
      })
      .catch(error => {
        console.log(error);
      })
    }, [])

  return (
    <div className="App">
      <nav>
        <h1>Fake Store</h1>
        <div className = 'nav-links'>
          <Link to = '/'>Home</Link>
          <Link to = '/shop'>Shop</Link>
        </div>
        {/* <button Link = '/bro'></button> */}
      </nav>
      <Switch>
        <Route path = '/shop/:itemID'>
          <Item />
        </Route>
        <Route path = '/shop'>
          <Shop data = {data}/>
        </Route>
        <Route path = '/'>
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
