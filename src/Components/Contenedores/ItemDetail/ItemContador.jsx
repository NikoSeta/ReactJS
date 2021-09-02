import '../../CSS/ItemCount.css'
import React, { useState } from 'react';
export default 
function Home() {
  const [cantidad, setCount] = useState(1);
  let btnResta = document.getElementsByClassName("resta")[0];
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
  return (
        <div>
          <a>Agregar más</a>
          <button type="button" class="resta btn-sm btn-primary disabled" role="button" aria-disabled="false" data-bs-toggle="button" autocomplete="off" onClick={handlerClickRestar}>-</button>
          <label>{cantidad}</label>
          <button className="btn-sm btn-primary" onClick={handlerClick}>+</button>
        </div>
  );
} 