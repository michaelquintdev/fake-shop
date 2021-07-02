import React from 'react'
import styled from 'styled-components';

// styles
const Div = styled.div`
    margin: 1.2%;
    padding: 2%;
    position: relative;
`
const Title = styled.h3`
    padding-bottom: 20%;
    // position: absolute;
    // top: 0;
`
const Image = styled.img`
    padding-bottom: 20%;
    // width: 200px;
    height: auto;
`
const Price = styled.h4`
    position: absolute;
    bottom 0;
`

// Again making cards for our Final Cart
function CartCard(props) {
    const { item, removeFromCart } = props;
    return (
        <Div className = 'card'>
            <button onClick = {() => removeFromCart(item)}> X </button>
            <Title className = 'cart-title'>{item.title}</Title>
            <Image className = 'cart-img' src = {item.image} alt = {item.title} />
            <Price>${item.price}</Price>
        </Div>
    )
}

export default CartCard
