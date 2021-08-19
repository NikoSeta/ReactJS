import './Card1.css'
import React from 'react'
import ImgCard from '../Img/Ford.jpg'
function Card1() {
    return (
        <div>
            <div className='card'>
            <img src= {ImgCard} className='card-img-top' alt='logo'/>
            <div className='card-body'>
                <h5 className='card-title'>Ford Focus RS</h5>
                <p className='card-text'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href='#' className='btn btn-danger'>Comprar</a>
            </div>
            </div>
        </div>
        )
    }

export default Card1;