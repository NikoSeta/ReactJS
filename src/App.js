import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from './Components/NavBar';
import Card1 from './Components/Card1';
import { ItemList } from './Components/ItemList';

function App() {
  return (
    <div className='App'>
      <NavBar/>
      <Card1/>
      <ItemList/>
      
    </div>
  );
}
export default App;
