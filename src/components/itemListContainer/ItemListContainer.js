import React from 'react';
import ItemCount from '../itemCount/ItemCount';
import ItemList from '../itemList/ItemList';

const styles = {color:'black',fontSize:'30px'}

function ItemListContainer({greeting}) {
    return(
        <div>
        <h1 styles={styles}>{greeting}</h1>
        <ItemCount initial={1} stock={15} onAdd={() => {console.log('Agregado')}} />
        <ItemList />
        </div>
    )
}

export default ItemListContainer