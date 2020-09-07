import React from 'react'
import { connect } from 'react-redux';
import { addToDo } from '../actions'
import '../styles/Add.css'

const ENTER_KEY = 13;

class Add extends React.Component {
    state = {
        text: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleKeyDown = (e) => {
        if (e.keyCode === ENTER_KEY) {
            this.props.addToDo(this.state.text);
            this.setState({
                text: ''
            })
        }
    }

    render() {
        return(
            <div className='add-component'>
                <input 
                    required
                    className='input'
                    id='todo-input'
                    type='text'
                    placeholder='Введите задачу'
                    name='text'
                    autocomplete="off"
                    value={this.state.text}
                    onChange={this.handleChange}
                    onKeyDown={this.handleKeyDown}
                />
                <label for='todo-input' className='label'>Введите задачу</label>
            </div>
        );
    }
}

export default connect(undefined, {addToDo})(Add)