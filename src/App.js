import { createContext, useState} from 'react';
import './App.css';
import Home from './components/Home/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import ProductDetails from './components/ProductDetail/ProductDetails';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import SignIn from './components/SignIn/SignIn';
import PaymentSystem from './components/PaymentSystem/PaymentSystem';
export const UserContext = createContext();
function App() {
  const[loggedInUser, setLoggedInUser] = useState({})
  return (
    <UserContext.Provider  value={[loggedInUser, setLoggedInUser]} className="App">  
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route  path="/home">
            <Home />
          </Route>
          <Route path="/details">
            <ProductDetails />
          </Route>
          <PrivateRoute path="/payment">
            <PaymentSystem />
          </PrivateRoute>
          <Route path="/signIn">
              <SignIn/>
            </Route>
        </Switch>
    </Router>
 </UserContext.Provider>
  );
}

export default App;
