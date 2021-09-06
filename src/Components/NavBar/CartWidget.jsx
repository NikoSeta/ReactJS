import React from 'react';
import CarritoImg from '../../Img/carrito.jpg';
import { Link} from 'react-router-dom';

function CartWidget() {
    return (
        <>
        <Link to='carrito'><img src= {CarritoImg} alt="carrito"/></Link>
        </>
    )
}
export {CartWidget}
