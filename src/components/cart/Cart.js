import React, {useContext, useEffect, useState} from 'react'
import { CartContext } from '../context/CartContext'
import { TotalContext } from '../context/TotalContext'
import ItemCartContainer from '../itemCartContainer/ItemCartContainer'
import {Link} from 'react-router-dom'
import './Cart.css'

function Cart() {

    const useCart = useContext(CartContext)
    const useTotal = useContext(TotalContext)

    useEffect(() => console.log('estado de Cart ->', useCart.cartData), [])
    useEffect(() => {console.log('e.d.c cambio cartdata ->', useCart.cartData)}, [useCart.cartData])

    return (
        <div>
            {useCart.cartData ? 
            <>
            <ItemCartContainer itemsArray={useCart.cartData}/>
            <h2>Total: {useTotal.total}</h2>
            </> : 
            <>
            <h3>No hay items en su carrito</h3>
            <Link to='/'><button className='boton-regresar'>Seguir Comprando</button></Link>
            </>}
        </div>
    )
}

export default Cart