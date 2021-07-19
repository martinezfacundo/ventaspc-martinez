import React, {useContext, useEffect, useState} from 'react'
import { CartContext } from '../context/CartContext'
import ItemCart from '../itemCart/ItemCart'

function Cart() {

    const useCart = useContext(CartContext)
    const [cartItems, setCartItems] = useState()

    useEffect(() => {
        setCartItems(useCart.productsArray)
    }, [useCart.productsArray])

    return (
        <div>
            <h1>Items en el carrito</h1>
            {cartItems && cartItems.map((prod) => <ItemCart producto={prod}/>)}
        </div>
    )
}

export default Cart