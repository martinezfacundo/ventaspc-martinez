import React from 'react'
import Item from '../item/Item'

const ItemList = ({data}) => {
    return(
        <div>
        {data.map((elem) => 
            <div key={elem.id}>
                <Item {... elem} />
            </div>)}
        </div>
    ) 
}

export default ItemList