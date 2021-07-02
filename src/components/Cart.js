import React from 'react'
import CartCard from './CartCard'

function Cart(props) {
    const { cart, submit, update, price, removeFromCart} = props;

    const onSubmit = (event) => {
        event.preventDefault()
        submit()
    }
    const change = (event) => {
        const {name, value} = event.target
        update(name, value)
    }  

    return (
        <div>
            <h2>Final Shopping Cart</h2>
            <div className = 'cards-container'>
                {cart.map((item, idx) => {
                    return <CartCard item = {item} key = {idx} removeFromCart = {removeFromCart}/>
                })}
            </div>
            <h2>${price}</h2>
            <div>
                <h2>Buy Here</h2>
                <form onSubmit={onSubmit}>
                    <label>First Name: 
                        <input name = 'firstName' type = 'text' onChange = {change} />
                    </label>
                    <label>Last Name: 
                        <input name = 'lastName' type = 'text' onChange = {change} />
                    </label>
                    <label>Address: 
                        <input name = 'address' type = 'text' onChange = {change} />
                    </label>
                    <label>Zip Code: 
                        <input name = 'zipCode' type = 'text' onChange = {change} />
                    </label>
                    <label>Credit Card: 
                        <input name = 'card' type = 'text' onChange = {change} />
                    </label>
                    <label>Security Code: 
                        <input name = 'code' type = 'text' onChange = {change} />
                    </label>
                    <button>Buy</button>
                </form>
            </div>
        </div>
    )
}

export default Cart
