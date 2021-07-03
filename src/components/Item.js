import { useParams } from 'react-router-dom'

// Constructing the final product display as well as implementing cart functionality using addToCart

function Item(props) {
    const { data, addToCart, } = props

    // Grabs the parameter from the Route in the App component
    const { itemID } = useParams()

    // Matching the parameter grabbed from the URL to the array data
    const item = data.find((item) => item.id == itemID)
    if(!data.length){return(<h1>Fetching items...</h1>)}

    return (
        // Constructing the display
        <div>
             <h3>{item.title}</h3>
             <img src = {item.image} alt = {item.title}/>
             <p>{item.description}</p>
             <h4>${item.price.toFixed(2)}</h4>
             <button onClick = {() => addToCart(item)} >Add to Cart</button>
         </div>
    )
}

export default Item
