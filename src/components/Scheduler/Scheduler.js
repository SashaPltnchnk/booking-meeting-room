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
        isTimeError: false
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

        let dataToSend = slot.start === slot.end
        ? {
          from: new Date(slot.start).getTime(),
          to: new Date(slot.end).setHours(23, 59, 59),
          hall_id: this.props.match.params.roomId,
          user_id: localStorage.getItem('user_id'),
          eventTitle: '',
          title,
          }

        :  {
            from: new Date(slot.start).getTime(),
            to: new Date(slot.end).getTime(),
            hall_id: this.props.match.params.roomId,
            user_id: localStorage.getItem('user_id'),
            eventTitle: '',
            title,
    }
    // console.log(new Date(slot.start).setHours(23, 59, 59))

    // const dataToSend = {
    //   from: new Date(slot.start).getTime(),
    //   to: new Date(slot.end).getTime(),
    //   hall_id: this.props.match.params.roomId,
    //   user_id: localStorage.getItem('user_id'),
    //   eventTitle: '',
    //   title,
// }

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

   onSelectSlotHandler = (slot) => {
    this.setState({slot}) 
    
    var currentTime = Date.now();
    // console.warn(currentTime);

    var eventTime = new Date(slot.start).getTime()
    // console.warn(eventTime);
    
    if (eventTime > currentTime) {
      this.showCreateModal('blurring')
    }    

    // if(eventTime < currentTime) {
    //   const pastTime = <MessageError content={'Share your Time Machine, Dude!'}/>
    // }
   }

  render() {

    const { openDeleteEvent, dimmer, title, openCreateEventModal } = this.state

    const newEvents = this.props.events
    .filter(event => this.props.match.params.roomId === event.hall_id)
   

    let warning = this.props.err ? <MessageError content={this.props.err}/> : null

    // let pastTime = eventTime < currentTime ? <MessageError content={'Share your Time Machine, Dude!'}/> : null


    return (
        <div className={this.props.currentColor}>
         
         {warning}
        {/* {pastTime} */}
            
          <BigCalendar
            localizer={localizer}
            defaultDate={new Date()}
            min={moment('9:00am', 'h:mma').toDate()}
            max={moment('7:00pm', 'h:mma').toDate()}
            formats={formats}
            views={allViews}
            defaultView='work_week'
            events={newEvents}
            selectable
            // onSelecting={() => alert('oops')}
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