import { useState, useEffect } from "react"
import { getAuto } from "../../../Utils/promesas";
import ItemDetail from "./ItemDetail";


function ItemDetailContainer (){
    const [ auto, setAuto ] = useState({})
    const [loading, setloading] = useState(true)
    
    useEffect(() => {
       getAuto
       .then(resp => {
           setAuto(resp)
           setloading(false)
       }) 
    }, [])
    
    return (
        <>
            {loading ? 
                    <h2 className="text-warning">Cargando Productos...</h2>
                : 
                    <ItemDetail auto={auto}  />
            }
            
        </>
    )
}

export default ItemDetailContainer
