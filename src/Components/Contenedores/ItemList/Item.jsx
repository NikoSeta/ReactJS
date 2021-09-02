import React from 'react'

function Item() {
    return (
        <>
        {Autos.map((auto)=> <div className='card'>
                                <div className='card-body'>
                                    <img src={auto.imgUrl} class="card-img-top" alt="..." />
                                    <h5 className='card-title'>{auto.marca} {auto.modelo}</h5>
                                    <a href='#' className='btn btn-danger'>Ver más</a>
                                </div>
                            </div>)}
                            
        </> 
    )
}

export default Item
