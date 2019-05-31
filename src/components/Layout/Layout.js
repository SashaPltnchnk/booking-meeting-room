import React from 'react'
import { Route } from 'react-router-dom'
import Authorization from '../Navbar/Authorization/Registration'
import SignIn from '../Navbar/Authorization/SignIn'
import Scheduler from '../Scheduler/Scheduler'
import Rooms from './Rooms/Rooms'

const layout = () => {
    return ( 
        <>
            <Route 
                path='/signIn' 
                render={(props) => <SignIn
                                buttonName={'Sign In'} 
                                authPath={'signIn'} 
                                {...props}
                                />} 
            />
            <Route 
                path='/signUp' 
                render={(props) => <Authorization 
                                buttonName={'Register'} 
                                authPath={'signUp'} 
                                {...props}
                                />} 
            />
            <Rooms />
            <Route path='/room/:roomId' component={Scheduler}/>
        </>
     );
}



export default layout;