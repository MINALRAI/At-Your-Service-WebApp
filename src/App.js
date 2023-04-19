import React, { useEffect } from 'react'
import './App.css';
import Header from "./Header";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import Payment from './Payment'
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import { LoadStripe, loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const promise = loadStripe(
  'pk_test_51My4zFSJiKskmhCB64HFt2U9c7c8U1S0egjYuZPR1GiM6zZ9CaK0CV0oSEKVNTOqkMEESH6u9FfHVMI2bkpVBGLo00Qk8FRJp2'
)

function App() {
  const [{}, dispatch] = useStateValue();

useEffect(() => {
  auth.onAuthStateChanged(authUser => {
    console.log('THE USER IS >>> ', authUser)
    if(authUser) {
      dispatch({
        type: 'SET_USER',
        user: authUser 
      })
    }else{
      dispatch({
        type: 'SET_USER',
        user:null
      })
    }
  })
}, [])

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path = "/checkout" element={
            <React.Fragment>
              <Header/>
              <Checkout/>
            </React.Fragment>
          } />
          <Route path = "/login" element={<Login/>}>
            </Route>
          <Route path = "/payment"  element={
            <React.Fragment>
            <Header/>
            <Elements stripe={promise}>
            <Payment/>
            </Elements>
            
          </React.Fragment>
          } />
          <Route path = "/" element={
            <React.Fragment>
                 <Header/>
                 <Home/>
            </React.Fragment>
          }/>
        </Routes>
    </div>
    </Router>
  );
}

export default App;
