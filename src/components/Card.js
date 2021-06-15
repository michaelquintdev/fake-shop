import React from 'react'
import Item from './Item'
import { useRouteMatch, Link } from 'react-router-dom'

function Card(props) {
    const {item} = props
    const {url} = useRouteMatch()
    return (
        <div>
            <div>
                <Link to = {`${url}`/`${item.id}`}>
                    <img src = {item.image} />
                    <h3>{item.title}</h3>
                    <p>${item.price}</p>
                </Link>
            </div>
        </div>
    )
}

export default Card
