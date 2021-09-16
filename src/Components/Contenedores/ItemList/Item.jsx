import React, {useContext} from 'react'
import { NavLink } from 'react-router-dom'
import ford from '../../../Img/Ford.jpg'
import { useCartContext } from '../../Context/CartContext';
import { useAppContext } from '../../Context/AppContext';

function Item({autos}) {
    const { addToCart } = useCartContext();
    const { products } = useAppContext();

  const handleClick = id => {
    const findProductInDB = products.find(prod => prod.id === id);
    console.log('DESDE ITEM: ', findProductInDB);

    if (!findProductInDB) {
      console.log('Error: no se agrego al carrito.');
      return;
    }
    addToCart(findProductInDB);
  };

    return (
    
        <div className="col-lg">
            {variable}
            {prueba}
            <div className="card" style={{width: '25rem'}}>
                <img src={ford} class="card-img-top"/>
                <div className="card-body">
                <h5 className="card-title">{autos.marca} {autos.modelo}</h5>
                <p>Precio ${autos.precio}</p>
                <NavLink to ={'/detalle/${id}'}><a className="btn btn-primary">Ver más</a></NavLink>
                </div>
            </div>
        </div>            
            
    )
}

export default Item
