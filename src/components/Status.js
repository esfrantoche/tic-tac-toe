import React, {Component} from 'react';
import Player from './Player';
import TurnPlayer from './turnPlayer';
import { Badge } from 'reactstrap';

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
              <h1>The player <Badge color="secondary">{this.props.winner}</Badge> has won</h1>
            </div>
          </div>
        </div>
      );
    } else if(this.props.draw){
      return(
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="alert alert-warning text-center" role="alert">
              <h1>It was a draw</h1>{' '}
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