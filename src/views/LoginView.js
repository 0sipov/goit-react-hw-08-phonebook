import React, { Component } from 'react';
import { connect } from 'react-redux';
import operations from '../redux/auth/auth-operations';
import { Form, Button } from 'react-bootstrap';

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
      <Form
        autoComplete="off"
        onSubmit={this.handleSubmit}
        className="mt-4 ml-auto mr-auto"
        style={{ maxWidth: 400 }}
      >
        <Form.Group>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            onChange={e => this.handleChange(e)}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            onChange={e => this.handleChange(e)}
          />
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
          style={{ display: 'block', margin: 'auto' }}
        >
          Submit
        </Button>
      </Form>
    );
  }
}

const mapDispatchToProps = {
  onLogin: operations.login,
};

export default connect(null, mapDispatchToProps)(LoginView);
