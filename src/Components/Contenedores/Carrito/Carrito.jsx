
import { NavLink } from 'react-router-dom'
import { useAppContext } from '../../../AppContext/AppContext'

const Carrito = () => {

    const {borrarListado} = useAppContext() 

    return (
        <div>
            <NavLink to={"/"}>
                <button className="btn-sm btn-warning"> Volver a Home</button>
            </NavLink>
            <h5>Carrito</h5>
           <button onClick={borrarListado} >Borrar listado Cart</button>          
        </div>
    )
}
export default Carrito
