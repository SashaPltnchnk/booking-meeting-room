import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchRooms } from '../../../store/actions/room'
import Room  from './Room'



class Rooms extends Component {
    state = {
        colors: [
            'green',
            'red',
            'blue',
            'violet'
        ]
    }

    async componentDidMount() {
        this.props.fetchRooms();
    }
    
    render() {
        const { rooms } = this.props
        // console.warn(rooms);
        
        const roomStyle = {
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: '15px'
        }
        // debugger
        const renderedRooms = rooms.map((room, id) => (
            <Room 
                key={room._id}
                id={room._id}
                // name={room.title}
                colorName={this.state.colors[id]}
            />
        ))
        return ( 
            <div  style={roomStyle}>
               {renderedRooms }
            </div>
         );
    }
}

const mapStateToProps = state => {
    
    return {
        rooms: state.room.rooms
    }
}

const mapDispatchToProps = { fetchRooms };
 
export default connect(mapStateToProps, mapDispatchToProps)(Rooms);