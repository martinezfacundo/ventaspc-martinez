import React, {useState, useContext, useEffect} from 'react'
import { Link} from 'react-router-dom';
import ItemCount from '../itemCount/ItemCount';
import './ItemDetail.css'
import { CartContext } from '../context/CartContext';
import { TotalContext } from '../context/TotalContext';

function ItemDetail({ objeto }) {

    const useCart = useContext(CartContext)
    const useTotal = useContext(TotalContext)
    const[cantidad, setCantidad] = useState()

    const onAdd = (valor) => {
        setCantidad(valor)
        useCart.productsArray.length ? (useCart.productsArray.find(elem => elem.item.id === objeto.id) ? console.log('Item repetido') : 
        useCart.productsArray.push({item: {...objeto}, quantity: valor})) :
        useCart.productsArray.push({item: {...objeto}, quantity: valor})
    }

    return (
        <div className='stylesDiv'>
            <img className='stylesImg' src={objeto.pictureUrl} alt='imagen producto'/>
            <h3>{objeto.title}</h3>
            <h4>{objeto.description}</h4>
            <h3>${objeto.price}</h3>
            {!cantidad && <ItemCount initial={1} stock={15} onAdd={onAdd} />}
            {cantidad && <Link to={'/cart'} className='boton-terminar'>Terminar mi compra</Link>}
        </div>
    );
}

export default ItemDetail