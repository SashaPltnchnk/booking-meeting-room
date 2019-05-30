import React from 'react'
import { Route } from 'react-router-dom'
import Authorization from '../Navbar/Authorization/Authorization'
import SignIn from '../Navbar/Authorization/SignIn'
import Scheduler from '../Scheduler/Scheduler'
import Rooms from './Rooms/Rooms'

const layout = (props) => {
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
            <Route 
                path='/green' 
                render={() => <Scheduler 
                                // roomName={'Зеленая'} 
                                // quantity={'5'}  
                                authPath={'green'} 
                                roomClassName={'green'}
                                />} />
            <Route 
                path='/red' 
                render={() => <Scheduler 
                                // roomName={'Красная'} 
                                // quantity={'15'}  
                                authPath={'red'} 
                                roomClassName={'red'}
                                />} />
            <Route 
                path='/blue' 
                render={() => <Scheduler 
                                // roomName={'Синяя'} 
                                // quantity={'25'}  
                                authPath={'blue'} 
                                roomClassName={'blue'}
                                />} />
            <Route 
                path='/violet' 
                render={() => <Scheduler 
                                // roomName={'Фиолетовая'} 
                                // quantity={'25'}  
                                authPath={'violet'} 
                                roomClassName={'violet'}
                                />} />
        </>
     );
}



export default layout;