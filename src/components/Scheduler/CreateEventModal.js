import React, { Component } from 'react'
import { Button, Modal, Input, Form } from 'semantic-ui-react'


class CreateEventModal extends Component {
    render() {
        console.warn('RRRR', this.props.err);
        
        const {openCreateEventModal, dimmer, closeCreateModal, changeHandler, handleSelect, title } = this.props
        return (
            <div>
                <Modal size='tiny' dimmer={dimmer} open={openCreateEventModal} onClose={closeCreateModal}>
                    <Modal.Header>New Event name</Modal.Header>
                    
                    <Modal.Content>
                        <Form onSubmit={() => handleSelect()}>
                            <Form.Field>
                                <Input 
                                    fluid 
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
                 </Modal>
            </div>
        )
    }
}



export default CreateEventModal