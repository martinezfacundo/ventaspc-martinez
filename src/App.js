import NavBar from './components/navBar/NavBar'; // importo el componente
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import './App.css';
import ItemCount from './components/itemCount/ItemCount';

function App() {

  const onAdd = (stock) => {
      console.log('Agregado, stock actual:',stock)
  }

  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="Hola soy Item List Container"/>
      <ItemCount initial={1} stock={15} onAdd={onAdd} />
    </div>
  );
}

export default App;
