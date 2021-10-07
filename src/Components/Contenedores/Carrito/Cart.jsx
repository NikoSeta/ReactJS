import { useState } from "react";
import 'firebase/firestore'
import ListCart from "./ListCart";
import Form from "./Form";

const inatialState = {
    nombre: '',
    email:'',
    tel:'',
    domicilio:'',
}
const Cart = () => {
    //inicializando el estado 
    const [formData, setFormData] = useState(inatialState)    
    const inputs = [
        {type: 'text', placeholder:"Nombre", name:"nombre", value: formData.nombre},
        {type: 'text', placeholder:"Teléfono", name:"tel", value: formData.tel},
        {type: 'email', placeholder:"E-mail", name:"email", value: formData.email},
        {type: 'email', placeholder:"Confirme E-mail", name:"email2", value: formData.email2},
        {type:'domicilio', placeholder:"Domicilio", name:"domicilio", value: formData.domicilio},
    ]
    return (
        <div>
            <ListCart />
            <Form 
                inputs={inputs} 
                formData={formData} 
                setFormData={setFormData} 
                inatialState={inatialState}
            />      
        </div>
    )
}
export default Cart