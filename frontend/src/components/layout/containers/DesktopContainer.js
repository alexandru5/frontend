import React, { Component } from 'react'
import getWidth from "../../../actions/getWidth"
import {
  Button,
  Container,
  Menu,
  Responsive,
  Segment,
  Visibility
} from 'semantic-ui-react'
import FooterLayout from '../pages/FooterLayout';
import { NavLink } from "react-router-dom";
import Login from "../../Modals/Login/Login";
import Homepage from '../../../compcss/Homepage.css';
import { connect } from "react-redux";
import DesktopMenu from '../DesktopMenu'

class ConnectedDesktopContainer extends Component {
    state = {}
  
    hideFixedMenu = () => this.setState({ fixed: false })
    showFixedMenu = () => this.setState({ fixed: true })
  
    render() {
      const { children } = this.props
      const { fixed } = this.state
      
      return (
        <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
          <Visibility
            once={false}
            onBottomPassed={this.showFixedMenu}
            onBottomPassedReverse={this.hideFixedMenu}
          >
            <Segment
              inverted
              textAlign='center'
              style={{ minHeight: 700, padding: '1em 0em' }}
              vertical
              className="Homepage"
            >
             <DesktopMenu></DesktopMenu>  
            </Segment>
          </Visibility>
          {children}
          <FooterLayout/>
        </Responsive>
      )
    }
}

const DesktopContainer = connect()(ConnectedDesktopContainer);


export default DesktopContainer;