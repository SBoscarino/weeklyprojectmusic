import React, { Component } from 'react';
import PlayListItem from './PlayListItem.js';

class PlayList extends Component {
  constructor(props) {
  super();

  this.state = {
    songs: []
  }
}

  componentDidMount(){
    this.fetchData();
  }

//Also in your PlayList component you should have a function that manually updates
//the playlist when a user presses a button. Use the following "fetchData" function
//to manually update your playlist.

  fetchData = () => {
      fetch('https://tiny-lasagna-server.herokuapp.com/collections/playlisting').then(results => {
        return results.json();
      }).then(data => {
        this.setState({songs: data});
      })
    }

  render() {
    return (
      <div>
      <button onClick={() => this.fetchData()}>Click me</button>
      {this.state.songs.map((songs, i) => {
        return (< PlayListItem key={i} song={songs} />)
    })}
      </div>
    )
  }

}

export default PlayList;
