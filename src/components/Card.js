import React from 'react'
import { useRouteMatch, Link } from 'react-router-dom'

// Constructs our card and links it to the 'Item' component
function Card(props) {
    const {item} = props
    const {url} = useRouteMatch()
    
    // quick styles
    
    return (
        <div>
            {/* Check Item.js for what this Links to */}
            <Link to = {`${url}/${item.id}`}>
                <div>
                    <img src = {item.image} alt = {`This is a ${item.title}`}/>
                    <h3>{item.title}</h3>
                    <p>${item.price.toFixed(2)}</p>
                </div>
            </Link>
        </div>
    )
}

export default Card
