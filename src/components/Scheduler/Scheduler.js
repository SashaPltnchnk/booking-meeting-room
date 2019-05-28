import React, { Component } from "react";
import BigCalendar from "react-big-calendar";
import moment from "moment";
import events from './events'
// import ControlSlot from './ControlSlot'

import "react-big-calendar/lib/css/react-big-calendar.css";



const localizer = BigCalendar.momentLocalizer(moment);

let allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k])



// 	dayRangeHeaderFormat : ({start, end}, culture, local) => {
// 		const startMonth = local.format(start, 'MMM', culture),
// 			endMonth = local.format(end, 'MMM', culture),
// 			startDate = local.format(start, 'MMM D', culture),
// 			endDate = local.format(end, startMonth === endMonth ? 'D' : 'MMM D', culture),
// 			year = local.format(end, 'YYYY', culture);



const formats = {
    dayFormat: (date, culture, momentLocalizer) =>
      momentLocalizer.format(date, 'DD dddd', culture),
    timeGutterFormat: (date, culture, momentLocalizer) => 
      momentLocalizer.format(date, 'hh a', culture),
    eventTimeRangeFormat: (a, culture, momentLocalizer) =>
      momentLocalizer.format(a.start, 'h:mm a', culture),
    // dayRangeHeaderFormat: ({ start, end }, culture, localizer) =>
    //   localizer.format(start, { date: 'short' }, culture) + ' — ' +
    //   localizer.format(end, { date: 'short' }, culture)
}

class Scheduler extends Component { 
  state = {
    events
  };

  handleSelect = ({ start, end }) => {
    const title = window.prompt('New Event name')
    if (title)
      this.setState({
        events: [
          ...this.state.events,
          {
            start,
            end,
            title,
          },
        ],
      })
  }

  render() {
    return (
      <div style={{ display: 'flex' }}>
          {/* <ControlSlot.Entry waitForOutlet>

          </ControlSlot.Entry> */}
        <BigCalendar
          localizer={localizer}
          defaultDate={new Date()}
          min={moment('9:00am', 'h:mma').toDate()}
          max={moment('6:00pm', 'h:mma').toDate()}
        //   timeslots={0}
        //   step={8}
        //   step={14}
        //   timeslots={7}
        //   min={9}
        //   max={10}
        // step={60}

          formats={formats}
          views={allViews}
          defaultView='work_week'
          events={this.state.events}
          selectable
          onSelectEvent={event => alert(event.title)}
          onSelectSlot={this.handleSelect}
          style={{ height: "80vh", width: "100vw"}}
        />
      </div>
    );
  }
}

export default Scheduler;