import React, { Component } from 'react'
import { Button, Modal, Input, Form } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { addError } from '../../store/actions/events'


import schema from './form-schema'

export const asyncValidate = value => {
    // const {title} = this.props

    return new Promise((resolve, reject) => {

        console.log(value)

        //Validate our form values against our schema! Also dont abort the validate early.
        schema.validate(value, {abortEarly: false})
            .then(() => {
                //form is valid happy days!
                alert('Your form is valid!')
                resolve();
            })
            .catch(err => {
                console.log(err.errors)
                addError(err.errors)

            })
    });

};


class CreateEventModal extends Component {
    render() {
        // console.warn('RRRR', this.props.err);
        
        const {openCreateEventModal, dimmer, closeCreateModal, changeHandler, handleSelect, title } = this.props


        let modalContent = <Modal.Header> Sign in or register to have possibility of booking rooms </Modal.Header>
        if (this.props.isAuth) {
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

const mapDispatchToProps = { addError }


export default connect(mapStateToProps, mapDispatchToProps)(CreateEventModal)