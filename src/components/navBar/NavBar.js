import React from 'react';
import CartWidget from '../cartWidget/CartWidget';
import {Link} from "react-router-dom";
import './NavBar.css'

const computers = 'computers';
const components = 'components';

function NavBar(){

    return(
        <div className='barra'>
            <div>
                <Link className='link' to='/'>
                    <h1 className='espacio-titulo'>VENTAS PC</h1>
                </Link>
            </div>   
            <div className='espacio-link'>
                <Link className='link' to="/">Home</Link>
                <Link className='link' to={`/category/${computers}`}>Computers</Link>
                <Link className='link' to={`/category/${components}`}>Components</Link>
                <Link className='link' to="/cart"><CartWidget /></Link>
            </div>
        </div>
    )
};

export default NavBar;