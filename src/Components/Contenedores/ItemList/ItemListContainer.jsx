import ItemList from './ItemList'
import {useState, useEffect} from 'react'
import { useParams } from 'react-router'
import { auto } from '../../../Utils/promesas'

function ItemListContainer() {
    const [autos, setItems] = useState([])

    const { category } = useParams()

    useEffect(() => {

        if(category===undefined){
            auto
            .then((resp)=> setItems(resp) ) // guarda en estado.
         }else{
             auto
             .then((resp)=> setItems(resp.filter( r => category===r.categoria)) ) 
        }
    }, [category])

    return (
        <>
        <ItemList autos={autos} />
        </>
    )
}

export default ItemListContainer
