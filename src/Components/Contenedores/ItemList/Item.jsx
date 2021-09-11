import React from 'react'
import { NavLink } from 'react-router-dom'
import ford from '../../../Img/Ford.jpg'
import { autos } from '../../../Utils/promesas'


function Item() {
    return (
        <div className="col-lg">
            <div className="card" style={{width: '25rem'}}>
                <img src={ford} class="card-img-top"/>
                <div className="card-body">
                <h5 className="card-title">{autos.marca} {autos.modelo}</h5>
                <p>Precio ${autos.precio}</p>
                <NavLink to ={'/detalle/${id}'}><a className="btn btn-primary">Ver más</a></NavLink>
                </div>
            </div>
        </div>            
            
    )
}

export default Item
