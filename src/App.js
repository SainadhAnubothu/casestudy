import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./decorations/styles.css";
import LoginPage from "./components/loginmodule/loginComponent";
import Home from "./components/homedashboard";
import Header from "./components/header";
import FarmerPage from "./components/farmermodule/farmerComponent";
import SignUp from "./components/signUpModule/signUpComponent";

import "./App.css";

function App() {
  return (
    <Router>
      <Header></Header>
      <Route path="/" exact component={Home} />
      <Route path="/login" exact component={LoginPage} />
      <Route path="/farmer" exact component={FarmerPage} />
      <Route path="/signup" exact component={SignUp} />
    </Router>
  );
}

export default App;
