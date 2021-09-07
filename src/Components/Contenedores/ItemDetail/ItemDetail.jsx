import ItemContador from './ItemContador';
import {Autos} from '../ItemDetail/ItemDetailContainer'

function ItemDetail()  {
    return (
            <div>
                <h5 className="card-title">{Autos.marca}{Autos.modelo}{Autos.año}</h5>
                <p className="card-text">{Autos.descrpcion}</p>
                <h5 className="card-text">{Autos.precio}</h5>
                <ItemContador/>
            </div>       
    )
}
export default ItemDetail