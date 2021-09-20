import { useState, useEffect } from "react"
import { useParams } from "react-router";
import { getAuto } from "../../../Utils/promesas";
import ItemDetail from "./ItemDetail";


function ItemDetailContainer (){
    const [ auto, setAuto ] = useState({})
    const [loading, setloading] = useState(true)
    const { selector } = useParams();

    useEffect( () => {
        if (selector) {
            getAuto.then((res) =>{
                setAuto(
                    res.filter ((categorias)=> categorias.categoria === selector));
            });
        }else {
            getAuto.then((res) => {setAuto(res);})
        }
    }, [selector])
    
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
