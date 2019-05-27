import React, { Component } from 'react'
import Room from './Room'



class Rooms extends Component {
    render() { 
 
        return ( 
            <>
                <Room roomName={'Зеленая'} quantity={'5'}/>
                <Room roomName={'Красная'} quantity={'15'}/>
                <Room roomName={'Синяя'} quantity={'25'}/>
                <Room roomName={'Фиолетовая'} quantity={'25'}/>
            </>
         );
    }
}
 
export default Rooms;