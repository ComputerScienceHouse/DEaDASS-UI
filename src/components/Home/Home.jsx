import React, { Component } from 'react';
import VMCard from './VMCard';

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
        // Not sure where we will be keeping data
        const VMCards = VMData.map((item, index) => {
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
