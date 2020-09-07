import React from 'react';
import '../styles/FilterLink.css'

export default class FilterLink extends React.Component {
    render() {
        const { active, children, onClick } = this.props; 

        if (active) {
            return <span>{children}</span>
        }

        return (
            <div className='container'>
                <span className='children' onClick={onClick}>{children}</span>
            </div>
        )
    }
}

