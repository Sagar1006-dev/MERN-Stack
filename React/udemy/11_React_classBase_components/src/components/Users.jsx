import React, { Component } from 'react';
import User from './User.jsx';
import classes from './Users.module.css';



class Users extends Component {
  constructor() {
    super(); // Call the parent constructor
    this.state = {
      showUsers: true,
      more: "Test",
    };
    this.toggleUsersHandler = this.toggleUsersHandler.bind(this); // Bind the method to the class instance
  }

  toggleUsersHandler() {
    this.setState((prevState) => {
      return { showUsers: !prevState.showUsers };
    });
  }

  render() {
    const usersList = (
      <ul>
        {this.props.users.map((user) => (
          <User key={user.id} name={user.name} />
        ))}
      </ul>
    );
    return (
      <div className={classes.users}>
        <button onClick={this.toggleUsersHandler}>
          {this.state.showUsers ? 'Hide' : 'Show'} Users
        </button>
        {this.state.showUsers && usersList}
      </div>
    );
  }
}

export default Users;
