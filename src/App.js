import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from './Components/NavBar/NavBar';
import ItemList from './Components/Contenedores/ItemList/ItemList';
import ItemDetail from './Components/Contenedores/ItemDetail/ItemDetail';


function App() {
  return (
    <Router>
      <div className='App'>
        <NavBar/>
          <Switch>
            <ItemList />
            <ItemDetail />
            <Route exact path = '/detalle' component={ItemDetail} />
            <Route exact path = '/contacto'  />
          </Switch>
      </div>
    </Router>
  );
}
export default App;
