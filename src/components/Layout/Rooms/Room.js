import React, { Component } from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { setCurrentColor } from '../../../store/actions/color'



class Room extends Component {

    handleSettingColor = (color) => {
        this.props.setCurrentColor(color)
    }

    render() { 
       const {colorName, id} = this.props;
        return ( 
            <div className={colorName}>
                <NavLink 
                    to ={`/room/${id}`}
                    >
                    <button 
                        onClick={() => this.handleSettingColor(colorName)} 
                        className={colorName}
                    >{colorName}
                    </button>
                </NavLink>         
            </div>
         );
    }
}

const mapStateToProps = state => ({
    colors: state.color.colors
})

const mapDispatchToProps = { setCurrentColor };
 
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Room));