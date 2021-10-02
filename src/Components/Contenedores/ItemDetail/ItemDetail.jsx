import ItemCount from '../ItemCount/ItemCount';

function ItemDetail({auto})  { 
    return (
        <>
            <div className="col-md-4">
                <img src={auto.imgUrl} className="img-fluid rounded-start" alt="..."/>
            </div>
            <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title">{auto.marca} {auto.modelo} {auto.año}</h5>
                    <p className="card-text">{auto.descripcion}</p>
                    <h5 className="card-text">${auto.precio}</h5>   
                    <ItemCount/>
                    </div>
                </div>
        </>
        )
    }
export default ItemDetail