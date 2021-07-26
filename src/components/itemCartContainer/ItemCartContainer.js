import React from 'react'
import './ItemCartContainer.css'
import ItemCart from '../itemCart/ItemCart'

function ItemCartContainer ({itemsArray}){

    return (
        <div>
            <h1>Items en el carrito</h1>
            {itemsArray?.map((prod) => <ItemCart key={prod.id.toString()} producto={prod}/>)}
        </div>
    )
}

export default ItemCartContainer