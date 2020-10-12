import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logInOut: true,
    };
  }
  logIn = () => {
    this.setState({ logInOut: false });
  };
  render() {
    return (
      <nav className="navbar bgColor">
        <div>CropDeal</div>
        <NavLink to="/login">
          <button onClick={this.logIn} style={{ border: "none" }}>
            {this.state.logInOut ? <label>Login</label> : <label>LogOut</label>}
          </button>
        </NavLink>
      </nav>
    );
  }
}

export default Header;
