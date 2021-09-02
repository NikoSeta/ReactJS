
import ItemCount from './ItemContador'

function ItemDetail(Autos) {
    return (
        <>
        {Autos.map((auto)=> <div className='card'>
                                <div className='card-body'>
                                    <img src={auto.imgUrl} class="card-img-top" alt="..." />
                                    <h5 className='card-title'>{auto.marca} {auto.modelo}</h5>
                                    <p className='card-text'>{auto.año}</p>
                                    <p className='card-text'>{auto.descripcion}</p>
                                    <ItemCount/>
                                    <a href='#' className='btn btn-danger'>Comprar</a>
                                </div>
                            </div>)}
                            
        </> 
    )
}


