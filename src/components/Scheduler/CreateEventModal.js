import React, { Component } from 'react'
import { Button, Modal, Input, Form, Message } from 'semantic-ui-react'
import { connect } from 'react-redux'


class CreateEventModal extends Component {
    render() {
        
        const {openCreateEventModal, dimmer, closeCreateModal, changeHandler, handleSelect, title, errors, isAuth } = this.props


        let modalContent = <Modal.Header> Sign in or register to have possibility of booking negotiation rooms </Modal.Header>
        if (isAuth) {
            modalContent = 
            <>
               
                <Modal.Header>New Event name</Modal.Header>
                
                <Modal.Content>
                    <Form onSubmit={
                        () => handleSelect()}>
                        <Form.Field>
                            <Input 
                                fluid 
                                name='event'
                                placeholder='event name' 
                                value={title} 
                                onChange={changeHandler} 
                            />
                        </Form.Field>   
                    </Form>    
                </Modal.Content>
                <Modal.Actions>
                    <Button color='black' onClick={closeCreateModal}>
                        Cancel
                    </Button>
                    <Button
                        positive
                        icon='checkmark'
                        labelPosition='right'
                        content="Add"
                        onClick={() => handleSelect()}
                    />
                </Modal.Actions>         
            </>
        }
        return (
            <div>
                <Modal size='tiny' dimmer={dimmer} open={openCreateEventModal} onClose={closeCreateModal}>
                    {errors && <Message warning>{errors}</Message>}
                    {modalContent}
                </Modal>
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        isAuth: state.auth.isAuth
    }
}


export default connect(mapStateToProps)(CreateEventModal)