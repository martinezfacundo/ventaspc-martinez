import React, { useEffect, useState } from 'react'
import CartIcon from '../assets/carrito-de-compras.png'
import { useCart } from '../../context/CartContext'
import './CartWidget.css'

function CartWidget() {

    const {cartData, totalItems} = useCart()

    return (
        <>
        {cartData.length > 0 ? 
            <div className='widget-container'>
            <img className='imagen' src={CartIcon} alt="carrito" /><span>{totalItems()}</span>
            </div> :
            <div></div>
        }
        </>
    )
}

export default CartWidget