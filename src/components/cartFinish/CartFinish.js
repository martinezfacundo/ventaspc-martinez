import React, { useState } from 'react'
import './CartFinish.css'
import { getFirestore } from '../../firebase'
import { useCart } from '../../context/CartContext'

export default function CartFinish () {

    const {cartData, setCartData} = useCart()

    const [datos, setDatos] = useState(false)
    const [orderId, setOrderId] = useState('')
    const [infoForm, setInfoForm] = useState({
        name: '',
        email: '',
        phoneNumber: ''
    })
    const [emailAuth, setEmailAuth] = useState('')

    const changeInfoForm = (evt) => {
        setInfoForm({...infoForm, [evt.target.name]: evt.target.value})
    }

    const changeEmailAuth = (evt) => setEmailAuth(evt.target.value)

    const sendInfoForm = () => {
        const db = getFirestore()
        const orders = db.collection('orders')
        const total = cartData.reduce((acum, prod) => acum + (prod.price * prod.quantity), 0)
        const newOrder = {
            items: {...cartData},
            buyer: {...infoForm},
            total,
        }

        orders.add(newOrder).then(({id}) => setOrderId(id))
        .catch(error => console.log(error))

        setCartData([])
        setDatos(true)
    }

    console.log(orderId)

    return (
        <>  {datos === false ? 
                <div className='container'>
                    <h2>Completa con tus datos</h2>
                    <form className='form-container'>
                        <input name='name' placeholder='Tu nombre' type='text' onChange={changeInfoForm}/>
                        <input id='emailAuth' name='emailAuth' placeholder='Tu email' type='email' onChange={changeEmailAuth}/>
                        <input id='email' name='email' placeholder='Ingresa nuevamente tu email' type='email' onChange={changeInfoForm}/>
                        <input name='phoneNumber' placeholder='Tu telefono' type='text' onChange={changeInfoForm}/>
                        <button type='submit' disabled={emailAuth !== infoForm.email || (emailAuth && infoForm.email && infoForm.name && infoForm.phoneNumber) == ''} onClick={() => sendInfoForm()}>CONFIRMAR</button>
                    </form>
                </div> : <div>¡Compra realizada con exito! Tu id de compra es: {orderId}</div>
                }
        </>
    )
}