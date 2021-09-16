import { autos } from '../../../Utils/promesas'
import React from 'react'
import Item from './Item';


export default function ItemDetail() {
	
	return (
		<div className="container">
            <div className="row">
                 {autos.map((item)=>
                 (<Item key={item} autos={item}/>)  )  }       
            </div>
        </div>
)}

