import React from 'react';
import ItemCount from '../itemCount/ItemCount';

const styles = {color:'black',fontSize:'30px'}

function ItemListContainer({greeting}) {
    return(
        <div>
        <h1 styles={styles}>{greeting}</h1>
        <ItemCount initial={1} stock={15} onAdd={() => {console.log('Agregado')}} />
        </div>
    )
}

export default ItemListContainer