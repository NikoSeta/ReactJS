import React from 'react'
import { useAppContext } from '../../../Context/AppContext'

const ListCart = () => {
    const {auto , precioTotal} = useAppContext() 
    return (
        <>
            {auto.map(pro =>  
                <div> 
                    <h5>{ pro.item.marca } { pro.item.modelo } Cantidad: { pro.quantity }</h5>
                </div>
            )}
            <h3>Total ${precioTotal()}</h3>
        </>
    )
}
export default ListCart