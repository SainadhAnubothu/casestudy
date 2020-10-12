import React, { Component } from "react";
import data from "../../assets/UserProfiles.json";
class SignUpService extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  pushNewUser(loginData) {
    console.log(loginData);
    data.users.push(loginData);
    console.log("tews" + data.users.length);
  }
  render() {
    return <div></div>;
  }
}

export default SignUpService;
