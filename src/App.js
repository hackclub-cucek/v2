import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './pages';
import Events from './pages/Events';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/events">
            <Events />
          </Route>
      </Switch>
    </Router>
  );
}

export default App;
