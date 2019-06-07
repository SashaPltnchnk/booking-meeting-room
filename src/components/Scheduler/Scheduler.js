import React, { Component } from "react";
import BigCalendar from "react-big-calendar";
import moment from "moment";
import { connect } from 'react-redux'
import { fetchEvents, addEvent, deleteEvent } from '../../store/actions/events'

import "react-big-calendar/lib/css/react-big-calendar.css";
import '../../App.css'
import DeleteEventModal from "./DeleteEventModal";
import CreateEventModal from "./CreateEventModal";
import MessageError from "./MessageError";
import { Icon, Message } from "semantic-ui-react";
import schema from './form-schema';


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

const MyEvent = function (props) {
  const { event } = props;
  return (
    <>
      {event.user_id === localStorage.getItem('user_id') ? <Icon name='user secret' />  : null}
      <strong>{event.title}</strong>
    </>
  )
  }
  
class Scheduler extends Component { 
  state = {
      openDeleteEvent: false,
      openCreateEventModal: false,
      eventId: '',
      userEventId: '',
      title: '',
      slot: null,
      event: {},
      isTimeError: false,
      errors: ''
  }

  showDeleteModal = dimmer => this.setState({ dimmer, openDeleteEvent: true,  })
  
  closeDeleteModal = () => this.setState({ openDeleteEvent: false })

  showCreateModal = dimmer => this.setState({ dimmer, openCreateEventModal: true,  })
  
  closeCreateModal = () => this.setState({ openCreateEventModal: false })

  componentDidMount() {
      this.props.fetchEvents(this.props.match.params.roomId)
  }

  handleSelect = () => {
    const {title, slot } = this.state
    
    let dataToSend = {
      from: new Date(slot.start).getTime(),
      to: new Date(slot.end).getTime(),
      hall_id: this.props.match.params.roomId,
      user_id: localStorage.getItem('user_id'),
      eventTitle: '',
      title,
    }

    // debugger
    console.log(schema)
    console.log(title)
console.log(dataToSend)
  schema.validate({title}, {abortEarly: false})
    .then(() => {
      this.props.addEvent(dataToSend)
      this.setState({errors: '', title: ''})
    })
    .catch(err => {
      console.log(err)
      this.setState({errors: err.errors })
    })
     
    // this.setState({ title: '' })

    this.closeCreateModal()

  }

  
  handleDeleteEvent = async () => {
    const {deleteEvent, fetchEvents} = this.props;

    await deleteEvent(this.state.eventId)
    fetchEvents();
    this.closeDeleteModal()
    this.setState({
      eventId: '', 
    })
  }

  changeHandler = (e) => {
    this.setState({title: e.target.value})
  }

  onSelectSlotHandler = (slot) => {
    this.setState({slot}) 
    
    var currentTime = Date.now();
    var eventTime = new Date(slot.start).getTime();
    
    if (eventTime > currentTime) {
      this.showCreateModal('blurring')
    }  
  }

   

  render() {

    const { openDeleteEvent, dimmer, title, openCreateEventModal, errors } = this.state

    const newEvents = this.props.events
      .filter(event => this.props.match.params.roomId === event.hall_id)

    const customDayPropGetter = date => {
      var currentTime = Date.now();

      if (date.getTime() < currentTime)
        return {
          className: 'special-day'
        }
    }

    return (
      <div className={this.props.currentColor}>
        <MessageError content={this.props.err}/>
        {errors && <Message warning>{errors}</Message>}

        <BigCalendar
          localizer={localizer}
          defaultDate={new Date()}
          min={moment('9:00am', 'h:mma').toDate()}
          max={moment('5:59pm', 'h:mma').toDate()}
          formats={formats}
          views={allViews}
          defaultView='work_week'
          events={newEvents}
          dayPropGetter={customDayPropGetter}
          selectable
          onSelectEvent={(event) => {
            this.showDeleteModal('blurring');
            this.setState({
              eventId: event._id,
              userEventId: event.user_id,
              eventTitle: event.title,
              event: event
            })
          }} 
          onSelectSlot={(slot) => {
            this.onSelectSlotHandler(slot)
          }}
          style={{ height: "80vh", margin: "0 auto"}}
          components = {{ 
            event: MyEvent
          }}
        />

        <DeleteEventModal 
          openDeleteEvent={openDeleteEvent}
          closeDeleteModal={this.closeDeleteModal}
          handleDeleteEvent={this.handleDeleteEvent}
          dimmer={dimmer}
          event={this.state.event}
          />
  
        <CreateEventModal 
          dimmer={dimmer}
          openCreateEventModal={openCreateEventModal}
          closeCreateModal={this.closeCreateModal}
          handleSelect={this.handleSelect}
          changeHandler={this.changeHandler}
          title={title}
          errors={errors}
        />
        
      </div>
        
    );
  }
}

const mapStateToProps = state => {
  return {
    events: state.events.events,
    rooms: state.room.rooms,
    currentColor: state.color.currentColor,
    err: state.events.err
  }
}

const mapDispatchToProps = { fetchEvents, addEvent, deleteEvent };

export default connect(mapStateToProps, mapDispatchToProps)(Scheduler);