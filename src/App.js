import NavBar from './components/navBar/NavBar'; // importo el componente
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import './App.css';

function App() {

  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="Hola soy Item List Container"/>
    </div>
  );
}

export default App;
