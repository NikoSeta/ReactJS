import ItemList from './ItemList'
import {useState, useEffect} from 'react'
import { useParams } from 'react-router'
import { getFirestore } from '../../DataBase/Firebase'

function ItemListContainer() {
    const [autos, setItems] = useState([])
    const { category } = useParams()
    useEffect(() => {       
        const dataBase = getFirestore()
        const queryDB = dataBase.collection('autos')
        const conditionQuery =  category ? 
                queryDB.where('categoria', '==', category) 
            : 
                queryDB 
        conditionQuery.get()
        .then(data => {
            if(data.size===0){
                alert('No hay resultados')
            }
            setItems( data.docs.map(item => ( {id: item.id, ...item.data()} ) ) )                
        })  
    }, [category])
    return (
        <>
        <ItemList autos={autos} />
        </>
    )
}
export default ItemListContainer