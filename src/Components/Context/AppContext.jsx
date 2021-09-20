import {useState, createContext, useContext} from 'react'
import { autos } from '../../Utils/promesas'

const AppContext = createContext()

export const useAppContext = () => useContext(AppContext)


function AppContextProvider({children}) {
    const [car, setCar] = useState([ autos ])
   
    function agregarAlCarrito(prod, cant){
        setCar([...car, {item: prod, quantity: cant}])
    }

    const borrarListado=()=>{
        setCar([])
    }
   
   
    console.log(car)
    return (
        <AppContext.Provider value={{
            car,
            agregarAlCarrito,
            borrarListado
        }}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider
