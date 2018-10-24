import React, { Component } from 'react';

class DBInfo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div>{this.props.match.params.id}</div>
  }
}

export default DBInfo;
