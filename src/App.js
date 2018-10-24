import React, {Component} from 'react';
import { Container } from 'reactstrap';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import {
  Create,
  DBInfo,
  Home,
  NavBar
} from './components';

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
