import React from 'react'
import './ItemCart.css'
import { useCart } from '../../context/CartContext'

export default function ItemCart ({producto}) {

    const {deleteItem} = useCart()

    return (
        <div className='item-container'>
            <h3>Nombre: <span>{producto.title}</span></h3>
            <h3>Cantidad: <span>{producto.quantity}</span></h3>
            <h3>Total: <span>${producto.price * producto.quantity}</span></h3>
            <button onClick={() => deleteItem(producto)}>ELIMINAR</button>
        </div>
    )
}