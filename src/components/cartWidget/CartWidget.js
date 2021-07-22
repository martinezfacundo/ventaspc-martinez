import React, { useContext, useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import CartIcon from '../assets/carrito-de-compras.png'
import { CartContext } from '../context/CartContext'
import './CartWidget.css'

function CartWidget() {

    const [cantidad, setCantidad] = useState(0)
    const useCart = useContext(CartContext)

    return (
        <>
        {useCart.cartData && 
        <div className='widget-container'>
        <Link to='/cart'><img className='imagen' src={CartIcon} alt="carrito" /></Link>
        <div>{cantidad}</div>
        </div>}
        </>
    )
}

export default CartWidget