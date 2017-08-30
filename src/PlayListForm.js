import React, { Component } from 'react';
import './form.css';

class PlayListForm extends Component {
  constructor(){
    super();

    this.state = {
      songs: [],
      userName: '',
      songArtist: '',
      songTitle: '',
      songNotes: ''
    };
  }

  handleInputSong = (e) => {
    e.preventDefault();
    console.log('song', e.target.value)
    this.setState({songTitle: e.target.value});
  }
  handleInputArtist = (e) => {
    e.preventDefault();
    console.log('Artist', e.target.value)
    this.setState({songArtist: e.target.value});
  }
  handleInputUserName = (e) => {
    e.preventDefault();
    console.log('UserName', e.target.value)
    this.setState({userName: e.target.value});
  }
  handleInputNotes = (e) => {
    e.preventDefault();
    console.log('Notes', e.target.value)
    this.setState({songNotes: e.target.value});
  }

  addToList = (e) => {
      e.preventDefault();
      this.state.songs.push({userName: e.target.value, songTitle: e.target.value, songArtist: e.target.value, songNotes: e.target.value});
      let songs = JSON.stringify(this.state);
      console.log('console log in adToList', songs);

      fetch("https://tiny-lasagna-server.herokuapp.com/collections/playlisting", {
        method: "POST",
        body: songs,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      }
    }
    ).then(response => {
      console.log(response, "yay");

    }).catch(err => {
      console.log(err, "boo!");
    });
    this.setState({userName: '', songNotes: '', songArtist: '', songTitle:''});
  }

    render(){
      return(
        <form className="form" onSubmit={this.addToList}>
          <div className="form-group">
            <label>user</label>
            <input className="form-control" name="userName"  rows="3" type="text" value={this.state.userName} onChange={this.handleInputUserName}/>
          </div>
          <div className="form-group">
            <label>Artist</label>
            <input className="form-control col-md-3" name="songArtist"  type="text" value={this.state.songArtist} onChange={(e) => this.handleInputArtist(e)}/>
          </div>
          <div className="form-group">
            <label>title</label>
            <input className="form-control col-md-3" name="songTitle"  type="text" value={this.state.songTitle} onChange={(e) => this.handleInputSong(e)}/>
          </div>
          <div className="form-group">
            <label>Notes</label>
            <input className="form-control col-md-3" name="songNotes"  type="text" value={this.state.songNotes} onChange={(e) => this.handleInputNotes(e)}/>
          </div>
          <div className="form-group pull-right">
            <button className="btn btn-primary btn-lg" type="submit">Submit</button>
          </div>
        </form>
      )
    }
}





export default PlayListForm;
