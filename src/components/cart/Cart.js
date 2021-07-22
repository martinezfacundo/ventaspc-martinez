import React, {useContext, useEffect, useState} from 'react'
import { useCart } from '../../context/CartContext'
import ItemCartContainer from '../itemCartContainer/ItemCartContainer'
import {Link} from 'react-router-dom'
import './Cart.css'

function Cart() {

    const {cartData, productsArray, clear} = useCart()

    useEffect(() => console.log('estado de Cart ->', cartData), [])
    useEffect(() => {console.log('e.d.c cambio cartdata ->', cartData)}, [cartData])

    return (
        <div>
            { productsArray.length ? 
            <>
            <ItemCartContainer itemsArray={productsArray}/>
            <h2>Total: </h2>
            <button className='boton-vaciar' onClick={clear}>Vaciar Carrito</button>
            </> : 
            <>
            <h3>No hay items en su carrito</h3>
            <Link to='/'><button className='boton-regresar'>Seguir Comprando</button></Link>
            </>}
        </div>
    )
}

export default Cart