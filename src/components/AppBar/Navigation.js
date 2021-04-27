import React from 'react';
import { connect } from 'react-redux';
import selectors from '../../redux/auth/auth-selectors';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav } from 'react-bootstrap';

const Navigation = ({ isAuthorization }) => {
  return (
    <Nav className="mr-auto">
      <LinkContainer to="/">
        <Nav.Link>Home page</Nav.Link>
      </LinkContainer>
      {isAuthorization && (
        <LinkContainer to="/contacts">
          <Nav.Link>Contacts</Nav.Link>
        </LinkContainer>
      )}
    </Nav>
  );
};

const mapStateToProps = state => {
  return {
    isAuthorization: selectors.getIsAuthorization(state),
  };
};

export default connect(mapStateToProps)(Navigation);
