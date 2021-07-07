import React from 'react'
import {Link} from 'react-router-dom'

const stylesImg = {width:'7vw',height:'15vh',}
const stylesDiv = {width:'20vw',height:'40vh',border:'solid .1vw black',margin:'2vh auto',display:'flex',flexDirection:'column',alignItems:'center'}
const linkStyle = {marginTop:'1vh',color:'white',textDecoration:'none',backgroundColor:'black', padding:'.7vh 1vw'}

const Item = ({id,title,description,price,pictureUrl}) => {

    return(
        <div style={stylesDiv}>
            <h4>Title: {title}</h4>
            <h4>Description: {description}</h4>
            <h4>Price: {price}</h4>
            <img style={stylesImg} src={pictureUrl} /> 
            <Link to={`/item/${id}`} style={linkStyle}>VER MAS</Link>
        </div>
    )
}

export default Item