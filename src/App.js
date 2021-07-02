import NavBar from './components/navBar/NavBar'; // importo el componente
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

// pages
import Home from './components/pages/Home';
import Computers from './components/pages/Computers';
import Components from './components/pages/Components';
import Cart from './components/pages/Cart';

function App() {

  return (
    <div className="App">
      <Router>
      <NavBar />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/computers">
            <Computers />
          </Route>

          <Route exact path="/components">
            <Components />
          </Route>

          <Route exact path="/cart">
            <Cart />
          </Route>
        </Switch>

      </Router>
    </div>
  );
}

export default App;
