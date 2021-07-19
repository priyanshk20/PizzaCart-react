import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import Navigation from './components/Navigation';

const App = () => {
    return(

            <Router>
                <Navigation/>
                <Switch>
                    <Route path="/" component={Home} exact></Route>
                    <Route path="/about" component={About}></Route>
                </Switch>
            </Router>
    )
}

export default App;