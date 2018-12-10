import React, {Component} from 'react';
import {Container} from 'reactstrap';
import {ConnectedRouter} from 'connected-react-router';
import {Switch, Route} from 'react-router-dom';
import {history} from '../store';
import ProtectedRoute from '../containers/ProtectedRoute';
import OidcCallback from '../containers/OidcCallback';
import {
    Create,
    DBInfo,
    Home,
    NavBar,
} from './index';


class App extends Component {
    render() {
        return (
            <ConnectedRouter history={history}>
                <Container className="main" fluid>
                    <NavBar/>
                    <Container>
                        <Switch>
                            <Route exact path="/callback" component={OidcCallback}/>
                            <ProtectedRoute exact path="/" component={Home}/>
                            <ProtectedRoute exact path="/create" component={Create}/>
                            <ProtectedRoute path="/db/:id" component={DBInfo}/>
                        </Switch>
                    </Container>
                </Container>
            </ConnectedRouter>
        );
    }
}

export default App;
