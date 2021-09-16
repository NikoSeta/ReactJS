import ItemContador from '../ItemCount/ItemContador';
import { autos } from '../../../Utils/promesas'
import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { CartContext } from '../../Context/CartContext'

export default function ItemDetail() {
	const {id} = useParams()
	const {addItem, setCart, cart, removeItem} = useContext(CartContext)
	const itemId = '1'
	const clear = () => setCart([])
	if(itemId === id) {
	return (
		<div>
			<ItemContador addItem={addItem} />
			<button onClick={clear}>Borrar items</button>
			{cart.length > 0 && (
				cart.map(element => {
					return (
						<div>
                            <img src ={autos.imgUrl} />
                            <h5 className="card-title">{autos.marca}{autos.modelo}{autos.año}</h5>
                            <p className="card-text">{autos.descrpcion}</p>
                            <h5 className="card-text">{autos.precio}</h5>
                            <button onClick={() => removeItem(element.item.id)}>Borrar del carrito</button>
                        </div>
					)
				})
			)}
		</div>
	)
	}
	return(
		<div>
            <img src ={autos.imgUrl} />
            <h5 className="card-title">{autos.marca}{autos.modelo}{autos.año}</h5>
            <p className="card-text">{autos.descrpcion}</p>
            <h5 className="card-text">{autos.precio}</h5>
            <button >Borrar del carrito</button>
        </div>
	)
}
