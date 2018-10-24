import React, {Component} from 'react';
import NavBar from './components/NavBar';
import {Container,} from 'reactstrap';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/Home';
import DBInfo from './components/DBInfo';
import Create from './components/Create';

class App extends Component {
    render() {
        return (
            <Router>
                <Container className="main" fluid>
                    <NavBar/>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/create" component={Create} />
                    <Route path="/db/:id" component={DBInfo} />
                </Container>
            </Router>
        );
    }
}

export default App;
