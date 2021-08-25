import React, { useState } from 'react';
import './ItemCount.css'
export default function ItemCount() {
  const [cantidad, setCount] = useState(0);

  const handlerClick = () => {
    setCount(cantidad + 1);
  };
  const handlerClickRestar = () => {
    setCount(cantidad - 1);
  };

  return (
        <div>
          <h5 class="card-title">Agregar más</h5>
          <button className="btn-sm btn-primary" onClick={handlerClickRestar}>-</button>
          <label>{cantidad}</label>
          <button className="btn-sm btn-primary" onClick={handlerClick}>+</button>
        </div>
  );
}

export {ItemCount}

