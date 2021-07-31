import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import './Item.css'

const Item = ({title,price,pictureUrl}) => {

    return(
        <div>
            <div className='item-container'>
                <img className='stylesImg' src={pictureUrl} alt='imagen producto'/>
                <h3>{title}</h3>
                <h4>${price}</h4> 
                <Link to={`/item/${title}`} className='linkStyle'>VER MAS</Link>
            </div>
        </div>
    )
}

export default Item