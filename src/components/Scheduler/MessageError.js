import React, { Component } from 'react'
import {  Message } from 'semantic-ui-react'
import { connect } from 'react-redux'



class MessageError extends Component {
    state = {
        visible: true
    }

    // hideMessage = () => {
    //     this.setState({visible: false})
    //   }

      hideMessage = () => {
        setTimeout(() => {
            this.setState({ visible: false })
          }, 2000)
      }

    
    

    render () {
        let busy = this.state.visible 
        ?  <Message 
            onDismiss={this.hideMessage}
            header={this.props.err}
            color='yellow'> 
                {/* {this.props.err} */}
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