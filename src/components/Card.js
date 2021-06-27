import React from 'react'
import { useRouteMatch, Link } from 'react-router-dom'
import styled from 'styled-components'

// Constructs our card and links it to the 'Item' component
function Card(props) {
    const {item} = props
    const {url} = useRouteMatch()
    
    // quick styles
    const Div = styled.div`
        display: flex;
        justify-content: center;
        width: 100%;
    `
    
    return (
        <Div>
            {/* Check Item.js for what this Links to */}
            <Link to = {`${url}/${item.id}`}>
                <div>
                    <img src = {item.image} alt = {`This is a ${item.title}`}/>
                    <h3>{item.title}</h3>
                    <p>${item.price}</p>
                </div>
            </Link>
        </Div>
    )
}

export default Card
