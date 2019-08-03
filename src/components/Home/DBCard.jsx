import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDatabase } from '@fortawesome/free-solid-svg-icons'
import { Card, CardBody, CardHeader, CardText, CardTitle } from 'reactstrap'

class DBCard extends React.Component {
  render () {
    const { name, type, purpose } = this.props

    return (
      <Card>
        <CardHeader>
          <FontAwesomeIcon icon={faDatabase} /> {type}
        </CardHeader>
        <CardBody>
          <Link to={`/db/${type}/${name}`}>
            <CardTitle>{name}</CardTitle>
          </Link>
          <CardText>{purpose}</CardText>
        </CardBody>
      </Card>
    )
  }
}

DBCard.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  purpose: PropTypes.string
}

export default DBCard
