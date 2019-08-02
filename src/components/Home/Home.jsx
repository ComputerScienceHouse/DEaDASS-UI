import React, {Component} from 'react';
import { connect } from "react-redux";
import DBCard from './DBCard';
import InfoSpinner from '../InfoSpinner';
import {CardDeck, Col} from "reactstrap";
import {fetchDatabases} from '../../actions/get';

class Home extends Component {
    constructor(props) {
        super(props);
        console.log(props);

        this.state = {
            DBCards: null
        };
    }

    renderDBCards() {
        const DBCards = this.props.databases.map((item, index) => {
            return (
                <Col>
                    <DBCard
                        key={index}
                        onClick={this.handleSelect}
                        {...item}
                    />
                </Col>
            );
        });
        return DBCards
    }

    componentDidMount() {
        if (this.props.oidc.user && !this.props.databases) {
            this.props.getDatabases(this.props.oidc.user.access_token);
        }
    }

    handleSelect = (event) => {

    }

    render() {
        if (!this.props.databases) {
            return (<InfoSpinner>Loading databases</InfoSpinner>);
        } else if (!this.props.databases.length) {
            return (<h2>No databases found</h2>);
        }
        this.renderDBCards();
        return (
            <div style={{display: 'flex', flexWrap: 'wrap'}}>
                <CardDeck>{this.renderDBCards()}</CardDeck>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    oidc: state.oidc,
    databases: state.apis.databases
});
  
const mapDispatchToProps = dispatch => ({
    getDatabases: access_token => fetchDatabases(dispatch, access_token)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Home);
