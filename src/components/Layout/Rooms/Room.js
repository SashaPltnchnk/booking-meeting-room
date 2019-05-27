import React, { Component } from 'react'
import Time from './Time'



class Room extends Component {
    render() { 
        const roomStyle = {
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: '15px'
        }

        const roomNameStyle = {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
        }
        return ( 
            <div style={roomStyle}>
                <div style={roomNameStyle}>{this.props.roomName}<div>(до {this.props.quantity} человек)</div></div>
                <Time />
                <Time />
                <Time />
                <Time />
                <Time />
            </div>
         );
    }
}
 
export default Room;