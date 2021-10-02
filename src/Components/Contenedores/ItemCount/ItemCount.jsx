import './ItemCount.css'
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function ItemCount({addItem}) {
  const [cantidad, setCount] = useState(1);
  const [cambiarBtn, setCambiarBtn] = useState(false)
  const handlerClick = () => {
      setCount(cantidad + 1);
  }; //Funcion para sumar 1.

  const handlerClickRestar = () => {
    if (cantidad === 1) {
    return false 
    //Si está en "cantidad 1" el boton resta se bloquea.
    } else {
      setCount(cantidad - 1);
    }//Funcion para restar 1.
  };

  const onAdd = () => {
    setCount(1)
    setCount(cantidad)
    setCambiarBtn(true)
  }

  return (
    <div>
      <p className="text-warning text-decoration-none">Agregar más</p>
      <button className="resta btn-sm btn-warning disabled"  aria-disabled="false" autocomplete="off" onClick={handlerClickRestar}>-</button>
      <label className="text-warning text-decoration-none">{cantidad}</label>
      <button className="btn-sm btn-warning" onClick={handlerClick}>+</button>
      {
        cambiarBtn ? <Link to={'/carrito/carrito'}><button  className="btn-sm btn-warning">Terminar compra</button></Link>
                  :  <button className="btn-sm btn-warning" onClick={addItem, onAdd}>Agregar al carrito</button> 
      }
    </div>
  )
} 
export default ItemCount