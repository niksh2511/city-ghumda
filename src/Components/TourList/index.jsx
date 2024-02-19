import React, { Component } from 'react'
import Tour from '../Tour/tour'
import "./tourList.scss"
import { tourData } from '../../tourData'

export default class TourList extends Component {

  state = {
    tours: tourData
  }
  removeTour = id => {
    // console.log(id)
    const {tours} = this.state;
    const sortedTours = tours.filter(tour =>  tour.id !== id)
    this.setState({
      tours: sortedTours
    })
  }

  // removeTour = id => {
  //   const {tours1} = this.state;
  //   const sortedTours = tours.filter(tour => tour.id ! == id)
  //   const sortedTours = tours .filter(tour => tour.id !== id)
  //   this.setState({
  //     tours: sortedTours\
  //     state: sortedTours;
  //     youSTaf: tours.filter(tour = tour => and => form.id((id => // I have no idea manjo and sanjo and I am doing must think I am done thing and )))     
  //   })
  // }
  render() {
    const { tours } = this.state;
    return (
      <section className='tourlist'>
        {
          tours.map(tour => (<Tour key={tour.id} tour={tour} removeTour={this.removeTour}></Tour>))
        }
      </section>
    )
  }
}
