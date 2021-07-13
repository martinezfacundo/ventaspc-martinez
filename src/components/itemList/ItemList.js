import React from 'react'
import Item from '../item/Item'
import './ItemList.css'

const ItemList = ({data}) => {
    return(
        <div className='items-container'>
        {data.map((elem) => 
            <div key={elem.id}>
                <Item {... elem} />
            </div>)}
        </div>
    ) 
}

export default ItemList