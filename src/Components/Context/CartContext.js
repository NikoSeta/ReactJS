import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const isInCart = id => cart.find(auto => auto.id === id);

  const addToCart = auto => {
    //Creamos una copia del state para no alterar el original
    const newCart = [...cart];
    //Verificamos si esta en el carrito
    const carsIsInCart = isInCart(auto.id);
    console.log(carsIsInCart)
    //si el producto esta en el carrito...
    if(carsIsInCart) {
      //Buscamos en el array del carrito el elemento y en una linea le sumamos la cantidad, se puede hacer separado
      newCart[newCart.findIndex(auto => auto.id === carsIsInCart.id)].quantity++;

      //Actualizamos el carrito
      setCart(newCart);
      console.log(cart);
      //return para cortar la ejecucion
      return;

    }

    //Si no esta en el carrito
    auto.quantity = 1;

    setCart([...newCart, auto]);
    console.log(cart)
  }

  const borrarFromCart = auto => {
    //Creamos una copia del state para no alterar el original
    const newCart = [...cart];

    //Verificamos si esta en el carrito
    const carsIsInCart = isInCart(auto.id);
    console.log(carsIsInCart);

    if(!carsIsInCart) {
      console.log('EL PRODUCTO NO ESTA EN EL CARRITO');
      return;
    }
    const borrarProduct = newCart.filter(prod => prod.id !== carsIsInCart.id);

    setCart(borrarProduct);
    console.log(cart)

  }

  const borrarCart = () => setCart([]);

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        addToCart,
        borrarFromCart,
        borrarCart
      }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
