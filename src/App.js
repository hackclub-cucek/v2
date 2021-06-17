import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages';
import Events from './pages/Events';
import Projects from './pages/Projects';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/events">
          <Events />
        </Route>
        <Route path="/repo">
          <Projects />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
