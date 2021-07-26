import { createContext, useContext, useState } from "react";

export const CartContext = createContext()
export const useCart = () => useContext(CartContext)

export const CartProvider = props => {

    const [cartData, setCartData] = useState()
    var cantidadTotal = 0;

    console.log(cartData)
/*
    const totalItems = () => {
            const reducer = ((acumulador, valorActual) => acumulador + valorActual.quantity, 0);
            cantidadTotal = cartData?.reduce(reducer);
            return cantidadTotal
    };
*/
    const addItem = (data, cantidad) => {
            if (cartData?.find(elem => elem.item.id === data.id)) {
                const itemNew = cartData.map(prod => {
                    if (prod.item.id === data.id) {
                        return {... prod, quantity: data.quantity + cantidad}
                    }
                    return prod;
                })
                setCartData(itemNew)
            } else {
                return setCartData([{... data, cantidad}]) 
                }
            }

    return (
        <CartContext.Provider value={{cartData, addItem, cantidadTotal}}>
            {props.children}
        </CartContext.Provider>
    )
} 