import React from 'react'
// import {connect} from 'react-redux'
import { Route } from 'react-router-dom'
import Authorization from './components/Navbar/Authorization/Registration'
import SignIn from './components/Navbar/Authorization/SignIn'
import Scheduler from './components/Scheduler/Scheduler'
import RoomsContainer from './components/Layout/Rooms/RoomsContainer'

const routeComponent = (props) => {
    // console.warn(props.location.pathname)
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
            <Route 
                path='/' 
                component={RoomsContainer}/>
            {/* <Route path='/room/:roomId' component={Scheduler} /> */}

            {/* { !props.location.pathname === "/signIn" && "/signUp" ? <Rooms /> : null} */}
            {/* <Route exact path='/' component={RoomsContainer}/> */}
            {/* <Route path='/room/:roomId' component={Scheduler} isAuth={props.isAuth}/> */}
        </>
     );
}

// const mapStateToProps = state => ({
//     isAuth: state.auth.isAuth
// })

export default routeComponent;