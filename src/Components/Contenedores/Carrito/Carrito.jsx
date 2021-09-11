
import { Link } from 'react-router-dom'
import { useAppContext } from '../../../AppContext/AppContext'


const Carrito = () => {

    const {borrarListado} = useAppContext() 

    return (
        <div>
           Hola soy el carrito
           <button onClick={borrarListado} >Borrar listado Cart</button>
           <Link to={"/"}><button> Volver a Home</button></Link>
        </div>
    )
}

export default Carrito
