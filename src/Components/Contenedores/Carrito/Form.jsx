import { getFirestore } from '../../DataBase/Firebase'
import firebase from "firebase";
import { useAppContext } from '../../../Context/AppContext';

const Form = ({inputs, formData, setFormData, inatialState}) => {    
    const {auto , precioTotal, borrarListado} = useAppContext() 
    function handleChange(e) {
        setFormData(
            {...formData, [e.target.name]: e.target.value}
        )
    } 
    function handleSubmit(e){
        e.preventDefault()
        const newOrder={
            buyer: formData,
            itmes: auto,
            date: firebase.firestore.Timestamp.fromDate(new Date()),
            total: precioTotal()
        }
    const db = getFirestore()
    const orders = db.collection('orders')
    orders.add(newOrder)
        .then(resp => alert(`Gracias por su compra su número de orden es: ${resp.id}`))
        .catch(err => console.log(err))
        .finally(()=>{
             setFormData(inatialState)
             borrarListado()
        })
    }
    return (
        <>
             <form onSubmit={handleSubmit} onChange={handleChange}>
                {inputs.map(inp => <input type={inp.type} placeholder={inp.placeholder} name={inp.name} value={inp.value} />)}
                <button className="btn-warning">Terminar compra</button>
            </form>  
        </>
    )
}
export default Form