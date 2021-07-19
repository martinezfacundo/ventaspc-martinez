import React, {useContext} from 'react'
import './ItemCart.css'
import { CartContext } from '../context/CartContext'

export default function ItemCart ({producto}) {

    const useCart = useContext(CartContext)

    const deleteItem = () => {
        var productIndex = useCart.productsArray.indexOf(producto)
        useCart.productsArray.splice(productIndex, 1)
    }

    return (
        <div className='item-container'>
            <h3>Nombre: <span>{producto.item.title}</span></h3>
            <h3>Cantidad: <span>{producto.quantity}</span></h3>
            <h3>Total: <span>${producto.item.price * producto.quantity}</span></h3>
            <button onClick={() => deleteItem()}>ELIMINAR</button>
        </div>
    )
}