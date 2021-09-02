import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from './Components/NavBar/NavBar';
import Item from './Components/Contenedores/ItemList/Item'

function App() {
  return (
    <Router>
      <div className='App'>
        <NavBar/>
          <Switch>
            <Route exact path = '/Lista/:category' />
            <Route exact path = '/detalle' />
          </Switch>
      </div>
    </Router>
  );
}
export default App;
