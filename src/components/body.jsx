import React from 'react';
import './App.css';
import Comments from './components/Comments';
import CommentForm from './components/CommentForm';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <CommentForm/>
        <hr />
        <Schedule/>
        
      </header>
    </div>
    </Provider>
  );
}

export default App;
