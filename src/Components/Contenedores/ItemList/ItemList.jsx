import Item from './Item';
import {autos} from '../../../Utils/promesas'



function ItemList() {
    return (
        <div className="container">
            <div className="row">
                 {autos.map((id, marca, modelo)=>
                 (<Item key={id, marca, modelo}/>)  )  }       
            </div>
        </div>
    )
}
export default ItemList