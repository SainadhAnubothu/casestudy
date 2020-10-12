import React, { Component } from "react";
import data from "../../assets/UserProfiles.json";
class LoginService extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  validateUser(loginData) {
    return data.users.find(
      (user) =>
        loginData.username.includes(user.username) &&
        loginData.password.includes(user.password)
    );
  }
  render() {
    return <div></div>;
  }
}

export default LoginService;
