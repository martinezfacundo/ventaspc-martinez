import React from 'react'
import {Link} from 'react-router-dom'
import CartIcon from '../assets/carrito-de-compras.png'
import './CartWidget.css'

function CartWidget() {
    return (
        <Link to='/cart'><img className='imagen' src={CartIcon} alt="carrito" /></Link>
    )
}

export default CartWidget