import React, { Component } from 'react';
import VMCard from './VMCard';

const VMData = [
    {
        id: 1234,
        title: "Blah Blah",
        vmType: "MongoDB"
    },
    {
        id: 1235,
        title: "Bluh",
        vmType: "MySQL"
    }
]

class Home extends Component {
    constructor(props) {
        super(props);
        console.log(props);

        this.state = {
            VMCards: null
        };
    }

    componentDidMount() {
        this.renderVMCards();
    }

    renderVMCards() {
        const VMCards = this.props.list.map((item, index) => {
            return (
                <VMCard
                    key={index}
                    id={item.id}
                    onClick={this.handleSelect}
                    {...item}
                />
            );
        });
        this.setState({VMCards});
    }

    render() {
        console.warn(this.state)
        return (
            <div style={{display: 'flex', flexWrap: 'wrap'}}>
                {this.state.VMCards}
            </div>
        )
    }

}

export default Home;
