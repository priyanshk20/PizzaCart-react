import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Navigation from "./components/Navigation";
import Products from "./pages/Products";
import SingleProduct from "./pages/SingleProduct";
import {CartContext} from "./CartContext";
import {useEffect} from 'react';

const App = () => {

  const [cart,setCart] = useState({})

  // fetch from local storage 
  useEffect(() => {
    window.localStorage.getItem('cart')
  },[])
  
  return (
    <Router>
      <CartContext.Provider value={{}} >
        <Navigation />
        <Switch>
          <Route path="/" component={Home} exact></Route>
          <Route path="/products" exact component={Products}></Route>
          <Route path="/products/:_id" exact component={SingleProduct}></Route>
          <Route path="/cart" component={Cart}></Route>
        </Switch>
      </CartContext.Provider>
    </Router>
  );
};

export default App;
