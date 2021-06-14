import NavBar from './components/NavBar'; // importo el componente
import ItemListContainer from './components/ItemListContainer';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer {... {greeting:'Hola soy Item List Container'}}/>
    </div>
  );
}

export default App;
