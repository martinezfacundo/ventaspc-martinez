import NavBar from './components/navBar/NavBar'; // importo el componente
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';
import Cart from './components/cart/Cart';
import { CartContext } from './components/context/CartContext';
import { useState } from 'react';

function App() {

  var productsArray = []

  const [cartData, setCartData] = useState(productsArray)

  return (
    <div className="App">
      <CartContext.Provider value={{cartData, setCartData, productsArray}}>
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
      </CartContext.Provider>
    </div>
  );
}

export default App;
