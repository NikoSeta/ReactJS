import React from 'react'
import { useAppContext } from '../../../Context/AppContext'

const ListCart = () => {
    //traer del context
    const {auto , precioTotal} = useAppContext() 
    return (
        <>
            {auto.map(pro =>  
                <div> 
                    <p>{ pro.item.name}</p>
                    <p>{ pro.quantity}</p>
                </div>
            )}
            {precioTotal()}
        </>
    )
}
export default ListCart
