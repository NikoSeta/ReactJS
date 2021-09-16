import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const isInCart = id => cart.find(prod => prod.id === id);

  const addToCart = product => {
    //Creamos una copia del state para no alterar el original
    const newCart = [...cart];
    //Verificamos si esta en el carrito
    const productIsInCart = isInCart(product.id);
    console.log(productIsInCart)
    //si el producto esta en el carrito...
    if(productIsInCart) {
      //Buscamos en el array del carrito el elemento y en una linea le sumamos la cantidad, se puede hacer separado
      newCart[newCart.findIndex(prod => prod.id === productIsInCart.id)].quantity++;

      //Actualizamos el carrito
      setCart(newCart);
      console.log(cart);
      //return para cortar la ejecucion
      return;

    }

    //Si no esta en el carrito
    product.quantity = 1;

    setCart([...newCart, product]);
    console.log(cart)
  }

  const borrarFromCart = product => {
    //Creamos una copia del state para no alterar el original
    const newCart = [...cart];

    //Verificamos si esta en el carrito
    const productIsInCart = isInCart(product.id);

    console.log(productIsInCart);

    if(!productIsInCart) {
      console.log('EL PRODUCTO NO ESTA EN EL CARRITO');
      return;
    }

    const borrarProduct = newCart.filter(prod => prod.id !== productIsInCart.id);

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
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
