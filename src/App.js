import NavBar from './components/navBar/NavBar'; // importo el componente
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';
import Cart from './components/cart/Cart';
import { CartContext} from './components/context/CartContext';
import { TotalContext } from './components/context/TotalContext';
import { useState } from 'react';

function App() {

  var productsArray = []
  const [cartData, setCartData] = useState(productsArray)
  const [total, setTotal] = useState(0)

  return (
    <TotalContext.Provider value={{total, setTotal}}>
    <CartContext.Provider value={{cartData, setCartData, productsArray}}>
    <div className="App">
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
    </div>
      </CartContext.Provider>
      </TotalContext.Provider>
  );
}

export default App;
