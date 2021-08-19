import React from 'react'
import './NavBar.css'
import { CartWidget } from './CartWidget'
import ImgTitulo from '../Img/ImgTitulo.jpg'
function NavBar() {
    return (
        <div className='navbar navbar-expand-lg'>
        <div className='container'>
            <img src={ImgTitulo}/>
            <a className='navbar-brand text-danger' href='#'>Car Sale</a>
            <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
                <span className='navbar-toggler-icon'></span>
            </button>
            <div className='collapse navbar-collapse' id='navbarSupportedContent'>
                <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                    <li className='nav-item'>
                    <a className='nav-link active text-danger' aria-current='page' href='#'>Home</a>
                    </li>
                    <li className='nav-item'>
                    <a className='nav-link active text-danger' aria-current='page' href='#'>Autos</a>
                    </li>
                    <li className='nav-item'>
                    <a className='nav-link active text-danger' aria-current='page' href='#'>Camionetas</a>
                    </li>
                    <li className='nav-item'>
                    <a className='nav-link active text-danger' aria-current='page' href='#'>Camiones</a>
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
