import { createContext, useContext, useEffect, useState } from "react";
import { getFirestore } from "../firebase";

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

    const updateStock = (product) => {
        const db = getFirestore()
        const docRef = db.collection('items').doc(`${product.id}`);
        const itemCollection = db.collection("items").where("title", "==", product.title)
        itemCollection.get().then((querySnapshot) => {
            if(querySnapshot.size === 0){
                console.log('no results')
            } else {
                const restStock = querySnapshot.docs.map(doc => doc.data())[0].stock
                docRef.update({
                    stock: restStock + product.quantity
                })
            }
        }).catch(error => {
            console.log('error ->', error)
        })
    };

    const deleteItem = (product) => {
        updateStock(product)
        const dataFiltrada = cartData.filter((elem) => elem !== product)
        setCartData(dataFiltrada)
    }

    const clearItems = () => {
        const db = getFirestore()
        cartData.map(elem => {
            const docRef = db.collection('items').doc(`${elem.id}`);
            const itemCollection = db.collection("items").where("title", "==", elem.title)
            return itemCollection.get().then((querySnapshot) => {
                if(querySnapshot.size === 0){
                    console.log('no results')
                } else {
                    const restStock = querySnapshot.docs.map(doc => doc.data())[0].stock
                    docRef.update({
                        stock: restStock + elem.quantity
                    })
                }
            }).catch(error => {
                console.log('error ->', error)
        })})
        setCartData([])
    }

    const totalItems = () => cartData.reduce((acum, prod) => acum + prod.quantity, 0)
    const totalPrice = () => cartData.reduce((acum, prod) => acum + (prod.price * prod.quantity), 0)

    return (
        <CartContext.Provider value={{cartData, addItem, deleteItem, clearItems, totalItems, totalPrice, setCartData}}>
            {props.children}
        </CartContext.Provider>
    )
} 