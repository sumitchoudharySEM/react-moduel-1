import './index.css';
import Navbar from './navbar';
import Home from './home';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="container">
          <Switch>
            <Route path="/" > <Home /> </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
