import React from 'react'
import PropTypes from 'prop-types'
import { Card, CardBody, CardHeader, Label, FormGroup, Input } from 'reactstrap'
import PoolSelector from '../../containers/PoolSelector'

class InputForm extends React.Component {
  render () {
    const { handleOnChange } = this.props

    return (
      <Card className="mb-3">
        <CardHeader>Create a Database</CardHeader>
        <CardBody>
          <FormGroup>
            <Label for="dbType">Database Type</Label>
            <Input id="dbType" type="select" onChange={handleOnChange}>
              <option selected="">Select a database type</option>
              <option value="MYSQL">MySql</option>
              <option value="POSTGRES">PostgreSQL</option>
              <option value="MONGODB">MongoDB</option>
            </Input>
          </FormGroup>
          <PoolSelector />
          <FormGroup>
            <Label for="dbName">Database Name</Label>
            <Input id="dbName" placeholder="Database Name" />
          </FormGroup>
          <FormGroup>
            <Label for="dbPurpose">Database Purpose</Label>
            <Input id="dbPurpose" type="textarea" placeholder="Database Purpose" />
          </FormGroup>
        </CardBody>
      </Card>
    )
  }
}

InputForm.propTypes = {
  handleOnChange: PropTypes.any
}

export default InputForm
