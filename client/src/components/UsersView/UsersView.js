import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import User from '../Users/User';
import axios from 'axios';

class UsersView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }
  componentDidMount() {
    axios
      .get('http://localhost:8081/api/users')
      .then(element => {
        console.log('element: ', element);
        this.setState({ users: element.data });
      })
      .catch(err => {
        alert('error');
      });
  }

  render() {
    return (
      <div style={{ margin: 15 }}>
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
