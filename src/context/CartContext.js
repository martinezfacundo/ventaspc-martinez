import { createContext, useContext, useState } from "react";

export const CartContext = createContext()
export const useCart = () => useContext(CartContext)

export const CartProvider = props => {

    var productsArray = []
    const [cartData, setCartData] = useState(productsArray)

    const addItem = (data, cantidad) => {
        if (productsArray.length) {
            if (productsArray.find(elem => elem.item.id === data.id)) {
                productsArray.map(prod => {
                    if (prod.item.id === data.id) {
                        return prod.quantity += cantidad
                    }
                })
            } else {
                return productsArray.push({item: {...data}, quantity: cantidad})
            }
        } else {
            return productsArray.push({item: {...data}, quantity: cantidad})
        }
    }

    const deleteItem = (prod) => {
        var productIndex = productsArray.indexOf(prod)
        productsArray.splice(productIndex, 1)
        console.log('borre un item ->', cartData)
    }

    const clear = () => {
        productsArray.splice(0, productsArray.length);
    }

    return (
        <CartContext.Provider value={{cartData, productsArray, addItem, deleteItem, clear}}>
            {props.children}
        </CartContext.Provider>
    )
}