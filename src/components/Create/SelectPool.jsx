import React from 'react'
import PropTypes from 'prop-types'
import { FormGroup, Label, Input } from 'reactstrap'

class SelectPool extends React.Component {
  render () {
    const { username } = this.props

    return (
      <FormGroup>
        <Label for="dbPool">Database Pool</Label>
        <Input id="dbPool" type="select">
          <option selected value={`${username}`}>{username}</option>
        </Input>
      </FormGroup>
    )
  };
};

SelectPool.propTypes = {
  username: PropTypes.string
}

export default SelectPool
