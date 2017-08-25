import React, { Component } from 'react';
import './App.css';
import PlayListForm from './PlayListForm.js';
import PlayList from './PlayList.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        <PlayListForm />
        <PlayList />
      </div>
    );
  }
}

export default App;
