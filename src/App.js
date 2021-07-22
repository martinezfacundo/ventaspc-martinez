import NavBar from './components/navBar/NavBar'; // importo el componente
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';
import Cart from './components/cart/Cart';
import { CartProvider } from './context/CartContext';

function App() {

  return (
    <div className="App">
    <CartProvider>
      <Router>
      <NavBar />

        <Switch>
          <Route exact path="/">
            <ItemListContainer/>
          </Route>

          <Route exact path="/category/:categoryId">
            <ItemListContainer />
          </Route>

          <Route exact path='/item/:itemId'>
            <ItemDetailContainer />
          </Route>

          <Route exact path='/cart'>
            <Cart />
          </Route>
        </Switch>

      </Router>
      </CartProvider>
    </div>
  );
}

export default App;
