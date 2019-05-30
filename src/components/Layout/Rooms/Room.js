import React, { Component } from 'react'
// import Time from './Time'
// import Sheduler from '../../Scheduler/Scheduler'
// import Scheduler from '../../Scheduler/Scheduler';
import { Link } from 'react-router-dom'




class Room extends Component {

    render() { 
       
    // console.log(this.props)

        // const roomNameStyle = {
        //     display: 'flex',
        //     flexDirection: 'column',    
        //     justifyContent: 'center'
        // }
        return ( 
            <>
                <button>
                    <Link to ={`/${this.props.name}`}>{this.props.name}</Link>           
                </button>
            </>
         );
    }
}
 
export default Room;