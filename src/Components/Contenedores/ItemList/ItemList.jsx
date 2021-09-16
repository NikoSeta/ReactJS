import Item from './Item';
import {autos} from '../../../Utils/promesas'


function ItemList() {
    return (
        <div className="container">
            <div className="row">
                 {autos.map((item)=>
                 (<Item key={item} autos={item}/>)  )  }       
            </div>
        </div>
    )
}
export default ItemList