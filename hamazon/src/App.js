import { useState, useEffect } from 'react'
import './App.css';
import styled from 'styled-components';
import Header from './Header';
import Cart from './Cart';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import { db, auth } from './firebase';
import Login from './Login';

function App() {
  
  const [ user, setUser] = useState(JSON.parse(localStorage.getItem('user')));
  const [ cartItems, setCartItems ] = useState([]);
  const getCartItems = () => {
    db.collection('cartItems').onSnapshot((snapshot) => {
      const tempItems = snapshot.docs.map((doc) => ({
        id: doc.id,
        product: doc.data()
      }))
      setCartItems(tempItems);
    })
  }

  const getCount = () => {
    let count = 0;
    cartItems.forEach((item) => {
        count += item.product.quantity;
    })
    return count;
  }

  const signOut = () => {
    auth.signOut().then(() => {
      localStorage.removeItem('user')
      setUser(null)
    })
  }

  useEffect(() => {
    getCartItems();
  }, [])

  return (
    <Router>
      {
        !user ? (
          <Login setUser={setUser}/>
        ) : (
          <Container>
            <Header 
              user={user}
              signOut={signOut} 
              getCount={getCount()}/>
            <Switch>

              <Route path= "/cart">
                <Cart cartItems={cartItems} getCount={getCount()}/>
              </Route>
              
              <Route path= "/">
                <Home /> 
              </Route>

            </Switch>
          </Container>
        )
      }
    </Router>
  );
}

export default App;

const Container = styled.div`
  background-color: #EAEDED;
`
