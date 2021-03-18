import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home';

function App() {
  return (
    <div className="font-mono">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
