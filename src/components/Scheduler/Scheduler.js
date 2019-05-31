import React, { Component } from "react";
import BigCalendar from "react-big-calendar";
import moment from "moment";
import { connect } from 'react-redux'
import { fetchEvents, addEvent } from '../../store/actions/events'



import "react-big-calendar/lib/css/react-big-calendar.css";

import '../../App.css'



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

  componentDidMount() {
      this.props.fetchEvents(this.props.match.params.roomId)
  }

  handleSelect = (slot) => {
    const title = window.prompt('New Event name')
    console.warn(this.props.match.params.roomId);

    const dataToSend = {
      from: new Date(slot.start).getTime(),
      to: new Date(slot.end).getTime(),
      hall_id: this.props.match.params.roomId,
      user_id: localStorage.getItem('user_id'),
      title,
    }

    
    this.props.addEvent(dataToSend)
  }

  render() {
    // console.warn(this.props.rooms.halls)
    // debugger

    const newEvents = this.props.events.filter(event => this.props.match.params.roomId === event.hall_id)

    console.log(newEvents)
    return (
      <div className={this.props.roomClassName}>
        <BigCalendar
          localizer={localizer}
          defaultDate={new Date()}
          min={moment('9:00am', 'h:mma').toDate()}
          max={moment('6:00pm', 'h:mma').toDate()}
          formats={formats}
          views={allViews}
          defaultView='work_week'
          events={newEvents}
          selectable
          onSelectEvent={this.handleSelect}
          onSelectSlot={this.handleSelect}
          style={{ height: "80vh", width: "95vw", margin: "0 auto"}}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
    return {
        events: state.events.events,
        rooms: state.room.rooms
    }
}

const mapDispatchToProps = { fetchEvents, addEvent };

export default connect(mapStateToProps, mapDispatchToProps)(Scheduler);