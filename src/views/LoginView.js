import React, { Component } from 'react';
import { connect } from 'react-redux';
import operations from '../redux/auth/auth-operations';

class LoginView extends Component {
  state = {
    email: '',
    password: '',
  };

  handleChange = ({ target: { name, value } }) => {
    return this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onLogin(this.state);
  };

  render() {
    return (
      <div>
        <h1>Login form</h1>
        <form autoComplete="off" onSubmit={this.handleSubmit}>
          <label>
            Email
            <input
              type="email"
              name="email"
              onChange={e => this.handleChange(e)}
            ></input>
          </label>
          <label>
            Password
            <input
              type="password"
              name="password"
              onChange={e => this.handleChange(e)}
            />
          </label>
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  onLogin: operations.login,
};

export default connect(null, mapDispatchToProps)(LoginView);
