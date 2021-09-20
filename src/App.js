import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from './Components/NavBar/NavBar';
import ItemDetailContainer from './Components/Contenedores/ItemDetail/ItemDetailContainer';
import ItemListContainer from './Components/Contenedores/ItemList/ItemListContainer';
import Contacto from './Components/Contacto/Contacto';
import CartContextProvider from './Components/Context/CartContext';
import Carrito from './Components/Contenedores/Carrito/Carrito';



function App() {
  return (
    <CartContextProvider>
      <Router>
        <div className='App'>
          <NavBar/>
            <Switch>  
              <Route exact path ='/' component = {ItemListContainer} />
              <Route exact path ='/category/:category' component = {ItemListContainer} />
              <Route exact path = '/contacto/:contacto' component = {Contacto} />
              <Route exact path = 'carrito/:carrito' component ={Carrito}/>
            </Switch>
        </div>
      </Router>
    </CartContextProvider>
  );
}
export default App;
