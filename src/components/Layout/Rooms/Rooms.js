import React, { Component } from 'react'
// import Room from './Room'
// import Scheduler from '../../Scheduler/Scheduler';
import { Link } from 'react-router-dom'



class Rooms extends Component {
    // state = {
    //     isCalendarShown: false
    // }

    // showCalendar = () => {
    //     this.setState({isCalendarShown: true})
    // }
    render() { 
        const roomStyle = {
            display: 'flex',

            justifyContent: 'space-between',
            marginBottom: '15px'
        }
        return ( 
            <div  style={roomStyle}>
                <button><Link to ='/green'>green</Link></button>
                <button><Link to ='/red'>red</Link></button>
                <button><Link to ='/blue'>blue</Link></button>
                <button><Link to ='/violet'>violet</Link></button>
                {/* <Room 
                    roomName={'Зеленая'} 
                    quantity={'5'} 
                    // onClick={this.showCalendar}
                    /> 
                <Room 
                    roomName={'Красная'} 
                    quantity={'15'}
                    // onClick={this.showCalendar}
                    />
                <Room 
                    roomName={'Синяя'} 
                    quantity={'25'}
                    // onClick={this.showCalendar}
                    /> 
                <Room 
                    roomName={'Фиолетовая'} 
                    quantity={'25'}
                    // onClick={this.showCalendar}
                    /> */}
                    {/* { this.state.isCalendarShown? <Scheduler /> : null } */}
               
            </div>
         );
    }
}
 
export default Rooms;