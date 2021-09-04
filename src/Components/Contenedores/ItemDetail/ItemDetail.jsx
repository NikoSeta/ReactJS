import {Autos} from '../ItemList/ItemList';


function ItemDetail( {Autos} ) {
    
    return (
        <div>
        {Autos.map((auto)=>
        <div class="card mb-3" style={{maxWidth: '540px'}}>
            <div class="row g-0">
                <div class="col-md-4">
                    <img src={auto.imgUrl} class="img-fluid rounded-start" alt="..."/>
                    </div>
                    <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">{auto.marca}{auto.modelo}{auto.año}</h5>
                        <p class="card-text">{auto.descrpcion}</p>
                        <h5 class="card-text">{auto.precio}</h5>
                    </div>
                </div>
            </div>
        </div>
        )}
        </div>
    )
}
export default ItemDetail