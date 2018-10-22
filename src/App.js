import React, {Component} from 'react';
import NavBar from "./components/Nav";
import {BrowserRouter as Router, Route} from 'react-router-dom';

const Home = () => (
    <div>
        <NavBar/>
    </div>
)

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <div>
                        <Route exact path="/" component={Home}/>
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
