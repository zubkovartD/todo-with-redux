import React from 'react';

import ContainerFilterLink from '../containers/ContainerFilterLink'

export default class Footer extends React.Component {
    render() {
        return(
            <div>
                <ContainerFilterLink filter='SHOW_ALL'>All</ContainerFilterLink>
                <ContainerFilterLink filter='SHOW_NEW'>New</ContainerFilterLink>
                <ContainerFilterLink filter='SHOW_COMPLETED'>Completed</ContainerFilterLink>
            </div>
        )
    }
}