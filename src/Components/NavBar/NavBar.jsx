import { Link } from 'react-router-dom'
import React from 'react'
import '../CSS/NavBar.css'
import  {CartWidget} from './CartWidget'
import ImgTitulo from '../../Img/ImgTitulo.jpg'
import Contacto from '../Contenedores/Contacto'
function NavBar() {
    return (
        <div className='navbar navbar-expand-lg'>
        <div className='container'>
            <Link to= "./"><img src={ImgTitulo} alt="logo"/></Link>
            <a className='navbar-brand text-danger'>Car Sale</a>
            <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
                <span className='navbar-toggler-icon'></span>
            </button>
            <div className='collapse navbar-collapse' id='navbarSupportedContent'>
                <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                    <li className='nav-item'>
                        <Link to="autos" className='nav-link active text-danger' aria-current='page' href='#'>Autos</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="camionetas" className='nav-link active text-danger' aria-current='page' href='#'>Camionetas</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="contacto" className='nav-link active text-danger' aria-current='page' href='#'>Contacto</Link>
                    </li>
                </ul>
                <form className='d-flex'>
                    <input className='form-control me-2' type='search' placeholder='Buscar' aria-label='Search'/>
                    <button className='btn btn-outline-danger' type='submit'>Busqueda</button>
                    <CartWidget/>
                </form>
            </div>
        </div>
      </div>
        )
    }

export default NavBar
