import React, { Component } from 'react';
import { Container } from 'reactstrap';

import InputForm from './InputForm';

class Create extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  handleOnChange = (event) => {
    this.setState({[event.target.id]: event.target.value})
  }

  render() {
    return (
      <Container>
        <InputForm handleOnChange={this.handleOnChange} />
      </Container>
    )
  }
}

export default Create;
