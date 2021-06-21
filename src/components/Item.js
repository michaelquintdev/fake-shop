import React, {useState} from 'react'
import { useParams } from 'react-router-dom'

function Item(props) {
    const { data, cart, setCart } = props
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
            <form>
                <label>
                    <input type = 'text' name='amountPurchased' maxLength='2' onChange={null} value={1}/>
                </label>
                <button onSubmit = {null}>Add to Cart</button>
            </form>
        </div>
    )
}

export default Item
