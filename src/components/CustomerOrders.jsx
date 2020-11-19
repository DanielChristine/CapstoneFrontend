import React, { Component } from "react";
import "./App.css";
import React, { Component, useState } from "react";
import { connect } from "react-redux";
import { customer } from './CustomerLogin';

class CustomerOrders extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      company: "",
      quantity: "",
      requestedPickup: "",
      estimatedPrice: "" };
  }

  callAPI() {
    fetch("http://localhost:9000/testAPI")
      .then((res) => res.text())
      .then((res) => this.setState({ apiResponse: res }))
      .catch((err) => err);
  }

  componentDidMount() {
    this.callAPI();
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  onSubmit(e){
    e.preventDefault();
      
    const request = {
      company: this.state.company,
      quantity: this.state.password,
      requestedPickup: this.state.address
    }
    this.props.createCustomer(customer);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-intro"> {this.state.apiResponse}</h1>
        </header>
        <div>
          {""}
          <form>
            <label>Company name:</label>
            <input
              type="text"
              name="company"
              value={this.state.body}
              onChange={(e) => this.onChange(e)}
            />

            <div>
              {" "}
              <label>Quantity:</label>
              <input
                type="text"
                name="company"
                value={this.state.body}
                onChange={(e) => this.onChange(e)}
              />
            </div>
            <div>
              {" "}
              <label>Requested Pickup:</label>
              <input
                type="text"
                name="requestDate"
                value={this.state.body}
                onChange={(e) => this.onChange(e)}
              />
            </div>
            <div>
              {" "}
              <label>Estimated Price:</label>
              <input
                type="text"
                name="estimatedPrice"
                value={this.state.body}
                onChange={(e) => this.onChange(e)}
              />
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

export default CustomerOrders;
