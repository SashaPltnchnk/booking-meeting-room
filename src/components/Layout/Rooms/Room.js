import React, { Component } from 'react'
// import Time from './Time'
// import Sheduler from '../../Scheduler/Scheduler'
import Scheduler from '../../Scheduler/Scheduler';
import { Route } from 'react-router-dom'




class Room extends Component {
    

    render() { 
       

        const roomNameStyle = {
            // display: 'flex',
            // flexDirection: 'column',    
            // justifyContent: 'center'
        }
        return ( 
            <>
                <button>
                    <div 
                        style={roomNameStyle}>{this.props.roomName}<div>(до {this.props.quantity} человек)</div>
                    </div>
                    {/* <Time />
                    <Time />
                    <Time />
                    <Time />
                    <Time /> */}

                    
                </button>
                
            </>
         );
    }
}
 
export default Room;