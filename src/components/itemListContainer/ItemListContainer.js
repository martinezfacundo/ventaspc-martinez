import React, {useState, useEffect} from 'react';
import ItemList from '../itemList/ItemList';
import { useParams } from 'react-router-dom';
import {items} from '../assets/products'
import './ItemListContainer.css'

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
            <h1 className='styles'>{greeting}</h1>
            <div>
                <ItemList data={itemsArray}/>
            </div>
        </div>
    )
}

export default ItemListContainer