import React, {useState, useEffect} from 'react'
import ItemDetail from '../itemDetail/ItemDetail'

const product = {
    image: 'https://compumaster.ec/33-large_default/cpu-gamer-ryzen-5.jpg',
    name: 'CPU Numero 5',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
    price: '$1500'
}

function ItemDetailContainer() {

    const [productDetail, setProduct] = useState({})

    const getItems = () => {
        new Promise((resolve,reject) => {
            setTimeout(() => resolve(product),2000)
        }).then(res => setProduct(res))
    }

    useEffect(getItems, [])

    return (
        <div>
            <ItemDetail {... productDetail} />
        </div>
    )
}

export default ItemDetailContainer