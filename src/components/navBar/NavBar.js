import React from 'react';
import CartWidget from '../cartWidget/CartWidget';
import {Link} from "react-router-dom";

const barra = {background: '#1b1c1c',
display: 'flex', justifyContent: 'space-between',alignItems:'center'}
const espacioTitulo = {padding:'0 300px',color:'white'}
const espacioLink = {padding:'0 300px',display:'flex',justifyContent:'space-between',width:'32rem'}
const link = {textDecoration:'none',color:'white'}

function NavBar(){
    return(
        <div style={barra}>
            <h1 style={espacioTitulo}>
                Ventas Pc
            </h1>
            <div style={espacioLink}>
                <Link style={link} to="/">Home</Link>
                <Link style={link} to="/computers">Computers</Link>
                <Link style={link} to="/components">Components</Link>
                <Link style={link} to="/cart"><CartWidget /></Link>
            </div>
        </div>
    )
};

export default NavBar;