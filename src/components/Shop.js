import React from 'react'
import Card from './Card'

// maps through our data, making a card for each array index
function Shop(props) {
    const {data} = props
    return (
        <div>
            {data.map((item) => {
                return <Card item = {item} key = {item.id}/>
            })}
        </div>
    )
}

export default Shop
