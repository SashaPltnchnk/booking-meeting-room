import React, { Component } from 'react'
import { Button, Modal } from 'semantic-ui-react'
import { connect } from 'react-redux'



class SchedulerModal extends Component {
    render() {
        const { dimmer, openDeleteEvent, closeDeleteModal, handleDeleteEvent, event } = this.props

        let modalContent = <Modal.Header> {event.title} </Modal.Header>
        if (this.props.userId === event.user_id) {
            modalContent = 
            <>
                <Modal.Header>Remove reservation?</Modal.Header>
                <Modal.Actions>
                <Button color='black' onClick={closeDeleteModal}>
                    Nope
                </Button>
                <Button
                    positive
                    icon='checkmark'
                    labelPosition='right'
                    content="Yes"
                    onClick={() => handleDeleteEvent()}
                />
                </Modal.Actions>
            </>
        }

        return (
            <div>
                <Modal size='mini' dimmer={dimmer} open={openDeleteEvent} onClose={closeDeleteModal}>
                    {modalContent}
                </Modal>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        userId: state.auth.userId
    }  
}


export default  connect(mapStateToProps, null)(SchedulerModal)