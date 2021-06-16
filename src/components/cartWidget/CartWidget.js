import React from 'react'
import Cart from '../assets/carrito-de-compras.png'

const styles = {height:'20px',width:'20px'}

function CartWidget() {
    return (
        <img style={styles} src={Cart} alt="carrito" />
    )
}

export default CartWidget