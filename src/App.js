import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './pages';
import GalleryPage from './pages/gallery';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/gallery" component={GalleryPage} exact />
      </Switch>
    </Router>
  );
}

export default App;
