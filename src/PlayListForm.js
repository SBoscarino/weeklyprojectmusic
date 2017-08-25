import React, { Component } from 'react';

class PlayListForm extends Component {
  constructor(){
    super();

    this.state = {
      userName: 'userName',
      songArtist: 'artist',
      songTitle: 'song',
      songNotes: 'notes'
    };
  }

    addToList = (e) => {
        e.preventDefault();
        this.setState({userName: e.target.value, songTitle: e.target.value, songArtist: e.target.value, songNotes: e.target.value});
        let songs = JSON.stringify(this.state);
        console.log('console log in adToList',songs);

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
        <form onSubmit={this.addToList}>
          <div className="form-group">
            <input className="form-control" name="userName"  rows="3" type="text" value={this.state.userName} onChange={this.addToList}/>
          </div>
          <div className="form-group">
            <input className="form-control col-md-3" name="songArtist"  type="text" value={this.state.songArtist} onChange={this.addToList}/>
          </div>
          <div className="form-group">
            <input className="form-control col-md-3" name="songTitle"  type="text" value={this.state.songTitle} onChange={this.addToList}/>
          </div>
          <div className="form-group">
            <input className="form-control col-md-3" name="songNotes"  type="text" value={this.state.songNotes} onChange={this.addToList}/>
          </div>
          <div className="form-group pull-right">
            <button className="btn btn-primary btn-lg" type="submit">Submit</button>
          </div>
        </form>
      )
    }
}





export default PlayListForm;
