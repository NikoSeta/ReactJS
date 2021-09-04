import React from 'react'
import { Link } from 'react-router-dom'
import ford from '../../../Img/Ford.jpg'

function Item(auto) {
    return (
        <div className="container">
                <div className="row">
                {Autos.map((auto)=>
                        <div className="card" style={{width: '18rem'}}>
                            <img src={ford} class="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{auto.marca}{auto.modelo}</h5>
                                <Link to ='/detalle'>
                                <a className="btn btn-primary">Ver más</a>
                                </Link>
                            </div>
                        </div>)}
                </div>            
        </div>
    )
}

export default Item
