import React, {Component} from 'react';
import { Alert } from 'react-bootstrap';

class TurnPlayer extends Component {
  render(){
    return(
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="alert alert-info text-center" role="alert">
            <b>Turn: <i>{this.props.turn}</i></b>
          </div>
        </div>
      </div>
    );
  }
}

export default TurnPlayer;