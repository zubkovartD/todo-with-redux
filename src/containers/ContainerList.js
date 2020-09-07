import { connect } from 'react-redux'
import { toggleToDo } from '../actions'
import List from '../components/List'

function getVisibleToDos (todos, filter) {
    switch (filter) {
        case 'SHOW_ALL': {
            return todos
        }
        case 'SHOW_COMPLETED': {
            return todos.filter(todo => todo.completed)
        }
        case 'SHOW_NEW': {  
            return todos.filter(todo => !todo.completed)
        }

        default: {
            return todos
        }
    }
}

function mapStateToProps (state) {
    return {
        todos: getVisibleToDos(state.todos, state.filter)
    }
}

export default connect(mapStateToProps, { toggleToDo })(List)