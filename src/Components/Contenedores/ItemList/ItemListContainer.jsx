import ItemList from './ItemList'
import {useState, useEffect} from 'react'
import { useParams } from 'react-router'
import { getAuto } from '../../../Utils/promesas'

function ItemListContainer() {
    const [autos, setItems] = useState([])
    const { category } = useParams()
    useEffect(() => {
        if(category===undefined){
            getAuto
            .then((resp)=> setItems(resp) )
         }else{
             getAuto
             .then((resp)=> setItems(resp.filter( r => r.categoria === category )) )
        }
    }, [category])
    return (
        <>
        <ItemList autos={autos} />
        </>
    )
}

export default ItemListContainer