import React, { Component, Fragment } from "react";
import "../../decorations/styles.css";
import SignUpService from "./signUpService";

const signUpService = new SignUpService();
class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      role: "",
    };
  }
  signupHandler = () => {
    console.log(this.state);
    signUpService.pushNewUser(this.state);
  };
  handleChange = (event) => {
    if (event.target.name === "username") {
      this.setState({
        username: event.target.value,
      });
    } else if (event.target.name === "password") {
      this.setState({
        password: event.target.value,
      });
    } else {
      this.setState({
        role: event.target.value,
      });
    }
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
                  name="password"
                ></input>
              </div>
            </div>
            <div className="row">
              <br></br>
            </div>
            <div className="row">
              <div className="col-md-3 col-xs-3 col-lg-3 col-sm-3">Role :</div>
              <div className="col-md-3 col-xs-3 col-lg-3 col-sm-3 ">
                <select
                  style={{ width: "100%" }}
                  name="role"
                  value={this.state.role}
                  onChange={this.handleChange}
                >
                  <option value="">Select</option>
                  <option value="admin">Admin</option>
                  <option value="farmer">Farmer</option>
                  <option value="vendor">Vendor</option>
                </select>
              </div>
            </div>
            <div className="row mt-4">
              <div
                className="col-md-6 col-xs-6 col-lg-6 col-sm-6"
                style={{ align: "center" }}
              >
                <button className="loginSubmit" onClick={this.signupHandler}>
                  Submit
                </button>
              </div>
            </div>
          </div>
        </center>
      </Fragment>
    );
  }
}

export default SignUp;
