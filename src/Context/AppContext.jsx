import {useState, createContext, useContext} from 'react'

const AppContext = createContext()
export const useAppContext = () => useContext(AppContext)

function AppContextProvider({children}) {
    const [autos, setAuto] = useState([])
   
    function agregarAlCarrito(auto, cantidad){
        setAuto([...autos, {item: auto, quantity: cantidad}])
    }
    const borrarLista=()=>{
        setAuto([])
    }
   
return (
        <AppContext.Provider value={{
            autos,
            agregarAlCarrito,
            borrarLista
        }}>
            {children}
        </AppContext.Provider>
    )
}
export default AppContextProvider
