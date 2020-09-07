import { connect } from 'react-redux'
import { setFilter } from '../actions'
import FilterLink from '../components/FilterLink'

function mapDispatchToProps (dispatch, ownProps) {
    return {
        onClick: () => dispatch(setFilter(ownProps.filter))
    }
}

export default connect(null, mapDispatchToProps)(FilterLink)
