import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../itemDetail/ItemDetail'
import {items} from '../assets/products'

function ItemDetailContainer() {
    const { itemId } = useParams();
    const [productDetail, setProduct] = useState([]);

    const getItems = () => {
        new Promise((resolve, reject) => {
        setTimeout(() => resolve(items), 2000);
        }).then((res) => {
        const itemFiltrado = res.filter((elem) => elem.id === parseInt(itemId));
        setProduct(itemFiltrado);
        });
    };

    useEffect(getItems, [itemId]);
    return (
        <div>
                {productDetail.map((data) => (
            <div>
                <ItemDetail objeto={data} />
            </div>
            ))}
        </div>
    );
}

export default ItemDetailContainer