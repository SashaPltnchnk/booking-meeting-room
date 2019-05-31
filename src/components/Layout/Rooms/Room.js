import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';




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
                <Link to ={`/room/${this.props.id}`}>
                    <Button variant="outlined" color="secondary">{this.props.colorName}</Button>
                </Link>           
            </div>
         );
    }
}
 
export default Room;