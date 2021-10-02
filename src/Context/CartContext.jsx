import {createContext, useState} from 'react';

export const CartContext = createContext();
export const CartContextProvider = ({children}) => {

	const [cart, setCart] = useState([]);//Array vacío.
	//Agregar Items al Cart.
	const addItem = (item, quantity) => {
		if(isInCart(item.id)) {
			const updateCart = [...cart];
			updateCart.forEach((element) => {
				if(element.item.id === item.id) {
					element.quantity += quantity
				}
			})
			setCart(updateCart)
		} else {
			setCart([...cart, {item, quantity}])
		}
	}
	//Verificar si hay items en Cart.
	const isInCart = (id) => {
		return cart.find(element => element.item.id === id)
	}
	//Borrar todos los items de Cart.
	const clear = () => setCart ([])
	//Borrar item de Cart.
	const removeItem = (itemId) => {
		const cartFilter = cart.filter(element => element.item.id !== itemId)
		return setCart(cartFilter)
	}
	return(
		<CartContext.Provider value={{addItem, removeItem, cart, setCart, clear}}>
			{children}
		</CartContext.Provider>
	)
}