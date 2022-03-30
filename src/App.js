import './index.css';
import Navbar from './navbar';
import Home from './home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './notFound';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact path="/" > <Home /> </Route>
            <Route path="/create"> <Create/> </Route>
            <Route path="/blogs/:id"> <BlogDetails/> </Route>
            <Route path="*"> <NotFound/> </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
