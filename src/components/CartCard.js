import React from 'react'

// Again making cards for our Final Cart
function CartCard(props) {
    const { item } = props;
    return (
        <div>
            <h3>{item.title}</h3>
            <img src = {item.image} alt = {item.title} />
            <h4>{item.price}</h4>
        </div>
    )
}

export default CartCard
