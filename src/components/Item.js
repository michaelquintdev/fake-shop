import { useParams } from 'react-router-dom'

function Item(props) {
    const { data, addToCart } = props
    const { itemID } = useParams()

    const item = data.find((item) => item.id == itemID)
    if(!data.length){return(<h1>Fetching items...</h1>)}

    return (
        <div>
             <h3>{item.title}</h3>
             <img src = {item.image} alt = {item.title}/>
             <p>{item.description}</p>
             <h4>{item.price}</h4>
             <button onClick = {() => addToCart(item)}>Add to Cart</button>
         </div>
    )
}

export default Item
