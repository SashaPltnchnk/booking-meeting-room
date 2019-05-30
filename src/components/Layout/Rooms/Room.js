import React, { Component } from 'react'
// import Time from './Time'
// import Sheduler from '../../Scheduler/Scheduler'
// import Scheduler from '../../Scheduler/Scheduler';
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';




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
                <Link to ={`/room/${this.props.id}`}>
                    <Button variant="outlined" color="secondary">{this.props.name}</Button>
                </Link>           
            </>
         );
    }
}
 
export default Room;