import NavBar from './components/navBar/NavBar'; // importo el componente
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';

function App() {

  return (
    <div className="App">
      <Router>
      <NavBar />

        <Switch>
          <Route exact path="/">
            <ItemListContainer />
          </Route>

          <Route exact path="/category/:categoryId">
            <ItemListContainer />
          </Route>

          <Route exact path='/item/:itemId'>
            <ItemDetailContainer />
          </Route>
        </Switch>

      </Router>
    </div>
  );
}

export default App;
