import React, { Component } from 'react';
import { connect } from 'react-redux';
import operations from '../redux/auth/auth-operations';

class RegistrationView extends Component {
  state = {
    email: '',
    name: '',
    password: '',
  };

  handleChange = ({ target: { name, value } }) => {
    return this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onRegister(this.state);
  };

  render() {
    return (
      <div>
        <h1>Registration form</h1>
        <form autoComplete="off" onSubmit={this.handleSubmit}>
          <label>
            Email{' '}
            <input
              type="email"
              name="email"
              onChange={e => this.handleChange(e)}
            ></input>
          </label>
          <label>
            Name{' '}
            <input
              type="text"
              name="name"
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
          <button type="submit">Registration</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  onRegister: operations.register,
};

export default connect(null, mapDispatchToProps)(RegistrationView);
