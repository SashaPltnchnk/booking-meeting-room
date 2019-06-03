import React, { Component } from "react";
import BigCalendar from "react-big-calendar";
import moment from "moment";
import { connect } from 'react-redux'
import { fetchEvents, addEvent, deleteEvent } from '../../store/actions/events'

import "react-big-calendar/lib/css/react-big-calendar.css";
import '../../App.css'
import Rooms from "../Layout/Rooms/Rooms";



const localizer = BigCalendar.momentLocalizer(moment);

let allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k])

const formats = {
    dayFormat: (date, culture, momentLocalizer) =>
      momentLocalizer.format(date, 'DD dddd', culture),
    timeGutterFormat: (date, culture, momentLocalizer) => 
      momentLocalizer.format(date, 'hh a', culture),
    eventTimeRangeFormat: (a, culture, momentLocalizer) =>
      momentLocalizer.format(a.start, 'h:mm a', culture)
}


class Scheduler extends Component { 
  state = {
    colors: [
        'green',
        'red',
        'blue',
        'violet'
    ],
    currentColor: ''
  }

  componentDidMount() {
      // this.props.fetchEvents(this.props.match.params.roomId)
      this.props.fetchEvents()
  }

  handleSelect = (slot) => {
    const title = window.prompt('New Event name')
    // console.warn(this.props.match.params.roomId);

    const dataToSend = {
      from: new Date(slot.start).getTime(),
      to: new Date(slot.end).getTime(),
      hall_id: this.props.match.params.roomId,
      user_id: localStorage.getItem('user_id'),
      title,
    }

    this.props.addEvent(dataToSend)
  }

  
  handleDeleteEvent = async (id) => {
    const {deleteEvent, fetchEvents} = this.props;
  
    await deleteEvent(id)
    fetchEvents();
  }

  setColor = (currentColor) => () => {
    // console.log(currentColor)
    this.setState({currentColor})
  }

  render() {
    // debugger
    console.warn('sokisdfojifsokjidfspokdfspokds',this.props)
   

    const newEvents = this.props.events.filter(event => this.props.match.params.roomId === event.hall_id)
    
  
    return (
      <>
      {/* <Rooms colors={this.state.colors} setColor={this.setColor} /> */}
      <div 
        // className={this.state.currentColor}
        >
        <BigCalendar
          localizer={localizer}
          defaultDate={new Date()}
          min={moment('9:00am', 'h:mma').toDate()}
          max={moment('6:00pm', 'h:mma').toDate()}
          formats={formats}
          views={allViews}
          defaultView='work_week'
          events={newEvents}
          // events={this.props.events}
          selectable
          onSelectEvent={(event) => this.handleDeleteEvent(event._id)} 
          onSelectSlot={this.handleSelect}
          style={{ height: "80vh", width: "85vw", margin: "0 auto"}}
        />
      </div>
      </>
    );
  }
}

const mapStateToProps = state => {
    return {
        events: state.events.events,
        rooms: state.room.rooms
    }
}

const mapDispatchToProps = { fetchEvents, addEvent, deleteEvent };

export default connect(mapStateToProps, mapDispatchToProps)(Scheduler);