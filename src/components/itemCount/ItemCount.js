import React, { useState } from 'react';
import './ItemCount.css'

const ItemCount = ({stock,onAdd,initial}) => {

    const [count, setCount] = useState(initial)

    const sumarCount = () => {
        if (count < stock) {
            setCount(count + 1)
            console.log('Items en el carrito:',count)
            console.log('Stock actual:',stock)
        }
    }

    const restarCount = () => {
        if (count > initial) {
            setCount(count - 1)
            console.log('Items en el carrito:',count)
            console.log('Stock actual:',stock)
        }
    }

    return(
        <div>
            <button className='botonStyles' onClick={sumarCount}>+</button>
            <div className='countStyles'>{count}</div>
            <button className='botonStyles' onClick={restarCount}>-</button>
            <button className='botonStyles' onClick={() => onAdd(count)}>Agregar al carrito</button>
        </div>    
    )
}

export default ItemCount;