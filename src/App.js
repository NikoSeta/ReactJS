import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from './Components/NavBar/NavBar';
import ItemDetailContainer from './Components/Contenedores/ItemDetail/ItemDetailContainer';
import ItemListContainer from './Components/Contenedores/ItemList/ItemListContainer';
import Contacto from './Components/Contenedores/Contacto';


function App() {
  return (
    <Router>
      <div className='App'>
        <NavBar/>
          <Switch>  
            <Route exact path ='/' component = {ItemListContainer} />
            <Route exact path = '/detail/:id' component = {ItemDetailContainer}  />
            <Route exact path = '/contacto/:contacto' component = {Contacto} />
            
          </Switch>
      </div>
    </Router>
  );
}
export default App;
