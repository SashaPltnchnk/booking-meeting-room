import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchRooms } from '../../../store/actions/room'
import Room  from './Room'



class Rooms extends Component {

    async componentDidMount() {
        this.props.fetchRooms();
    }
    
    render() {
        const { rooms, colors, setColor } = this.props
        // console.warn(rooms);
        
        const roomStyle = {
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: '15px'
        }
        const renderedRooms = rooms.map((room, id) => (
            <Room 
                key={room._id}
                id={room._id}
                // name={room.title}
                colorName={colors[id]}
                setColor={setColor}
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