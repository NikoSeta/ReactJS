import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from './Components/NavBar/NavBar';
import ItemDetailContainer from './Components/Contenedores/ItemDetail/ItemDetailContainer';
import ItemListContainer from './Components/Contenedores/ItemList/ItemListContainer';
import Contacto from './Components/Contenedores/Contacto';
import Cart from './Components/Contenedores/Carrito/Cart';
import AppContextProvider from './Context/AppContext';
import { CartContext } from './Context/CartContext';

function App() {
  return (
    <Router>
      <div className='App'>
        <AppContextProvider>
          <CartContext.Provider>
          <NavBar/>
            <Switch>
              <Route exact path ='/' component = {ItemListContainer} />
              <Route exact path = '/id/:car' component = {ItemDetailContainer}  />
              <Route exact path = '/contacto/:contacto' component = {Contacto} />
              <Route exact path ='/category/:category' component = {ItemListContainer} />
              <Route exact path ='/carrito/:carrito' component = {Cart} />
            </Switch>
            </CartContext.Provider>
        </AppContextProvider>
      </div>
    </Router>
  );
}
export default App;
