import React from 'react';
import { useCartContext } from '../../Context/CartContext';
import CartItem from './CartItem';

export default function Cart() {
  const { cart, deleteCart } = useCartContext();

  return (
    <div className="container">
        <button className="btn-warning">Volver a home</button>
        <h1 className="text-warning">Carrito</h1>

        {cart.length !== 0 && (
            <>
            <button className="btn-sm btn-warning" onClick={deleteCart}>Limpiar carrito</button>
            {cart.map(product => (
                <CartItem key={product.id} product={product} />
            ))}
            </>
        )}
        {cart.length === 0 && <p>No hay productos en el carrito</p>}
    </div>
  );
}


