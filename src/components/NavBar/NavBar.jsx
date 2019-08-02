import React from 'react';
import {Collapse, Container, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem} from 'reactstrap';
import {NavLink} from 'react-router-dom'
import UserProfile from '../../containers/UserProfile';

class NavBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
        };
        
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen,
        });
    }

    render() {
        return (
            <div>
                <Navbar color="primary" dark expand="lg" fixed="top">
                    <Container>
                        <NavLink to="/" className={"navbar-brand"}>DEaDASS</NavLink>
                        <NavbarToggler onClick={this.toggle}/>
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink to="/" className={"nav-link"}>Home</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink to="/create/" className={"nav-link"}>Create</NavLink>
                                </NavItem>
                            </Nav>
                            <Nav navbar className="ml-auto">
                                <UserProfile/>
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>
            </div>
        );
    }
}

NavBar.propTypes = {};

export default NavBar;