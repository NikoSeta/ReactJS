import ItemList from './ItemList'
import {useState, useEffect} from 'react'
import { useParams } from 'react-router'
import { getAuto } from '../../../Utils/promesas'
import {getFirestore} from '../../../Service/getFirebase'

function ItemListContainer() {
    const [autos, setItems] = useState([])
    const [bool, setBool] = useState(true)
    const { category } = useParams()

    useEffect(() => {       
        const db = getFirestore()
        const queryDB = db.collection('items').get()
        .then(data => {
            if(data.size===0){
                console.log('no hay nada')
            }
            setItems( data.docs.map(item => ( { id: item.id, ...item.data() } ) ) )
            
        })       
    }, [category])
 
    
    const handleClick=(e)=>{
        e.preventDefault() 
        setBool(!bool)
    }

    const handleAgregar=()=>{
        setItems([
            ...items, { }
        ])
     }
 
    

    return (
        <>
        <ItemList autos={autos} />
        <button onClick={handleClick}>Cambiar estado </button>           
        <button onClick={handleAgregar}>Agregar Item </button>           
        </>
    )
}

export default ItemListContainer
