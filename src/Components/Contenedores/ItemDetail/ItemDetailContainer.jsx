import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { autos, getAuto } from '../../../Utils/promesas'
import ItemDetail from "./ItemDetail";

function ItemDetailContainer(props) {
    const [ auto, setAuto ] = useState({})//inicia como objeto vacío porque va a recibir un objeto
    const [loading, setLoading] = useState(true)
    const id = props.match.params.id;
    const promise = new Promise ((resolve, reject) =>  {
        const buscarAuto = autos.find((p) => p.id === parseInt(id));
        if (buscarAuto){
            resolve(buscarAuto)
        }else{
            reject('no hay autos');
        };
    });
    useEffect(() => {
        promise.then(res => setTimeout (() => setAuto(res), 2000))
        .catch(err => console.log(err));
    }, []);//con [] se ejecuta solo una vez.
    useEffect(() => {
        getAuto
        .then(resp => {
            setAuto(resp)
            setLoading(false)
        })
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
