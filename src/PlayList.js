import React, { Component } from 'react';
import PlayListItem from './PlayListItem.js';
import './playlist.css'

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

//fetch, then function that manually updates the playlist when a user presses a button.
  fetchData = () => {
      fetch('https://tiny-lasagna-server.herokuapp.com/collections/playlisting').then(results => {
        return results.json();
      }).then(data => {
        this.setState({songs: data});
        console.log({songs:data});
      })
  }

  render() {
    return (
      <div className="buttonAndSongs">
        <button className="btn btn-primary btn-lg" onClick={() => this.fetchData()}>Click me to see new stuff!</button>
        <h1>Playlist:</h1>
        <hr/>
        {this.state.songs.map((song, i) => {
          return (<PlayListItem key={i} song={song} />)
      })}
      </div>
    )
  }

}

export default PlayList;
