import React, { useState } from 'react';

const ItemCount = ({stock,onAdd,initial}) => {

    const [count, setCount] = useState(initial)

    const sumarCount = () => {
        if (count <= stock) {
            setCount(count++)
            stock--
            console.log('Items en el carrito:',count)
            console.log('Stock actual:',stock)
        }
    }

    const restarCount = () => {
        if (count > initial) {
            setCount(count--)
            stock++
            console.log('Items en el carrito:',count)
            console.log('Stock actual:',stock)
        }
    }

    return(
        <div>
            <button onClick={sumarCount}>+</button>
            {count}
            <button onClick={restarCount}>-</button>
            <button onClick={onAdd}>Agregar</button>
        </div>    
    )
}

export default ItemCount;