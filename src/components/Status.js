import React, {Component} from 'react';
import Player from './Player';
import TurnPlayer from './turnPlayer'

class Status extends Component {
  handleSetPlayer(e) {
    this.props.setPlayer(e)
  }

  renderWinner() {
    if(this.props.winner){
      return(
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="alert alert-primary text-center" role="alert">
              <b>The player <i>{this.props.winner}</i> has won</b>{' '}
            </div>
          </div>
        </div>
      );
    } else if(this.props.draw){
      return(
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="alert alert-warning text-center" role="alert">
              <b>It was a draw</b>{' '}
            </div>
          </div>
        </div>
      );
    }
    else {
      return this.props.player ? 
      <TurnPlayer turn = {this.props.player} /> :
      <Player player = {(e) => this.handleSetPlayer(e)} />
    }
  }
  render(){
    return (<div>{this.renderWinner()}</div>);
  }
}

export default Status;