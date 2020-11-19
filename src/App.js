import PropTypes from "prop-types";
import './App.css';
import React, {Component, useState} from "react";
import { connect } from "react-redux";
import store from './store';
import { Provider } from 'react-redux';


function App() {

  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header"> 
        <h1 className="App-intro"> {this.state.company}</h1>
        </header>
        <body>
          <div className="customerActions">
          <customerActions/>
          </div>
          <div className="customerRequest">
          <customerRequests/>
          </div>
        </body>
        <p className="App-intro">;{this.state.company}</p>
      </div>
    </Provider>
  )
}




export default App;
