import React from 'react'
import CartCard from './CartCard'

function Cart(props) {
    const { cart } = props;
    return (
        <div>
            <h1>Final Shopping Cart</h1>
            <div>
                {cart.map((item, idx) => {
                    return <CartCard item = {item} key = {idx}/>
                })}
            </div>
            <div>
                <h2>Buy Here</h2>
                <form>
                    <label>First Name: 
                        <input name = 'firstName' type = 'text' onChange = {null} onSubmit = {null}/>
                    </label>
                    <label>Last Name: 
                        <input name = 'lastName' type = 'text' onChange = {null} onSubmit = {null}/>
                    </label>
                    <label>Address: 
                        <input name = 'address' type = 'text' onChange = {null} onSubmit = {null}/>
                    </label>
                    <label>Zip Code: 
                        <input name = 'zipCode' type = 'text' onChange = {null} onSubmit = {null}/>
                    </label>
                    <label>Credit Card: 
                        <input name = 'card' type = 'text' onChange = {null} onSubmit = {null}/>
                    </label>
                    <label>Security Code: 
                        <input name = 'code' type = 'text' onChange = {null} onSubmit = {null}/>
                    </label>
                </form>
            </div>
        </div>
    )
}

export default Cart
