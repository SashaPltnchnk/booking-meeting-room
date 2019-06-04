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
import { Icon } from "semantic-ui-react";


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
    <div>
      {event.user_id === localStorage.getItem('user_id') ? <Icon name='user secret' />  : null}
      <strong>{event.title}</strong>
    </div>
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
        event: {}
    }

    showDeleteModal = dimmer => this.setState({ dimmer, openDeleteEvent: true,  })
    
    closeDeleteModal = () => this.setState({ openDeleteEvent: false })

    showCreateModal = dimmer => this.setState({ dimmer, openCreateEventModal: true,  })
    
    closeCreateModal = () => this.setState({ openCreateEventModal: false })

    componentDidMount() {
        this.props.fetchEvents(this.props.match.params.roomId)
    }

    handleSelect = () => {
        const {title, slot} = this.state
        // console.warn(this.props.match.params.roomId);

        const dataToSend = {
            from: new Date(slot.start).getTime(),
            to: new Date(slot.end).getTime(),
            hall_id: this.props.match.params.roomId,
            user_id: localStorage.getItem('user_id'),
            eventTitle: '',
            title,
    }

    this.props.addEvent(dataToSend)
     
    this.setState({ 
        title: '',
    })

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

  render() {

    const { openDeleteEvent, dimmer, title, openCreateEventModal } = this.state

    const newEvents = this.props.events
    .filter(event => this.props.match.params.roomId === event.hall_id)
    // .map(event => {
    //   console.log(event.user_id === localStorage.getItem('user_id'))
    //   return {
    //     end: event.end,
    //     from: event.from,
    //     hall_id: event.hall_id,
    //     start: event.start,
    //     title: event.title,
    //     to: event.to,
    //     user_id: event.user_id,
    //     _id: event._id,
    //     resource: event.user_id === localStorage.getItem('user_id') ? 'sad' : null
    //   }
    // })


    return (
        <div className={this.props.currentColor}>
         <MessageError  />
            
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
                this.showCreateModal('blurring')
                this.setState({slot})
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