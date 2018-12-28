import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

export default (Component) => {
  class RequireAuth extends React.Component {
    render() {
      const { auth } = this.props;
      switch (auth) {
        case false:
          return <Redirect to="/" />;
        case null:
          return <div>Loading...</div>
        default:
          return <Component {...this.props} />;
      }
    }
  }

  const mapStateToProps = (state) => ({
    auth: state.auth,
  });

  return connect(mapStateToProps)(RequireAuth);
}