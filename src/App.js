import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from './Components/NavBar/NavBar';
import ItemDetailContainer from './Components/Contenedores/ItemDetail/ItemDetailContainer';
import ItemListContainer from './Components/Contenedores/ItemList/ItemListContainer';
import Contacto from './Components/Contenedores/Contacto';
import Cart from './Components/Contenedores/Cart/Cart';

function App() {
  return (
    <Router>
      <div className='App'>
        <NavBar/>
          <Switch>  
            <ItemListContainer/>
            <Route exact path ='./categoria/:category' component = {ItemListContainer} />
            <Route exact path = '/detalle/:detalle' component = {ItemDetailContainer}  />
            <Route exact path = '/contacto/:contacto' component = {Contacto} />
            <Route exact path = '/carrito/:carrito' component={Cart}/>
          </Switch>
      </div>
    </Router>
  );
}
export default App;
