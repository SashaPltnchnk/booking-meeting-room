import React from 'react'
import {connect} from 'react-redux'
import { Route } from 'react-router-dom'
import Scheduler from './components/Scheduler/Scheduler'
import Dashboard from './components/Dashboard/Dashboard';

const routeComponent = (props) => {
    // console.warn(props.location.pathname)
    return ( 
        <>
            <Route path='/' component={Dashboard} />
            <Route path='/room/:roomId' component={Scheduler}/>
        </>
     );
}

const mapStateToProps = state => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps)(routeComponent);