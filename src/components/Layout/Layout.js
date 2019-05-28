import React from 'react'
import { Route } from 'react-router-dom'
import Authorization from '../Navbar/Authorization/Authorization'
import SchedulerComponent from '../Scheduler/Scheduler'
import Rooms from './Rooms/Rooms'

const layout = (props) => {
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
            
            <Rooms />
            <SchedulerComponent />
        </>
     );
}



export default layout;