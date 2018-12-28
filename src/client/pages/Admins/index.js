import React from 'react';
import { connect } from 'react-redux';

import requireAuth from '../../components/HOCS/requireAuth';
import { fetchAdmins } from '../../actions';

class Admins extends React.Component {
  componentDidMount() {
    const { admins } = this.props;

    if (admins.length === 0) {
      this.props.fetchAdminsAction();
    }
  }

  renderAdmins = () => {
    return this.props.admins.map(admin => 
      <li key={admin.id}>{admin.name}</li>
    );
  }

  render() {
    return (
      <div>
        Here's a big list of admins:
        <ul>{this.renderAdmins()}</ul>
      </div>
    );
  }
}

export const loadData = (store) => {
  return store.dispatch(fetchAdmins());
};

const mapStateToProps = (state) => ({
  admins: state.admins,
});

export default connect(
  mapStateToProps,
  {
    fetchAdminsAction: fetchAdmins,
  }
)(requireAuth(Admins));