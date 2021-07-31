import './App.css';
import Header from "./Header";
import Home from "./Home"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import {auth} from "./firebase";
import { useStateValue } from './StateProvider';
import { useEffect } from 'react';
import Payment from './Payment';
import { loadStripe } from "@stripe/stripe-js"
import { Elements } from "@stripe/react-stripe-js"
import Orders from './Orders';
import Product from './Product';
import AllProducts from './AllProducts';
import Laptop from './Laptop';
import Mobile from './Mobile';
import Furniture from './Furniture';
import Kitchen from './Kitchen';

const promise = loadStripe("pk_test_51JHucUDiAllCcvOroF7e5ZIpHqOvxHIpbni3clXYK81SpQXBJfKTLhzH77amZLPAjxJEk23LaIbobBkKWwWbP9S700mV9qZdFN");

function App() {

  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    
      // will run only once while the app component loads
      auth.onAuthStateChanged(authUser=>{
        console.log('THE USER IS >>>', authUser);

        if(authUser){
          // the user just logged in / the user was logged in
          dispatch({
            type: 'SET_USER',
            user: authUser
          })

        }else{
          // the user is logged out
          dispatch({
            type: 'SET_USER',
            user: null
          })
        }
      })
  }, [])

  return (
      <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact>  
            <Header />      
            <Home />
          </Route>
          <Route path="/checkout" exact>
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment" exact>   
            <Header />  
            <Elements stripe={promise}>
              <Payment />
            </Elements> 
          </Route>
          <Route path="/allproducts" exact> 
            <Header />       
            <AllProducts />
          </Route>
          <Route path="/orders" exact> 
            <Header />       
            <Orders />
          </Route>
          <Route path="/laptop" exact>   
            <Header />     
            <Laptop />
          </Route>

          <Route path="/mobile" exact>   
            <Header />     
            <Mobile />
          </Route>

          <Route path="/furniture" exact>   
            <Header />     
            <Furniture />
          </Route>

          <Route path="/kitchen" exact>   
            <Header />     
            <Kitchen />
          </Route>

          <Route path="/login" exact>        
            <Login />
          </Route>
          
        </Switch>
      </div>
      </Router>
  );
}

export default App;
