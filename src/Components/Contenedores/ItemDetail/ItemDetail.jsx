import ItemContador from '../ItemCount/ItemContador';

function ItemDetail(props)  {
    const {auto} = props
    return (
            <div>
                <h5 className="card-title">{auto.marca}{auto.modelo}{auto.año}</h5>
                <p className="card-text">{auto.descrpcion}</p>
                <h5 className="card-text">{auto.precio}</h5>
                <ItemContador/>
            </div>       
    )
}
export default ItemDetail