import {useState, createContext, useContext} from 'react'

const AppContext = createContext()
// función para usar el contexto.
export const useAppContext = () => useContext(AppContext)
// inyectar los estados y funciones globales.
function AppContextProvider({children}) {
        const [auto, setAuto] = useState([])
        function agregarAlCarrito(prod, cant){
            setAuto([...auto, {item: prod, quantity: cant}])
        }//Agregar objetos al cart
        const borrarListado=()=>{
            setAuto([])
        }// Borra todo los items del Cart.
        const precioTotal =()=>{
            return auto.reduce((acum, valor)=>(acum + (valor.quantity * valor.item.precio)), 0) 
        }// Suma el costo total de los items.
        const iconCart = () => {
            return auto.reduce( (acum, valor)=> acum + valor.quantity, 0) 
        }// Muestra cantidad de items en el Icono Carrito.
      
return (
        <AppContext.Provider value={{
            auto,
            agregarAlCarrito,
            borrarListado,
            precioTotal,
            iconCart,
        }}>
            {children}
        </AppContext.Provider>
    )
}
export default AppContextProvider