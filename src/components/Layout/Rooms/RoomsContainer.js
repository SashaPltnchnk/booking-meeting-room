import React, { Component } from 'react';
import Scheduler from '../../Scheduler/Scheduler'
import { connect } from 'react-redux'
import { fetchRooms } from '../../../store/actions/room'
import Room1 from './Room1'

class RoomsContainer extends Component {
    
    async componentDidMount() {
        this.props.fetchRooms();
    }

    render () {
        // console.log(this.props.rooms)
        const renderedRooms = this.props.rooms.map(room => (
            <Room1 
                    key={room._id}
                    {...room}/>
            
                // key={room._id}
                // id={room._id}
                // // name={room.title}
                // colorName={colors[id]}
                // setColor={setColor}
      
        ))
        return (
            <div>
            {renderedRooms}
            </div>
        );
}}

const mapStateToProps = state => {
    return {
        rooms: state.room.rooms
    }
}

const mapDispatchToProps = { fetchRooms } 
 
export default connect(mapStateToProps, mapDispatchToProps)(RoomsContainer);