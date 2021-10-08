import { Link } from 'react-router-dom'
import React from 'react'
import '../CSS/NavBar.css'
import  CartWidget from './CartWidget'
import ImgTitulo from '../../Img/ImgTitulo.jpg'
import {useAppContext} from '../../Context/AppContext'

function NavBar() {
    const { iconCart } = useAppContext()
    return (
        <div className='navbar navbar-expand-lg'>
            <div className='container'>
                <Link  to= "/"><img src={ImgTitulo} alt="logo"/></Link>
                <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div className='collapse navbar-collapse' id='navbarSupportedContent'>
                    <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                        <li className='nav-item'>
                            <Link to='/category/autos' id="neon-btn" aria-current='page'>Autos</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/category/camionetas' id="neon-btn" aria-current='page'>Camionetas</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/contacto/contacto' id="neon-btn" aria-current='page'>Contacto</Link>
                        </li>
                    </ul>
                    <form className='d-flex'>
                        <input className='form-control me-2' type='search' placeholder='Buscar' aria-label='Search'/>
                        <button id="neon-btn" className='btn btn-outline-danger' type='submit'>Busqueda</button>
                        <Link to='/carrito/carrito'><CartWidget/>{ iconCart() }</Link>
                    </form>
                </div>
            </div>
        </div>
    )
 }
export default NavBar
