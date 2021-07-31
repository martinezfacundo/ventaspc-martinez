import React from 'react'
import { useCart } from '../../context/CartContext'
import ItemCartContainer from '../itemCartContainer/ItemCartContainer'
import {Link} from 'react-router-dom'
import './Cart.css'

function Cart() {

    const {cartData, clearItems, totalPrice} = useCart()

    return (<div>
            {cartData.length > 0 ?
            <>
            <ItemCartContainer itemsArray={cartData}/>
            <h2>Total price: ${totalPrice()}</h2>
            <div className='button-container'>
                <button className='boton-vaciar' onClick={clearItems}>Vaciar Carrito</button>
                <Link to='/cart/finish'><button className='boton-terminar'>Terminar compra</button></Link> 
            </div>
            </> : <>
                <h3>No hay items en su carrito</h3>
                <Link to='/'><button className='boton-regresar'>Seguir Comprando</button></Link>
                </>
            }
            </div>
    )
}

export default Cart