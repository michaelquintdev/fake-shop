import React from 'react'
import Card from './Card'

function Shop(props) {
    const {data} = props
    return (
        <div>
            {data.map(item => {
                return <Card item = {item} key = {item.id}/>
            })}
        </div>
    )
}

export default Shop
