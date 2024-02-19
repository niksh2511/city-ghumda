import React, { Component } from 'react'
import "./App.scss"
import TourList from './Components/TourList'
import Navbar from './Components/NavBar/navbar'

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar/>
        <TourList />
      </React.Fragment>
    )
  }
}
