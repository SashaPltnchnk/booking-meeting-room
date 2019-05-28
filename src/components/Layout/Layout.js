import React from 'react'
import { Route } from 'react-router-dom'
import Authorization from '../Navbar/Authorization/Authorization'
import Scheduler from '../Scheduler/Scheduler'
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
            <Route 
                path='/green' 
                render={() => <Scheduler 
                                // roomName={'Зеленая'} 
                                // quantity={'5'}  
                                authPath={'green'} 
                                />} />
            <Route 
                path='/red' 
                render={() => <Scheduler 
                                // roomName={'Красная'} 
                                // quantity={'15'}  
                                authPath={'red'} 
                                />} />
            <Route 
                path='/blue' 
                render={() => <Scheduler 
                                // roomName={'Синяя'} 
                                // quantity={'25'}  
                                authPath={'blue'} 
                                />} />
            <Route 
                path='/violet' 
                render={() => <Scheduler 
                                // roomName={'Фиолетовая'} 
                                // quantity={'25'}  
                                authPath={'violet'} 
                                />} />
        </>
     );
}



export default layout;