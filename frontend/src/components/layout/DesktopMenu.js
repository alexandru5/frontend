import React, { Component } from "react";
import {
  Button,
  Container,
  Menu,
  MenuItem,
  Image,
  Dropdown,
  Flag
} from "semantic-ui-react";
import { NavLink, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Login from "../Modals/Login/Login";

import {
  carouselVisible,
  modifyActiveItem,
  modifyLoginForm,
  deauthenticate,
  loadLiterals
} from "../redux/actions/actions";

import Aux from "../../hoc/aux";

class ConnectedDesktopMenu extends Component {
  handleItemClick = (e, { name }) => {
    this.props.modifyActiveItem(name);
    this.props.carouselVisible(true);
  };

  handleCarousel = (e, { name }) => {
    this.props.modifyActiveItem(name);
    this.props.carouselVisible(false);
  };

  handleLogout = () => {
    this.props.deauthenticate();
  };

  handleChange = (e, { value }) => {
    this.props.loadLiterals(value);
  };

  hasPermission = userType => {
    if (this.props.isAuth) {
      switch (userType) {
        case 0:
          return this.props.userType.length === 2;
        case 1:
          return true;
        default:
          return false;
      }
    }
    return false;
  };

  render() {
    return (
      <Menu
        fixed={this.props.fixed ? "top" : null}
        inverted={!this.props.fixed}
        pointing={!this.props.fixed}
        secondary={!this.props.fixed}
        size="large"
      >
      
        <MenuItem
          as={NavLink}
          exact
          to="/"
          name="home"
          onClick={this.handleItemClick}
        >
          Home
        </MenuItem>
        <MenuItem
          as={NavLink}
          exact
          to="/front"
          name="home"
          onClick={this.handleItemClick}
        >
          Frontpage
        </MenuItem>

        <MenuItem position="right">
          {/* {this.hasPermission(1) ? (
            <SearchExampleStandard style={{ marginRight: "2em" }} />
          ) : null} */}
          <Container fluid>
            {!this.props.isAuth ? (
              <Aux>
                <Button
                  as={NavLink}
                  to="/login"
                  inverted={!this.props.fixed}
                >
                  Login
                </Button>
                <Button
                  as={NavLink}
                  to="/register"
                  inverted={!this.props.fixed}
                  primary={this.props.fixed}
                >
                  Register
                </Button>
              </Aux>
            ) : (
              <Button
                as={NavLink}
                to="/"
                inverted={!this.props.fixed}
                primary={this.props.fixed}
                onClick={this.handleLogout}
              >
                Logout
              </Button>
            )}

            <Login />
          </Container>
        </MenuItem>
      </Menu>
    );
  }
}

const mapStateToProps = state => {
  return {
    showCarousel: state.showCarousel.showCarousel,
    activeItem: state.showCarousel.activeItem,
    loginModal: state.showCarousel.loginModal,
    isAuth: state.auth.isAuth,
    userType: state.auth.user.authorities,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    carouselVisible: showCarousel => dispatch(carouselVisible(showCarousel)),
    modifyActiveItem: activeItem => dispatch(modifyActiveItem(activeItem)),
    modifyLoginForm: loginModal => dispatch(modifyLoginForm(loginModal)),
    deauthenticate: () => dispatch(deauthenticate()),
  };
}

const DesktopMenu = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectedDesktopMenu);

export default withRouter(DesktopMenu);
