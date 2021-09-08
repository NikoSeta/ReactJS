import React from 'react'
import { NavLink } from 'react-router-dom'
import ford from '../../../Img/Ford.jpg'

function Item(auto) {
    return (
        <div key={auto.id} className="container">
            <div className="row">
                <div className="card" style={{width: '18rem'}}>
                    <img src={ford} class="card-img-top"/>
                    <div className="card-body">
                    <h5 className="card-title">{auto.marca} {auto.modelo}</h5>
                    <NavLink to ='/detalle'><a className="btn btn-primary">Ver más</a></NavLink>
                    </div>
                </div>
            </div>            
        </div>    
    )
}

export default Item
