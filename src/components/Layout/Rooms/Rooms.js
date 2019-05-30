import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchRooms } from '../../../store/actions/room'
import Room  from './Room'



class Rooms extends Component {
    state = {
        // rooms: [],
        colors: [
            'red',
            'blue',
            'violet',
            'green'
        ]
    }

    async componentDidMount() {
        this.props.fetchRooms();
        // const rooms = response.data.halls;
        // this.setState({rooms})
    }
    
    render() {
        const { rooms } = this.props
        console.warn(rooms);
        
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
                name={room.title}
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