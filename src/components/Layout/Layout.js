import React from 'react'
import {connect} from 'react-redux'
import { Route, withRouter, Redirect } from 'react-router-dom'
import Authorization from '../Navbar/Authorization/Registration'
import SignIn from '../Navbar/Authorization/SignIn'
import Scheduler from '../Scheduler/Scheduler'
import Rooms from './Rooms/Rooms'

const layout = (props) => {
    const PrivateRoute = ({ component: Component, ...rest }) => (
        <Route {...rest} render={({isAuth}) => (
            isAuth === true
            ? <Component {...props} />
            : <Redirect to='/signIn' />
        )} />
      )
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
            {/* { !props.location.pathname === "/signIn" && "/signUp" ? <Rooms /> : null} */}
            <Route path='/room/:roomId' component={Scheduler} isAuth={props.isAuth}/>
        </>
     );
}

const mapStateToProps = store => ({
    isAuth: store.auth.isAuth
})

export default connect(mapStateToProps)(layout);