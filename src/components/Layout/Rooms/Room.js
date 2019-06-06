import React, { Component } from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import { Button } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { setCurrentColor } from '../../../store/actions/color'



class Room extends Component {

    handleSettingColor = (color) => {
        this.props.setCurrentColor(color)
    }

    // componentDidMount() {
    //     debugger
    //     const {colors} = this.props
    //     const colorId = this.props.location.pathname.split('/')[2];
    //     const currentColor = colors.find(color => color.id === colorId)
    //     this.props.setCurrentColor(currentColor.color)
    // }

    render() { 
       const {colorName, id} = this.props;
        return ( 
            <div className={colorName}>
                <NavLink 
                    to ={`/room/${id}`}
                    >
                    <button 
                    // active
                        // size='large'
                        onClick={() => this.handleSettingColor(colorName)} 
                        // color={colorName}
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