import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Cart from './pages/Cart';
import Home from './pages/Home';
import Navigation from './components/Navigation';
import Products from './pages/Products';

const App = () => {
    return(

            <Router>
                <Navigation/>
                <Switch>
                    <Route path="/" component={Home} exact></Route>
                    <Route path="/products" component={Products}></Route>
                    <Route path="/cart" component={Cart}></Route>
                </Switch>
            </Router>
    )
}

export default App;