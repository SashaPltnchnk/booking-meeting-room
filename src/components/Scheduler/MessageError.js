import React, { Component } from 'react'
import {  Message } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { removeError } from '../../store/actions/events'



class MessageError extends Component {
     

    render () {
        let busy = this.props.err
        ?  <Message 
                onDismiss={this.props.removeError}
                header={this.props.err}
                color='yellow'> 
            </Message> 
        : null

        return (
            <>
              {busy}  
            </>
        
        )
    }
}



const mapStateToProps = state => {
    return {
        err: state.events.err
    }  
}

const mapDispatchToProps = { removeError }

export default connect(mapStateToProps, mapDispatchToProps)(MessageError)