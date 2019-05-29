import React, { Component } from "react";
import BigCalendar from "react-big-calendar";
import moment from "moment";
// import events from './events'
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
  state = {
    events: []
  };

  componentDidMount() {
      console.log(this.props.events)
      this.setState({
          event: this.props.events
      })
  }
  

  handleSelect = ({ start, end }) => {
    const title = window.prompt('New Event name')
    // if (title)
    //   this.setState({
    //     events: [
    //       ...this.props.events,
    //       {
    //         start,
    //         end,
    //         title,
    //       },
    //     ],
    //   })
    if (title) 
    this.props.addEvent(title, start, end)
  }

  render() {
    return (
      <div className={this.props.roomClassName}>
        <BigCalendar
          localizer={localizer}
          defaultDate={new Date()}
          min={moment('9:00am', 'h:mma').toDate()}
          max={moment('6:00pm', 'h:mma').toDate()}
        //   timeslots={0}
        //   step={8}
        //   step={14}
        //   timeslots={7}
        //   step={60}
          formats={formats}
          views={allViews}
          defaultView='work_week'
          events={this.props.events}
          selectable
          onSelectEvent={event => console.log(event)}
          onSelectSlot={this.handleSelect}
          style={{ height: "80vh", width: "100vw"}}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
    return {
        events: state.events.events
    }
}

const mapDispatchToProps = { fetchEvents, addEvent };

export default connect(mapStateToProps, mapDispatchToProps)(Scheduler);