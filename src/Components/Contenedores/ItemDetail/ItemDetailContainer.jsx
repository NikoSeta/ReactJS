import { useState, useEffect, useParams } from "react";
import ItemDetail from "./ItemDetail";
import { getFirestore } from "../../DataBase/Firebase";

function ItemDetailContainer(props) {
    const [ auto, setAuto ] = useState({})//inicia como objeto vacío porque va a recibir un objeto
    const [ categorias, setCategorias ] = useState([])
    const [loading, setLoading] = useState(true)
    const {car} = useParams()
    useEffect((car) => {
        const db = getFirestore()
        db.collection('autos').doc(car).get()
        .then(resp => {
            if(resp.exists){
                setAuto({id: resp.id, ...resp.data()})
            }
        })
        .catch(err=>alert(err))
        .finally(()=> setLoading(false))
    }, [car])

    useEffect(() => {
        const db = getFirestore()
        db.collection('categorias').get()
        .then(resp => {
            if(resp.size!==0){
                setCategorias( resp.docs.map(cat => ( {id: cat.id, ...cat.data()} )) )
            }
        } )
        .catch(err=>console.log(err))
        .finally(()=> setLoading(false))
    }, [])
    return (
        <>
            {loading ? 
                <h3 className="text-warning">Cargando Producto...</h3>
                : 
                <div>
                    <ItemDetail auto={auto}/>                   
                </div>
            }
        </>
    )
}

export default ItemDetailContainer
