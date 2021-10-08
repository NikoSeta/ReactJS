import ItemCount from '../ItemCount/ItemCount';
import {useAppContext} from '../../../Context/AppContext'

function ItemDetail({car})  { 
    const { agregarAlCarrito } = useAppContext()
    const {imgUrl, marca, modelo, año, descripcion, precio} = car
    const addItem=(cant)=>{  
        console.log(cant);
        agregarAlCarrito(car, cant)        
    }
    return (
        <>
            <div className="col-md-4">
                <img src={imgUrl} className="img-fluid rounded-start" alt="..."/>
            </div>
            <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title">{marca} {modelo} {año}</h5>
                    <p className="card-text">{descripcion}</p>
                    <h5 className="card-text">${precio}</h5>   
                    <ItemCount initial={1} addItem={addItem}/>
                    </div>
                </div>
        </>
    )
}
export default ItemDetail