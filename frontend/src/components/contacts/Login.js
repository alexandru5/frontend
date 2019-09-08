import React, { Component } from "react";
import { Link } from 'react-router-dom';

class Login extends Component {
  state = {
    email: "",
    password: "",
    submitted: false,
    errors: {}
  };

  onSubmit = e => {
    e.preventDefault();

    const { email, password, errors } = this.state;

    // Check For Errors
    if (email === "") {
      this.setState({ errors: { name: "Email is required" } });
      return;
    }

    if (password === "") {
      this.setState({ errors: { email: "Password is required" } });
      return;
    }
    this.props.history.push("/");
  };

  onChange = e => {
    this.setState({[e.target.name]: e.target.value });
  }

  onClick = e => {
    this.setState({submitted: true});
    this.setState({[e.target.name]: e.target.value });
    {this.state.email && this.state.password && this.props.history.push("/contacts", this.state.email);}
  }

  componentWillUnmount() {
    this.setState(this.state);
  }

  render() {
    const { email, password, submitted, errors } = this.state;

    return (
      <div className="col-md-6 col-md-offset-3">
      <h2>Login</h2>
      <form name="form" onSubmit={this.onSubmit}>
          <div className={'form-group' }>
             
              <input type="text" className="login-input" placeholder="Email: dummy@yahoo.com" name="email" value={email} onChange={this.onChange} />
              {submitted && !email &&
                  <div className="help-block">Email is required</div>
              }
          </div>
          <div className={'form-group'}>
             
              <input type="password" className="login-input" name="password" placeholder="Password" value={password} onChange={this.onChange} />
              {submitted && !password &&
                  <div className="help-block">Password is required</div>
              }
          </div>
          <div className="form-group">
              <button type="button" className="login-btn" className="btn btn-primary" onClick={this.onClick}>Login</button>
          </div>
      </form>
  </div>
    );
  }
}

export default Login;