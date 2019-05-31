import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';




class Room extends Component {

    render() { 
       
    console.log(this.props)

        // const roomNameStyle = {
        //     display: 'flex',
        //     flexDirection: 'column',    
        //     justifyContent: 'center'
        // }
        return ( 
            <div>
                
                <NavLink 
                    to ={`/room/${this.props.id}`}
                    // activeClassName={this.props.colorName}
                    >
                    <Button variant="outlined" color="secondary">{this.props.colorName}</Button>
                </NavLink>         
                {/* <Typography variant="h6">{this.props.colorName}</Typography>   */}
            </div>
         );
    }
}
 
export default Room;