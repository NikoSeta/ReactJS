import './ItemCount.css'
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function ItemCount({initial, stock, addItem}) {
  const [cantidad, setCount] = useState(initial);
  const [cambiarBtn, setCambiarBtn] = useState(false)
  const handlerClick = () => {setCount(cantidad + 1)}
  const handlerClickRestar = () => {if (cantidad > initial) setCount(cantidad - 1)}
  const handlerOnAdd = () => {
    addItem(cantidad)
    setCount(initial)
    setCambiarBtn(true)
  }
  return (
    <div>
      <button className="resta btn-sm btn-warning disabled" aria-disabled="false" autocomplete="off" onClick={handlerClickRestar}>-</button>
      <label className="text-warning text-decoration-none">{cantidad}</label>
      <button className="btn-sm btn-warning" onClick={handlerClick}>+</button>
      {cambiarBtn ? <Link to={'/carrito/carrito'}><button  className="btn-sm btn-warning">Terminar compra</button></Link>
                  :  <button className="btn-sm btn-warning" onClick={handlerOnAdd}>Agregar al carrito</button>}
    </div>
  )
};
export default ItemCount