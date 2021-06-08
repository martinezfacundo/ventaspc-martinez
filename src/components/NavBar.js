import React from 'react';

const barra = {background: '#1b1c1c',
display: 'flex', justifyContent: 'space-between',alignItems:'center'}
const espacioTitulo = {padding:'0 300px',color:'white'}
const espacioLink = {padding:'0 300px',display:'flex',justifyContent:'space-between',width:'20rem'}
const link = {textDecoration:'none',color:'white'}

function NavBar(){
    return(
        <div style={barra}>
            <h1 style={espacioTitulo}>
                Ventas Pc
            </h1>
            <div style={espacioLink}>
                <a style={link} href="#">Home</a>
                <a style={link} href="#">Shop</a>
                <a style={link} href="#">About</a>
            </div>
        </div>
    )
};

export default NavBar;