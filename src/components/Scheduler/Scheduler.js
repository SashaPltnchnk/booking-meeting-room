import React, { Component } from "react";
import BigCalendar from "react-big-calendar";
import moment from "moment";

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
    events: [
    //   {
    //     start: new Date(),
    //     end: new Date(moment().add(1, "days")),
    //     title: "Some title"
    //   },
      {
        title: 'Dying',
        start: new Date(2019, 4, 28, 9, 0, 0),
        end: new Date(2019, 4, 28, 10, 0, 0),
      },
      {
        title: 'Dying',
        start: new Date(2019, 4, 28, 10, 0, 0),
        end: new Date(2019, 4, 28, 11, 0, 0),
      },
      {
        title: 'Dying',
        start: new Date(2019, 4, 28, 11, 0, 0),
        end: new Date(2019, 4, 28, 12, 0, 0),
      },
    //   {
    //     title: 'Today',
    //     start: new Date(new Date().setHours(new Date().getHours() - 2)),
    //     end: new Date(new Date().setHours(new Date().getHours() + 3)),
    //   },
    // {
    //     title: 'test',
    //     start: moment().add(1, 'days').subtract(5, 'hours').toDate(),
    //     end: moment().add(1, 'days').subtract(4, 'hours').toDate(),
    //     allDay: false
    //   },
    //   {
    //     title: 'test all day',
    //     start: moment().toDate(),
    //     end: moment().toDate(),
    //     allDay: true
    //   }
    ]
  };

  render() {
    return (
      <div style={{ display: 'flex' }}>
        <BigCalendar
          localizer={localizer}
          defaultDate={new Date()}
          min={moment('9:00am', 'h:mma').toDate()}
          max={moment('6:00pm', 'h:mma').toDate()}
        //   timeslots={3}
        //   step={15}
        //   step={14}
        //   timeslots={7}
        //   min={9}
        //   max={10}

          formats={formats}
          views={allViews}
          defaultView='work_week'
          events={this.state.events}
          style={{ height: "80vh", width: "100vw"}}
        />
      </div>
    );
  }
}

export default Scheduler;