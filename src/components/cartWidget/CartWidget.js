import React, {useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import CartIcon from '../assets/carrito-de-compras.png'
import { useCart } from '../../context/CartContext'
import './CartWidget.css'

function CartWidget() {

    const [mostrar, setMostrar] = useState()
    const {productsArray, cartData} = useCart()

    useEffect(() => {
        setMostrar(false)
    }, [])

    useEffect(() => {
        console.log('CAMBIEE')
    }, [cartData])

    return (
        <div>
        {console.log(productsArray.length)}
        {mostrar ?
        <div className='widget-container'>
        <Link to='/cart'><img className='imagen' src={CartIcon} alt="carrito" /></Link>
        </div> : <div>nada</div>}
        </div>
    )
}

export default CartWidget