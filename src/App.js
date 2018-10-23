import React, {Component} from 'react';
import NavBar from "./components/NavBar";
import {Container,} from 'reactstrap';
import {BrowserRouter as Router, Route} from 'react-router-dom';

// Temporary constants to set up basic routing
const Home = () => (
    <Container>
        <p>Home</p>
    </Container>
)

const Create = () => (
    <Container>
        <p>Create</p>
    </Container>
)

class App extends Component {
    render() {
        return (
            <Router>
                <Container className="main" fluid>
                    <NavBar/>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/create" component={Create}/>
                </Container>
            </Router>
        );
    }
}

export default App;
