import React, { Component } from "react";
import { connect } from "react-redux";
import { createAccount, companyLogin } from "../../actions/userActions";
// see where this came from. import {  createBirdImage } from '../../actions/birdActions'
import PropTypes from "prop-types";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };

    this.handleUserChange = this.handleUserChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUserChange(event) {
    this.setState({
      email: event.target.value,
    });
  }

  handlePasswordChange(event) {
    this.setState({
      password: event.target.value,
    });
  }

  handleCreateUser() {
    console.log("button clicked");
    this.props.createAccount();
  }

  async handleSubmit(event) {
    console.log("clicked submit");
    event.preventDefault();
    const login = {
      email: this.state.email,
      password: this.state.password,
    };
    await this.props.companyLogin(login);
  }

  render() {
    return (
      <div className="col-6 text-center d-flex justify-content-center">
        <div className="login-div">
          <h3>Log in to your company.</h3>
          <form onSubmit={(e) => this.handleSubmit(e)}>
            <input
              placeholder="Email"
              type="text"
              value={this.state.email}
              onChange={this.handleUserChange}
              required={true}
              size="26"
            />
            <br></br>
            <input
              placeholder="Password"
              type="password"
              value={this.state.password}
              onChange={this.handlePasswordChange}
              required={true}
              size="26"
            />
            <div>
              <button type="submit">Submit</button>
            </div>
          </form>
          <div>
            <br></br>
            <button onClick={() => this.handleCreateUser()}>
              Create New Account
            </button>
            <br></br>

            <p className="hidden" id="invalid">
              Invalid login. Please try again.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  createAccount: PropTypes.func.isRequired,
  companyLogin: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  pageDisplayed: state.pageDisplayed.type,
});

export default connect(mapStateToProps, {
  createAccount,
  companyLogin,
})(Login);
