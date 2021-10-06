import {useState, createContext, useContext} from 'react'

const AppContext = createContext()
// función para usar el contexto
export const useAppContext = () => useContext(AppContext)
// inyectar los estados y funciones globales
function AppContextProvider({children}) {
        const [auto, setAuto] = useState([])
        function agregarAlCarrito(prod, cant){
            setAuto([...auto, {item: prod, quantity: cant}])
        }
        const borrarListado=()=>{
            setAuto([])
        }
return (
        <AppContext.Provider value={{
            auto,
            agregarAlCarrito,
            borrarListado,
        }}>
            {children}
        </AppContext.Provider>
    )
}
export default AppContextProvider