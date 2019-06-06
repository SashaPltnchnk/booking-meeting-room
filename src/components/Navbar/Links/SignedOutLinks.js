import React, { Component } from 'react'
import { Button, Modal } from 'semantic-ui-react'
import SignIn from '../Authorization/SignIn';
import Registration from '../Authorization/Registration';


class LogOutLinks extends Component {

  render() {
    return (
      <div>
        <Modal 
          size='tiny'
          trigger={<Button color='black'>Sign In</Button>}> 
            <Modal.Content>
              <SignIn/>
            </Modal.Content>
        </Modal>
        <Modal 
          size='tiny'
          trigger={<Button color='black'>Register</Button>}> 
            <Modal.Content>
              <Registration />
            </Modal.Content>
        </Modal>
      </div>
    )
  }
}

export default LogOutLinks