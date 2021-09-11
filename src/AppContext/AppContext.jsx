import {useState, createContext, useContext} from 'react'

const AppContext = createContext()

export const useAppContext = () => useContext(AppContext)


function AppContextProvider({children}) {
    const [auto, setAuto] = useState([{id: 1, marca: "Volkswagen", modelo: "Fox", año: 2012, categoria: "auto", descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", precio: 9000, imgUrl: "./Img/VW-Fox.jpg"}])
   
    function agregarAlCarrito(auto, cantidad){
        setAuto([...auto, {item: auto, quantity: cantidad}])
    }

    const borrarListado=()=>{
        setAuto([])
    }
   
   
    console.log(auto)
    return (
        <AppContext.Provider value={{
            auto,
            agregarAlCarrito,
            borrarListado
        }}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider
