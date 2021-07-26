import { createContext, useContext, useEffect, useState } from "react";

export const CartContext = createContext()
export const useCart = () => useContext(CartContext)

export const CartProvider = props => {

    const [cartData, setCartData] = useState([])

    useEffect(() =>{
        console.log('cambiaste cart', cartData)
    }, [cartData])

    const addItem = (data, cantidad) => {
            if (cartData?.find(elem => elem.id === data.id)) {
                const itemNew = cartData.map(prod => {
                    if (prod.id === data.id) {
                        return prod.quantity += cantidad
                    }
                })
            } else {
                setCartData(state => {
                    return  [...state, {... data, quantity: cantidad}]
                })
            }
        }

    const deleteItem = (product) => {
        const dataFiltrada = cartData.filter((elem) => elem !== product)
        setCartData(dataFiltrada)
    }

    const clearItems = () => {
        setCartData([])
    }

    const totalItems = () => cartData.reduce((acum, prod) => acum + prod.quantity, 0)
    const totalPrice = () => cartData.reduce((acum, prod) => acum + (prod.price * prod.quantity), 0)

    return (
        <CartContext.Provider value={{cartData, addItem, deleteItem, clearItems, totalItems, totalPrice}}>
            {props.children}
        </CartContext.Provider>
    )
} 