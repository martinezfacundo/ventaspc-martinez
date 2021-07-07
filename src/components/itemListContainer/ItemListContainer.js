import React, {useState, useEffect} from 'react';
import ItemCount from '../itemCount/ItemCount';
import ItemList from '../itemList/ItemList';
import PcImg from '../assets/pcdesktop.jpg'
import { useParams } from 'react-router-dom';

const styles = {color:'black',fontSize:'30px'}

const items = [
    {   
        category: 'computers',
        id: 1,
        title: 'Pc Desktop Numero 1',
        description: 'Pc Gaming Numero 1',
        price: '$1000',
        pictureUrl: PcImg
    },
    {
        category: 'computers',
        id: 2,
        title: 'Pc Desktop Numero 2',
        description: 'Pc Gaming Numero 2',
        price: '$1500',
        pictureUrl: PcImg
    },
    {   
        category: 'components',
        id: 3,
        title: 'Pc Desktop Numero 3',
        description: 'Pc Gaming Numero 3',
        price: '$2000',
        pictureUrl: PcImg
    },
    {   
        category: 'components',
        id: 4,
        title: 'Pc Desktop Numero 4',
        description: 'Pc Gaming Numero 4',
        price: '$1500',
        pictureUrl: PcImg
    }
]

function ItemListContainer({greeting}) {

    const {categoryId} = useParams()

    const[itemsArray,setItemsArray] = useState([])

    useEffect(() => {
        new Promise((resolve,reject) => {
            setTimeout( () => resolve(items), 2000)    
        }).then(data => {
            if(categoryId) {
                const dataFiltrada = data.filter(elem => elem.category === categoryId)
            setItemsArray(dataFiltrada)
            } else {
                setTimeout(() => {
                    setItemsArray(data)
                }, 2000);
            }
            })
        }, [categoryId])
    
    return(
        <div>
        <h1 styles={styles}>{greeting}</h1>
        <ItemCount initial={1} stock={15} onAdd={() => {console.log('Agregado')}} />
        <ItemList data={itemsArray}/>
        </div>
    )
}

export default ItemListContainer