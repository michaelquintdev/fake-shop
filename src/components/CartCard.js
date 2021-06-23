import React from 'react'

function CartCard(props) {
    const { item } = props;
    return (
        <div>
            <h2>{item.title}</h2>
            <img src = {item.image} alt = {item.title} />
            <h3>{item.price}</h3>
        </div>
    )
}

export default CartCard
