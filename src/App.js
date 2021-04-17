import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './pages';
import GooglePage from './pages/google';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/google" component={GooglePage} exact />
      </Switch>
    </Router>
  );
}

export default App;
