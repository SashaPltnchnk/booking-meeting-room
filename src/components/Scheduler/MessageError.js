import React, { Component } from 'react'
import { Button, Modal, Input, Form,  Message, Icon } from 'semantic-ui-react'
import { connect } from 'react-redux'



class MessageError extends Component {
    state = {
        visible: true
    }

    hideMassage = () => {
        this.setState({visible: false})
      }

    showMessage = () => {

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