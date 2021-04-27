import React from 'react';
import { connect } from 'react-redux';
import selectors from '../../redux/auth/auth-selectors';
import operations from '../../redux/auth/auth-operations';
import { Badge, Button } from 'react-bootstrap';

const UserMenu = ({ onLogout, userName }) => {
  return (
    <div>
      <Badge
        variant="primary"
        style={{ marginRight: 10, fontSize: 15, fontWeight: 400 }}
      >
        Wellcome, {userName}!
      </Badge>
      <Button onClick={onLogout}>Logout</Button>
    </div>
  );
};

const mapStateToProps = state => ({
  userName: selectors.getUserName(state),
});

const mapDispatchToProps = {
  onLogout: operations.logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
