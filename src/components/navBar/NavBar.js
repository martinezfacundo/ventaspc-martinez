import React from 'react';
import CartWidget from '../cartWidget/CartWidget';
import {Link} from "react-router-dom";

const barra = {background: '#1b1c1c',
display: 'flex', alignItems:'center',justifyContent:'space-around'}
const espacioTitulo = {marginLeftcolor:'white'}
const espacioLink = {display:'flex',justifyContent:'space-between',width:'32rem'}
const link = {textDecoration:'none',color:'white'}

const computers = 'computers';
const components = 'components';

function NavBar(){
    return(
        <div style={barra}>
            <div>
                <Link style={link} to='/'>
                    <h1 style={espacioTitulo}>VENTAS PC</h1>
                </Link>
            </div>   
            <div style={espacioLink}>
                <Link style={link} to="/">Home</Link>
                <Link style={link} to={`/category/${computers}`}>Computers</Link>
                <Link style={link} to={`/category/${components}`}>Components</Link>
                <Link style={link} to="/cart"><CartWidget /></Link>
            </div>
        </div>
    )
};

export default NavBar;