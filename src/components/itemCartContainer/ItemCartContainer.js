import React from 'react'
import './ItemCartContainer.css'
import ItemCart from '../itemCart/ItemCart'

function ItemCartContainer ({itemsArray}){

    return (
        <div>
            <h1>Items en el carrito</h1>
            {itemsArray && itemsArray.map((prod) => <ItemCart key={prod.item.id.toString()} producto={prod}/>)}
        </div>
    )
}

export default ItemCartContainer