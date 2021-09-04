import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
​​
function ItemDetailContainer() {
    const [ Autos, setAutos ] = useState({})
    const [loading, setloading] = useState(true)
​
    useEffect(() => {
       getAuto
       .then(resp => {
           setAutos(resp)
           setloading(false)
       }) 
    }, [])
​
    console.log(Autos);
​
    return (
        <>
        {loading ? 
            <h2>Cargando Productos...</h2>:<ItemDetail Autos={auto}  />
            }        
        </>
    )
}
​
export default ItemDetailContainer
