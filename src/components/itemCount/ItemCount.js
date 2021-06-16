import React, { useState } from 'react';

const ItemCount = ({stock: initialStock,onAdd,initial}) => {

    const botonStyles = {border:'none', background:'black', margin:'5px', padding:'5px 10px',color:'white',textTransform:'uppercase',fontWeight:'700',fontFamily:'sans-serif'}
    const countSyles = {fontFamily:'sans-serif',fontWeight:'700',display:'inline-block'}
    const [count, setCount] = useState(initial)
    const [stock, setStock] = useState(initialStock - 1)

    const sumarCount = () => {
        if (0 < stock) {
            setCount(count + 1)
            setStock(stock - 1)
            console.log('Items en el carrito:',count)
            console.log('Stock actual:',stock)
        }
    }

    const restarCount = () => {
        if (count > initial) {
            setCount(count - 1)
            setStock(stock + 1)
            console.log('Items en el carrito:',count)
            console.log('Stock actual:',stock)
        }
    }

    return(
        <div>
            <button style={botonStyles} onClick={sumarCount}>+</button>
            <div style={countSyles}>{count}</div>
            <button style={botonStyles} onClick={restarCount}>-</button>
            <button style={botonStyles} onClick={onAdd}>Agregar al carrito</button>
        </div>    
    )
}

export default ItemCount;