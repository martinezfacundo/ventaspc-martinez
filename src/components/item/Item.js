import React from 'react'

const stylesImg = {width:'100px',height:'100px'}
const stylesDiv = {width:'400px',height:'400px',border:'solid 1px black',margin:'20px auto'}

const Item = ({id,title,description,price,pictureUrl}) => {

    return(
        <div style={stylesDiv}>
            <h4>Id: {id}</h4>
            <h4>Title: {title}</h4>
            <h4>Description: {description}</h4>
            <h4>Price: {price}</h4>
            <img style={stylesImg} src={pictureUrl} /> 
        </div>
    )
}

export default Item