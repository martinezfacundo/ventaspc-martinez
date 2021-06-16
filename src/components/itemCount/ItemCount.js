import React, { useState } from 'react';

const ItemCount = ({stock: initialStock,onAdd,initial}) => {

    var [count,setCount] = useState(initial)
    var [stock, setStock] = useState(initialStock)

    const sumarCount = () => {
        if (stock > 0 && count <= stock) {
            setCount(count++)
            setStock(stock--)
            console.log('Items en el carrito:',count)
            console.log('Stock actual:',stock)
        }
    }

    const restarCount = () => {
        if (count > 0) {
            setCount(count--)
            setStock(stock++)
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