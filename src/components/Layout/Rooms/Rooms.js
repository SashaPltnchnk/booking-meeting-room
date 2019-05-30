import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchRooms } from '../../../store/actions/room'



class Rooms extends Component {

    componentDidMount() {
        this.props.fetchRooms()
    }
    
    render() { 
        const roomStyle = {
            display: 'flex',

            justifyContent: 'space-between',
            marginBottom: '15px'
        }
        return ( 
            <div  style={roomStyle}>
                <button><Link to ='/green'>ЗЕЛЁНАЯ</Link></button>
                <button><Link to ='/red'>КРАСНАЯ</Link></button>
                <button><Link to ='/blue'>СИНЯЯ</Link></button>
                <button><Link to ='/violet'>ФИОЛЕТОВАЯ</Link></button>               
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