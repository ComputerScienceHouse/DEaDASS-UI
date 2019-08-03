import { connect } from 'react-redux'
import SelectPool from '../components/Create/SelectPool'

const mapStateToProps = state => ({
  username: ((state.oidc.user || {}).profile || {}).preferred_username
})

const mapDispatchToProps = dispatch => ({
  dispatch
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectPool)
