import React, {useEffect, useState } from 'react'
import CartIcon from '../assets/carrito-de-compras.png'
import { useCart } from '../../context/CartContext'
import './CartWidget.css'

function CartWidget() {
    const {totalItems} = useCart()

    return (
        <>
        </>
        /*<>
        {if (totalItems() > 0){
            <div className='widget-container'>
            <img className='imagen' src={CartIcon} alt="carrito" /><span>{totalItems()}</span>
            </div>
        } else {
            <div></div>
        }
        }
        </>*/
    )
}

export default CartWidget