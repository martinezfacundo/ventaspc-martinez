import React, { useState } from 'react';
import './ItemCount.css'

const ItemCount = ({stock,onAdd,initial}) => {

    const [count, setCount] = useState(initial)

    const sumarCount = () => {
        if (count < stock) {
            setCount(count + 1)
        }
    }

    const restarCount = () => {
        if (count > initial) {
            setCount(count - 1)
        }
    }

    return(
        <>  
        {stock ? <div>
                    <button className='botonStyles' onClick={sumarCount}>+</button>
                    <div className='countStyles'>{count}</div>
                    <button className='botonStyles' onClick={restarCount}>-</button>
                    <button className='botonStyles' onClick={() => onAdd(count)}>Agregar al carrito</button>
                </div> : <div className='stock'>Sin stock</div>}
        </>
    )
}

export default ItemCount;