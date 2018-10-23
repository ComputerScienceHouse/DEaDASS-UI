import React, {Component} from 'react';
import NavBar from "./components/NavBar";
import {BrowserRouter as Router, Route} from 'react-router-dom';

const Home = () => (
    <div>
        <p>Home</p>
    </div>
)

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <NavBar/>
                    <Route exact path="/" component={Home}/>
                </div>
            </Router>
        );
    }
}

export default App;
