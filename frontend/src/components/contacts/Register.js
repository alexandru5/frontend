import React, { Component } from "react";
import TextInputGroup from "../layout/TextInputGroup";
import { addContact } from '../../actions/contactActions';
import axios from 'axios';

class Login extends Component {
  state = {
    userName: "",
    email: "",
    phoneNo: "",
    password: "",
    errors: {}
  };

  onSubmit = e => {
    e.preventDefault();

    const { userName, email, phoneNo, password } = this.state;

    // Check For Errors
    if (userName === "") {
      this.setState({ errors: { userName: "Name is required" } });
      return;
    }

    if (email === "") {
      this.setState({ errors: { email: "Email is required" } });
      return;
    }

    if (phoneNo === "") {
      this.setState({ errors: { phoneNo: "Phone is required" } });
      return;
    }

    if (password === "") {
      this.setState({ errors: { password: "Password is required" } });
      return;
    }

    const newContact = {
      userName,
      email,
      phoneNo,
      password
    };

    //// SUBMIT CONTACT ////
    const res = axios.post(
      'http://localhost:8080/user/public/create',
      newContact
    );
    // Clear State
    this.setState({
      userName: "",
      email: "",
      phoneNo: "",
      password: "",
      errors: {}
    });

    this.props.history.push("/");
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { userName, email, phoneNo, password, errors } = this.state;

    return (
      <div className="card mb-3">
        <div className="card-header">Register</div>
        <div className="card-body">
          <form onSubmit={this.onSubmit}>
            <TextInputGroup
              label="Name"
              name="userName"
              placeholder="Enter Name"
              value={userName}
              onChange={this.onChange}
              error={errors.userName}
            />
            <TextInputGroup
              label="Email"
              name="email"
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={this.onChange}
              error={errors.email}
            />
            <TextInputGroup
              label="Phone"
              name="phoneNo"
              placeholder="Enter Phone"
              value={phoneNo}
              onChange={this.onChange}
              error={errors.phoneNo}
            />
            <TextInputGroup
              label="Password"
              name="password"
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={this.onChange}
              error={errors.password}
            />
            <input
              type="submit"
              value="Register"
              className="btn btn-light btn-block"
            />
          </form>
        </div>
      </div>
    );
  }
}

export default Login;