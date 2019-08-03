import React, { Component } from 'react'
import PropTypes from 'prop-types'

class DBInfo extends Component {
  render () {
    return <div>{this.props.match.params.name}</div>
  }
}

DBInfo.propTypes = {
  match: PropTypes.any
}

export default DBInfo
