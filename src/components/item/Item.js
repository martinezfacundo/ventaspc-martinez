import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import './Item.css'
import { pictures } from '../assets/products'
import img from '../assets/combo-tres.jpg'

const Item = ({id,title,price}) => {

    const [elemento, setElemento] = useState()

    function getPictureUrl (itemId) {
        pictures.map(elem => {
            if (elem.id === itemId) {
                setElemento(elem)
            }
        })
    }

    useEffect(() => {
        getPictureUrl(id)
    }, [])

    return(
        <div>
            <div className='item-container'>
                <img className='stylesImg' src={elemento?.pictureUrl} alt='imagen producto'/>
                <h3>{title}</h3>
                <h4>${price}</h4> 
                <Link to={`/item/${title}`} className='linkStyle'>VER MAS</Link>
            </div>
        </div>
    )
}

export default Item