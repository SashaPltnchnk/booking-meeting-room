import React, { Component } from 'react';


// UserInterface Class //
class DayChunk extends React.Component {
    static displayName = 'DayChunk';
    static defaultProps = {
      day: React.PropTypes.string
    };
  
    render() {
      const hours = [];
      for (let i = 0; i < 25; i++) {
        const min = i % 2 === 0;
        hours.push(
          <li className = {`${min ? 'dark' : 'dark'}`}>
            <span className="dayTime">{`${12 - Math.round(i/2)}:${min ? '00' : '30'}`}</span>
         </li>
        );
      }
      return (
        <ul className="dayUl">
        <li className="dayHeader">
          {this.props.day}
        </li>
        {hours}
      </ul>
      );
    }
  }
  
  class WeekChunk extends React.Component {
    static displayName = 'WeekChunk';
    static defaultProps = {
      weekdays: React.PropTypes.array
    };
  
    render() {
      const {
        weekdays
      } = this.props;
  
      const days = weekdays.map((day) => {
        const genDay = (
          <li key = {`day${day}`}>
          <DayChunk day={day} />
         </li>
        );
        return genDay;
      });
      console.log(weekdays);
      return (
        <ul className="weekUl">
          {days}
        </ul>
      );
    }
  }
  
  // Demo Application //
  class CalendarComponent extends React.Component {
    static displayName = 'App';
    static defaultProps = {
      children: React.PropTypes.object
    };
    constructor(props) {
      super(props);
      this.state = {
        weekdays: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday']
      };
    }
    render() {
      const {
        weekdays
      } = this.state;
      return (
        <div id="widget">
          <WeekChunk 
            weekdays = {weekdays}
          />
        </div>
      );
    }
  }
  
  export default CalendarComponent;