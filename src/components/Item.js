import React from 'react'
import { useParams } from 'react-router-dom'

function Item(props) {
    const { data } = props
    const { itemID } = useParams()

    const item = data.find(async (item) => item.id === itemID)
    if(!data.length){return(<h1>Fetching items...</h1>)}

    console.log(item)

    return (
        <div>
            <h3>{item.title}</h3>
            <img src = {item.image} alt = {item.title}/>
            <p>{item.description}</p>
            <h4>{item.price}</h4>
            <button>Add to Cart</button>
        </div>
    )
}

export default Item
