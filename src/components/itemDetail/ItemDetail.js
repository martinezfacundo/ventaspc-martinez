import React from 'react'

const stylesImg = {width:'300px',height:'300px'}
const stylesDiv = {width:'400px',height:'500px',border:'solid 1px black',margin:'20px auto'}


function ItemDetail({ objeto }) {
    return (
        <div style={stylesDiv}>
            <img style={stylesImg} src={objeto.pictureUrl} />  
            <h4>{objeto.id}</h4>
            <h4>{objeto.title}</h4>
            <h4>{objeto.description}</h4>
            <h4>{objeto.price}</h4>
        </div>
    );
}

export default ItemDetail