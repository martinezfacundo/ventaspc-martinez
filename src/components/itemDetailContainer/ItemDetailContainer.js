import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../itemDetail/ItemDetail'
import {getFirestore} from '../../firebase'

function ItemDetailContainer() {
    const { itemId } = useParams();
    const [product, setProduct] = useState([]);

    const getProduct = () => {
        const db = getFirestore();
        const itemCollection = db.collection("items").where("title", "==", itemId)
        return itemCollection.get().then((querySnapshot) => {
            if(querySnapshot.size === 0){
                console.log('no results')
            } else {
                setProduct(querySnapshot.docs.map(doc => doc.data()))
            }
        }).catch(error => {
            console.log('error ->', error)
        })
    };

    useEffect(getProduct, [itemId]);

    console.log('product ->', product)

    return (
        <div>
                {product.map((data) => (
            <div key={data.id}>
                <ItemDetail objeto={data} />
            </div>
            ))}
        </div>
    );
}

export default ItemDetailContainer