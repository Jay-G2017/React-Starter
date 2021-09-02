import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/home';
import Todo from './pages/todo';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/todo">
          <Todo />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
