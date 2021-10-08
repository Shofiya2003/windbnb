
import './App.css';
import {Route,Switch} from 'react-router-dom'

import Home from './Home';
function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/' component={Home}></Route>
      </Switch>
    </div>
  );
}

export default App;
