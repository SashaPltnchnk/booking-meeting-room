import React from 'react'
import { Route } from 'react-router-dom'
import Authorization from '../Navbar/Authorization/Authorization'
// import Scheduler, {SchedulerData, ViewTypes, DATE_FORMAT} from 'react-big-scheduler'
// import 'react-big-scheduler/lib/css/style.css'
// import moment from 'moment'
// import SchedulerComponent from '../Scheduler/Scheduler'
// import Dayz from '../Scheduler/Dayz'
// import Calendar from '../Scheduler/Calendar'
import Rooms from './Rooms/Rooms'

const layout = (props) => {
    // const {schedulerData} = this.props;
    return ( 
        <>
            <Route 
                path='/login' 
                render={() => <Authorization
                                buttonName={'Log In'} 
                                authPath={'login'} 
                                />} 
            />
            <Route 
                path='/register' 
                render={() => <Authorization 
                                buttonName={'Register'} 
                                authPath={'register'} 
                                />} 
            />
            {/* <SchedulerComponent /> */}
            {/* <SchedulerComponent 
                schedulerData={props.schedulerData}
                prevClick={props.prevClick}
                nextClick={props.nextClick}
                onSelectDate={props.onSelectDate}
                onViewChange={props.onViewChange}
                eventItemClick={props.eventClicked}
                /> */}
            {/* <Dayz /> */}
            {/* <Calendar /> */}
            <Rooms />
        </>
     );
}



export default layout;