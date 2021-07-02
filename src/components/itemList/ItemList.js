import React from 'react'
import Item from '../item/Item'

const ItemList = ({data}) => {
    return(
        <div>
        {data.map((elem) => <Item {... elem} />)}
        </div>
    ) 
}

export default ItemList