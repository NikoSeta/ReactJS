import React from 'react'
import ItemContador from '../ItemCount/ItemContador';
import ford from '../../../Img/Ford.jpg'

function Item({autos}) {
    return (
        <div>
			<div className="card" style={{width: '25rem'}}>
                <img src ={ford} />
                <h5 className="card-title">{autos.marca} {autos.modelo} {autos.año}</h5>
                <p className="card-text">{autos.descripcion}</p>
                <h5 className="card-text">${autos.precio}</h5>
				<ItemContador/>
            </div>
		</div>
    )
}

export default Item
