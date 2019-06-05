import React, { Component } from 'react'
import {  Message, Icon  } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { removeError } from '../../store/actions/events'



class MessageError extends Component {
    // state = {
    //     visible: true
    // }

    // hideMessage = () => {
    //     this.setState({visible: false})
    //   }

    //   hideMessage = () => {
    //     setTimeout(() => {
    //         this.setState({ visible: false })
    //       }, 2000)
    //   }

    
    

    render () {
        let busy = this.props.err
        ?  <Message 
            onDismiss={this.props.removeError}
            // onDismiss={() => {
            //     setTimeout(() => {
            //         this.setState({ visible: false })
            //       }, 1000)
            // }}
            header={this.props.err}
            color='yellow'> 
{/*                
                {this.props.content} 
                 <Icon 
                    name='close' 
                    onClick={this.props.removeError}
                    /> */}
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