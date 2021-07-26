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

        <Switch>
          <Route exact path="/">
            <NavBar />
            <ItemListContainer/>
          </Route>

          <Route exact path="/category/:categoryId">
            <NavBar />
            <ItemListContainer />
          </Route>

          <Route exact path='/item/:itemId'>
            <NavBar />
            <ItemDetailContainer />
          </Route>

          <Route exact path='/cart'>
            <NavBar />
            <Cart />
          </Route>
        </Switch>

      </Router>
      </CartProvider>
    </div>
  );
}

export default App;
