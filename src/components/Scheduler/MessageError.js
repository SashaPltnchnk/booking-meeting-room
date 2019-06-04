import React, { Component } from 'react'
import {  Message } from 'semantic-ui-react'
import { connect } from 'react-redux'



class MessageError extends Component {
    state = {
        visible: true
    }

    hideMassage = () => {
        this.setState({visible: false})
      }

    render () {
        let busy = this.props.err && this.state.visible
        ?  <Message 
            onDismiss={this.hideMassage}
            color='yellow'> 
                {this.props.err}
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

export default connect(mapStateToProps)(MessageError)