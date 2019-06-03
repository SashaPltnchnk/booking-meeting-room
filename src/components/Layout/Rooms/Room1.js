import React, {Component} from 'react';
import Scheduler from '../../Scheduler/Scheduler'
import { Link, Route } from 'react-router-dom'


class Room1 extends Component {
    state = {
        isCalendarShown: false
    }
    
    showCalendar = () => {
        this.setState({ isCalendarShown: true })    
    }

    render () {
    // console.warn(props)
    return ( 
        <>
            <Link 
                exact to ={`/${this.props._id}`}
            >
                <button onClick={this.showCalendar}>{this.props.description}</button>
            </Link>
            
            { this.state.isCalendarShown 
                ? <Route path='/:roomId' component={Scheduler}/>
                : null
            }
        </>
     );
}}
 
export default Room1;