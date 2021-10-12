import React from 'react'
import { NavLink } from 'react-router-dom'
import '../../CSS/Card1.css'

function Item({ autos }) {
    const {id, marca, modelo, año, precio, imgId} = autos
    return (
        <div className="col-lg" id="space">
            <div className="card" style={{width: '25rem'}}>
                <img src={imgId} class="card-img-top" alt={marca}/>
                <div className="card-body">
                    <h3 className="card-title text-warning">{marca} {modelo}</h3>
                    <h5 className="text-warning">Año {año}</h5>
                    <h5 className="text-warning">Precio ${precio}</h5>
                    <NavLink to ={`/id/${id}`}><p className="btn btn-danger">Ver más</p></NavLink>
                </div>
            </div>
        </div>
    )
}
export default Item
