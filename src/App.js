import { Route, Switch } from 'react-router-dom';
import Login from './components/forms/login';
import Register from './components/forms/register';
import Shop from './components/shop';

function App() {
  return (
    <div className="App">
    <Switch>
      <Route exact path="/" render={(props) => <Register {...props}/>}/>
      <Route path="/login" render={(props) => <Login {...props}/>}/>
      <Route path="/shop" render={(props) => <Shop {...props}/>}/>
    </Switch>
    </div>
  );
}

export default App;
