import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from './Components/NavBar';
import ItemList from './Components/ItemList';

function App() {
  return (
    <div className='App'>
      <NavBar/>
      <ItemList/>
    </div>
  );
}
export default App;
