import React, {useState, useEffect} from 'react'
import { Link} from 'react-router-dom';
import ItemCount from '../itemCount/ItemCount';
import './ItemDetail.css'
import { useCart } from '../../context/CartContext';
import { pictures } from '../assets/products';

function ItemDetail({ objeto }) {

    const {addItem} = useCart()
    const[cantidad, setCantidad] = useState()
    const[elemento, setElemento] = useState()

    const onAdd = (valor) => {
        setCantidad(valor)
        addItem(objeto, valor)
    }

    function getPictureUrl (itemId) {
        pictures.map(elem => {
            if (elem.id === itemId) {
                setElemento(elem)
            }
        })
    }

    useEffect(() => {
        getPictureUrl(objeto.id)
    }, [])


    return (
        <div className='stylesDiv'>
            <img className='stylesImg' src={elemento?.pictureUrl} alt='imagen producto'/>
            <h3>{objeto.title}</h3>
            <h4>{objeto.description}</h4>
            <h3>${objeto.price}</h3>
            {!cantidad && <ItemCount initial={1} stock={15} onAdd={onAdd} />}
            {cantidad && <Link to={'/cart'} className='boton-terminar'>Terminar mi compra</Link>}
        </div>
    );
}

export default ItemDetail