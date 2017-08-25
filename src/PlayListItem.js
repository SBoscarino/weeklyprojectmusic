import React, { Component } from 'react';

class PlayListItem extends Component {
  constructor(props) {
  super();

  this.state = {
    songs: []
  }
}
  render(){
    return(
    <div>
      <h1>{this.props.song.songTitle}</h1>
      <h2>{this.props.songArtist}</h2>
      <h2>{this.props.userName}</h2>
      <h2>{this.props.songNotes}</h2>
    </div>
    )
  }
}

export default PlayListItem;
