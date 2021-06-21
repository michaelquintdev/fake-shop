import React from 'react'
import { useRouteMatch, Link } from 'react-router-dom'

function Card(props) {
    const {item} = props
    const {url} = useRouteMatch()
    return (
        <div>
            <Link to = {`${url}/${item.id}`}>
                <div>
                    <img src = {item.image} alt = {`This is a ${item.title}`}/>
                    <h3>{item.title}</h3>
                    <p>${item.price}</p>
                </div>
            </Link>
        </div>
    )
}

export default Card
