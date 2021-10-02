import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from './Components/NavBar/NavBar';
import ItemDetailContainer from './Components/Contenedores/ItemDetail/ItemDetailContainer';
import ItemListContainer from './Components/Contenedores/ItemList/ItemListContainer';
import Contacto from './Components/Contenedores/Contacto';
import Cart from './Components/Contenedores/Carrito/Cart';
import {CartContextProvider} from './Context/CartContext';

function App() {
  return (
    <Router>
      <div className='App'>
      <CartContextProvider>
        <NavBar/>
          <Switch>
            <Route exact path ='/' component = {ItemListContainer} />
            <Route exact path = '/detail/:id' component = {ItemDetailContainer}  />
            <Route exact path = '/contacto/:contacto' component = {Contacto} />
            <Route exact path ='/category/:category' component = {ItemListContainer} />
            <Route exact path ='/carrito/:carrito' component = {Cart} />
          </Switch>
      </CartContextProvider>
      </div>
    </Router>
  );
}
export default App;
