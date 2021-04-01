import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import * as actionIndex from '../../../store/actions/actionIndex';

class Logout extends Component {
  componentDidMount() {
    this.props.onLogout();
  }
  render() {
    return <Redirect to="/" />;
  }
}

const mapDispatchToProps = (dispatch) => ({
  onLogout: () => dispatch(actionIndex.logout()),
});

export default connect(null, mapDispatchToProps)(Logout);
