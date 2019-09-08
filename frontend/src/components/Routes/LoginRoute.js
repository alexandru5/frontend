import React, { Component } from "react";
import { connect } from "react-redux";
import { modifyLoginForm } from "../redux/actions/actions";
import { Route } from "react-router-dom";

class ConnectedLoginRoute extends Component {
  componentDidMount() {
    const register = this.props.path === "/register" ? true : false;
    console.log(register);
    this.props.modifyLoginForm({
      open: true,
      register
    });
  }
  render() {
    const { component: Component, ...rest } = this.props;

    console.log("DADASD");

    return <Route {...rest} render={props => <Component {...props} />} />;
  }
}

function mapDispatchToProps(dispatch) {
  return {
    modifyLoginForm: loginModal => dispatch(modifyLoginForm(loginModal))
  };
}

const mapStateToProps = state => {
  return {
    loginModal: state.auth.loginModal
  };
};

const LoginRoute = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectedLoginRoute);

export default LoginRoute;
