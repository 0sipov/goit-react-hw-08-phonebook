import React from 'react';
import { connect } from 'react-redux';
import selectors from '../../redux/auth/auth-selectors';
import operations from '../../redux/auth/auth-operations';
import { Badge, Button, Toast } from 'react-bootstrap';

const UserMenu = ({ onLogout, userName }) => {
  return (
    <>
      <Toast className="mr-auto mb-auto mt-auto">
        <Toast.Body style={{ textAlign: 'center', fontSize: 20 }}>
          Wellcome, {userName}!
        </Toast.Body>
      </Toast>

      <Button onClick={onLogout}>Logout</Button>
    </>
  );
};

const mapStateToProps = state => ({
  userName: selectors.getUserName(state),
});

const mapDispatchToProps = {
  onLogout: operations.logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
