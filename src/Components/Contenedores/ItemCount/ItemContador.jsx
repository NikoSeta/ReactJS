import '../../CSS/ItemCount.css'
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function ItemContador() {
  const [cantidad, setCount] = useState(1);
  const [cambiarBtn, setCambiarBtn] = useState(false)

  const handlerClick = () => {
      setCount(cantidad + 1);
  };
  const handlerClickRestar = () => {
    if (cantidad === 1) {
    return false
    } else {
      setCount(cantidad - 1);
    }
  };
  const onAdd = () => {
    setCount(1)
    setCount(cantidad)
    setCambiarBtn(true)
  }

  return (
    <div>
      <a className="text-decoration-none">Agregar más</a>
      <button type="button" class="resta btn-sm btn-warning disabled" role="button" aria-disabled="false" data-bs-toggle="button" autocomplete="off" onClick={handlerClickRestar}>-</button>
      <label className="text-decoration-none">{cantidad}</label>
      <button className="btn-sm btn-warning" onClick={handlerClick}>+</button>
      {
        cambiarBtn ? <Link to={'/carrito/carrito'}><button  className="btn-sm btn-warning">Terminar compra</button></Link>
                  :  <button className="btn-sm btn-warning" onClick={onAdd}>Agregar al carrito</button> 
      }
    </div>
  )
} 

export default ItemContador
