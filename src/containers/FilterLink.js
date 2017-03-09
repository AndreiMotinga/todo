import { connect } from 'react-redux'
import Link from '../components/Link.jsx'
import { setFilter } from '../reducers/filter'

const mapStateToProps = (state, props) => {
  return {
    active: props.filter === state.filter
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onClick: () => {
      dispatch(setFilter(props.filter))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Link)
