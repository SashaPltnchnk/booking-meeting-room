import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchRooms } from '../../../store/actions/room'
import Room  from './Room'



class Rooms extends Component {

    async componentDidMount() {
        this.props.fetchRooms();
    }
    
    render() {
        const { rooms, colors } = this.props
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
                colorName={colors[id].color}
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
        rooms: state.room.rooms,
        colors: state.color.colors
    }
}

const mapDispatchToProps = { fetchRooms };
 
export default connect(mapStateToProps, mapDispatchToProps)(Rooms);