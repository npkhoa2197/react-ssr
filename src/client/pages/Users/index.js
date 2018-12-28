import React from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';

import { fetchUsers } from '../../actions';

class Users extends React.Component {
  componentDidMount() {
    const { users } = this.props;

    if (users.length === 0) {
      this.props.fetchUsersAction();
    }
  }

  renderUsers = () => {
    return this.props.users.map(user => 
      <li key={user.id}>{user.name}</li>
    );
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>User Page</title>
          <meta property="og:title" content="User Page" />
        </Helmet>
        Here's a big list of users:
        <ul>{this.renderUsers()}</ul>
      </div>
    );
  }
}

export const loadData = (store) => {
  return store.dispatch(fetchUsers());
};

const mapStateToProps = (state) => ({
  users: state.users,
});

export default connect(
  mapStateToProps,
  {
    fetchUsersAction: fetchUsers,
  }
)(Users);