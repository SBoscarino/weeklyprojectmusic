import React, { Component } from 'react';

class PlayListItem extends Component {
  constructor(props) {
  super(props);

  this.state = {
    songs: []
  }
}
  render(){
    // console.log("hey",this.props)
    return(
    <div>
      <h1 className="titlesong">{this.props.song.songTitle}</h1>
      <h3> {this.props.song.songArtist}</h3>
      <h3>{this.props.song.userName}</h3>
      <h3>{this.props.song.songNotes}</h3>
    </div>
    )
  }
}

export default PlayListItem;
