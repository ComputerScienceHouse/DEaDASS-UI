import React, {Component} from 'react';

class DBInfo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div>{this.props.match.params.name}</div>
    }
}

export default DBInfo;
