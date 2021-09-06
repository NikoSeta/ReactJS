import {Autos} from '../ItemList/ItemList';


function ItemDetail( {Autos} ) {
    return (
            <div>
                            <h5 className="card-title">{Autos.marca}{Autos.modelo}{Autos.año}</h5>
                            <p className="card-text">{Autos.descrpcion}</p>
                            <h5 className="card-text">{Autos.precio}</h5>
        </div>            
    )
}
export default ItemDetail