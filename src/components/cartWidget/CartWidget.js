import React from 'react'
import Cart from '../assets/carrito-de-compras.png'
import './CartWidget.css'

function CartWidget() {
    return (
        <img className='imagen' src={Cart} alt="carrito" />
    )
}

export default CartWidget