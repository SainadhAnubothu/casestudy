import React, { Component, Fragment } from "react";
import { withRouter, NavLink } from "react-router-dom";
import LoginService from "./loginService";
import "../../decorations/styles.css";
const loginService = new LoginService();
class LoginPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
    };
  }

  loginHandler = () => {
    var val = loginService.validateUser(this.state);
    if (val != null && val.role === "farmer") {
      this.props.history.push("/farmer");
    }
  };
  handleChange = (event) => {
    event.target.name === "username"
      ? this.setState({
          username: event.target.value,
        })
      : this.setState({
          password: event.target.value,
        });
  };
  render() {
    return (
      <Fragment>
        <center className="container">
          <div className="col-md-8 col-xs-8 col-lg-8 col-sm-8 mt-5">
            <div className="row">
              <div className="col-md-3 col-xs-3 col-lg-3 col-sm-3">
                UserName :
              </div>
              <div className="col-md-3 col-xs-3 col-lg-3 col-sm-3">
                <input
                  type="text"
                  value={this.state.username}
                  onChange={this.handleChange}
                  name="username"
                ></input>
              </div>
            </div>
            <div className="row">
              <br></br>
            </div>
            <div className="row">
              <div className="col-md-3 col-xs-3 col-lg-3 col-sm-3">
                Password :
              </div>
              <div className="col-md-3 col-xs-3 col-lg-3 col-sm-3">
                <input
                  type="text"
                  value={this.state.password}
                  onChange={this.handleChange}
                  name="Password"
                ></input>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-md-3 col-xs-3 col-lg-3 col-sm-3">
                <button className="loginSubmit" onClick={this.loginHandler}>
                  Submit
                </button>
              </div>
              <div className="col-md-4 col-xs-4 col-lg-4 col-sm-4">
                <NavLink to="/signup">
                  <u>Signup If you are new!!!</u>
                </NavLink>
              </div>
            </div>
          </div>
        </center>
      </Fragment>
    );
  }
}

export default withRouter(LoginPage);
