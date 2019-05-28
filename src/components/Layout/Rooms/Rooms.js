import React, { Component } from 'react'
import Room from './Room'



class Rooms extends Component {
    render() { 
        const roomStyle = {
            display: 'flex',

            justifyContent: 'space-between',
            marginBottom: '15px'
        }
        return ( 
            <div  style={roomStyle}>
                <Room roomName={'Зеленая'} quantity={'5'} />
                <Room roomName={'Красная'} quantity={'15'}/>
                <Room roomName={'Синяя'} quantity={'25'}/>
                <Room roomName={'Фиолетовая'} quantity={'25'}/>
            </div>
         );
    }
}
 
export default Rooms;