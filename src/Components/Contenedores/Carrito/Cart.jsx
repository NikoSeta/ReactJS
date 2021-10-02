import { useContext, useState } from "react";
import { useAppContext } from "../../../Context/AppContext"
import { getFirestore } from "../../DataBase/Firebase";
import { CartContext } from "../../../Context/CartContext";
import Form from './Form'
import "firebase/firestore"

const Cart = () => {
    const initialState = []
    const {clear} =useContext (CartContext)
    //inicializando el estado 
    const [formData, setFormData] = useState(initialState)   
    //traer del context
    const {autos , precioTotal, borrarListado} = useAppContext() 
    //manejo de los campos del formulario
    function handleChange(e) {        
        setFormData( {...formData,[e.target.name]: e.target.value} )
    }
    function handleSubmit(e){
        e.preventDefault()
        const newOrder={
            buyer: formData,
            items: autos,
            total: precioTotal()
        }

        const db = getFirestore()
        const orders = db.collection('orders')

        //controlar si hay productos que quiero agregar 
        orders.add(newOrder)
        .then(resp => alert(`la orden de compra es: ${resp.id}`))
        .catch(err => console.log(err))
        .finally(()=>{
            setFormData(initialState)
            borrarListado()
        })
    }

    return (
        <div>
           {autos.map(pro =>
            <div> 
                <p>{ pro.item.name}</p>
                <p>{ pro.quantity}</p>
            </div>
            )}
            {precioTotal()}
            <Form onSubmit={handleSubmit}onChange={handleChange}/>
           <button onClick={clear} >Borrar Items</button>
        </div>
    )
}
export default Cart