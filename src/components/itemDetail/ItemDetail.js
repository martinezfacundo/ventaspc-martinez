import React from 'react'

const stylesImg = {width:'300px',height:'300px'}
const stylesDiv = {width:'400px',height:'500px',border:'solid 1px black',margin:'20px auto'}

function ItemDetail({name, image, description, price}) {
    return (
        <div style={stylesDiv}>
            <img style={stylesImg} src={image} />
            <h4>{name}</h4>
            <h4>{description}</h4>
            <h4>{price}</h4>
        </div>
    )
}

export default ItemDetail