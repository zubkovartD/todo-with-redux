import React from 'react';
import '../styles/Task.css'

export default class Task extends React.Component {

    handleToggle = () => {
        this.props.onToggle(this.props.id)
    }

    render(){
        const { text, completed } = this.props;
        return(
            <div
                className={completed ? 'completed': ''}
                onClick={this.handleToggle}
            >
                <p>{text}</p>
            </div>
        );
    }
}