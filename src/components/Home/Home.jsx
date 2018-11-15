import React, {Component} from 'react';
import DBCard from './DBCard';
import {CardDeck, Col} from "reactstrap";

const VMData = [
    {
        id: 1234,
        title: "Blah Blah",
        vmType: "MongoDB",
        description: "An important database that holds all of CSH lost traditions"
    },
    {
        id: 1235,
        title: "Bluh",
        vmType: "MySQL",
        description: "An important database that holds all CSHers SSNs"
    },
    {
        id: 1255,
        title: "Guh",
        vmType: "Postgres",
        description: "An important database that holds all CSHers \"media\" preferences"
    }
]

class Home extends Component {
    constructor(props) {
        super(props);
        console.log(props);

        this.state = {
            DBCards: null
        };
    }

    componentDidMount() {
        this.renderDBCards();
    }

    handleSelect = (event) => {

    }

    renderDBCards() {
        // Not sure where we will be keeping data
        const DBCards = VMData.map((item, index) => {
            return (
                <Col>
                    <DBCard
                        key={index}
                        id={item.id}
                        onClick={this.handleSelect}
                        {...item}
                    />
                </Col>
            );
        });
        this.setState({DBCards});
    }

    render() {
        console.warn(this.state)
        return (
            <div style={{display: 'flex', flexWrap: 'wrap'}}>
                <CardDeck>{this.state.DBCards}</CardDeck>
            </div>
        )
    }
}

export default Home;
