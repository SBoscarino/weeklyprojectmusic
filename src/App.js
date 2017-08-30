import React, { Component } from 'react';
import './App.css';
import PlayListForm from './PlayListForm.js';
import PlayList from './PlayList.js';
import NavBar from './NarBar.js'


class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <PlayListForm />
        <PlayList />
      </div>
    );
  }
}

export default App;
