import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Button } from 'semantic-ui-react'




class Room extends Component {

    render() { 
       const {setColor, colorName, id} = this.props;

        // const roomNameStyle = {
        //     display: 'flex',
        //     flexDirection: 'column',    
        //     justifyContent: 'center'
        // }
        return ( 
            <div>
                
                <NavLink 
                    to ={`/room/${id}`}
                    // activeClassName={this.props.colorName}
                    >
                    <Button onClick={setColor(colorName)} color={colorName}>{colorName}</Button>
                </NavLink>         
            </div>
         );
    }
}
 
export default Room;