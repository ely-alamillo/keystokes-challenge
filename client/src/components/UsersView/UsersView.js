import React, { Component } from 'react';
import User from '../Users/User';
import axios from 'axios';
import './UsersView.css';

class UsersView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }
  componentDidMount() {
    axios
      .get('https://keystokes-ely.herokuapp.com/api/users')
      .then(element => {
        this.setState({ users: element.data });
      })
      .catch(err => {
        alert('error');
      });
  }

  render() {
    return (
      <div className="users-view-container">
        <div style={{ margin: 15 }}>
          <h1>All Users</h1>
        </div>
        {this.state.users.map((user, i) => {
          return (
            <div style={{ margin: 15 }} key={i}>
              <User
                firstName={user.firstName}
                lastName={user.lastName}
                email={user.email}
                description={user.description}
              />
            </div>
          );
        })}
      </div>
    );
  }
}

export default UsersView;
