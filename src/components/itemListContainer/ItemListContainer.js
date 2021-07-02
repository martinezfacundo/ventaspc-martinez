import React, {useState, useEffect} from 'react';
import ItemCount from '../itemCount/ItemCount';
import ItemList from '../itemList/ItemList';
import PcImg from '../assets/pcdesktop.jpg'

const styles = {color:'black',fontSize:'30px'}

const items = [
    {
        id: 1,
        title: 'Pc Desktop Numero 1',
        description: 'Pc Gaming Numero 1',
        price: '$1000',
        pictureUrl: PcImg
    },
    {
        id: 2,
        title: 'Pc Desktop Numero 2',
        description: 'Pc Gaming Numero 2',
        price: '$1500',
        pictureUrl: PcImg
    },
    {
        id: 3,
        title: 'Pc Desktop Numero 3',
        description: 'Pc Gaming Numero 3',
        price: '$2000',
        pictureUrl: PcImg
    },
    {
        id: 4,
        title: 'Pc Desktop Numero 4',
        description: 'Pc Gaming Numero 4',
        price: '$1500',
        pictureUrl: PcImg
    }
]

function ItemListContainer({greeting}) {

    const[itemsArray,setItemsArray] = useState([])

    useEffect(() => {
        new Promise((resolve,reject) => {
            setTimeout( () => resolve(items), 2000)    
        }).then(
            (data) => setItemsArray(data))}, [])

    return(
        <div>
        <h1 styles={styles}>{greeting}</h1>
        <ItemCount initial={1} stock={15} onAdd={() => {console.log('Agregado')}} />
        <ItemList data={itemsArray}/>
        </div>
    )
}

export default ItemListContainer