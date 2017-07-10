import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../../redux/actions/actionCreators'
import View from './View'

function mapStateToProps(state) {
  const routing = state.routing
  const sections = state.sections
  const viewState = state.viewState
  return {
    routing,
    viewState,
    sections
  }
}

function mapDispatchToProps(dispatch) {
  return {
    changeView: bindActionCreators(actions.nextView, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(View)
