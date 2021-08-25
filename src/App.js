import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from './Components/NavBar';
import Cards from './Components/Card1';
import { ItemList } from './Components/ItemList';

function App() {
  return (
    <div className='App'>
      <NavBar/>
      <Cards/>
      <ItemList/>
      
    </div>
  );
}
export default App;
