import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../itemDetail/ItemDetail'
import PcImg from '../assets/pcdesktop.jpg'

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

function ItemDetailContainer() {
    const { itemId } = useParams();
    const [productDetail, setProduct] = useState([]);

    const getItems = () => {
        new Promise((resolve, reject) => {
        setTimeout(() => resolve(items), 2000);
        }).then((res) => {
        const itemFiltrado = res.filter((elem) => elem.id == itemId);
        setProduct(itemFiltrado);
        });
    };

    useEffect(getItems, [itemId]);
    console.log("pd", productDetail);
    return (
        <div>
            <h2>ITEM NUMERO: {itemId}</h2>
                {productDetail.map((data) => (
            <div>
                <ItemDetail objeto={data} />
            </div>
            ))}
        </div>
    );
}

export default ItemDetailContainer