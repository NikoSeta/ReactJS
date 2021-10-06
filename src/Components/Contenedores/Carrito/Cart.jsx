import { Link } from "react-router-dom"
const Cart = () => {
    return (
        <div>
             <Link to={"/"}>
                <button className="btn-sm btn-warning"> Volver a Home</button>
            </Link>
           <button>Borrar Items</button>
        </div>
    )
}
export default Cart