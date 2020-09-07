import React from 'react';

import Add from './Add'
import ContainerList from '../containers/ContainerList'
import Footer from './Footer'

export default class App extends React.Component {
  render(){
    return(
      <div>
        <Add />
        <ContainerList />
        <Footer />
      </div>
    )
  }
}