import React, {useState, useEffect} from 'react';
import ItemList from '../itemList/ItemList';
import { useParams } from 'react-router-dom';
import './ItemListContainer.css'
import {getFirestore} from '../../firebase'

function ItemListContainer({greeting}) {

    const {categoryId} = useParams()
    const [itemsList, setItemsList] = useState();

    const getProducts = () => {
        const db = getFirestore();
        const itemCollection = db.collection("items").orderBy("id", "asc");
        return itemCollection.get().then((querySnapshot) => {
            if(querySnapshot.size === 0){
                console.log('no results')
            } else {
                setItemsList(querySnapshot.docs.map(doc => doc.data()))
            }
        }).catch(error => {
            console.log('error ->', error)
        })
    }

    const filterProducts = () => {
        const db = getFirestore();
        const itemCollection = db.collection("items")
        .where("category", "==", `${categoryId}`)
        return itemCollection.get().then((querySnapshot) => {
            if(querySnapshot.size === 0){
                console.log('no results')
            } else {
                setItemsList(querySnapshot.docs.map(doc => doc.data()))
            }
        }).catch(error => {
            console.log('error ->', error)
        })
    }

    useEffect(() => {
        getProducts()
    }, [])

    useEffect(() => {
            if(categoryId) {
                filterProducts()
            } else {
                getProducts()
            }
        }, [categoryId])

    return(
        <div>
            <h1 className='styles'>{greeting}</h1>
            <div>
                {itemsList && <ItemList data={itemsList}/>}
            </div>
        </div>
    )
}

export default ItemListContainer