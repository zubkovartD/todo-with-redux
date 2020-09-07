import React from 'react'
import Task from './Task'

export default class List extends React.Component {
    render(){        
        return(
            <div>
                {
                    this.props.todos.map(todo => 
                        <Task 
                            key={todo.id}
                            id={todo.id}
                            text={todo.text}
                            completed={todo.completed}
                            onToggle={() => this.props.toggleToDo(todo.id)}
                        />
                    )
                }
            </div>
        );
    }
}
