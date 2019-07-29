import React, {Component} from 'react';
import { Badge } from 'reactstrap';

class TurnPlayer extends Component {
  render(){
    return(
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="alert alert-info text-center" role="alert">
            <h1>Turn: <Badge color="secondary">{this.props.turn}</Badge></h1>
          </div>
        </div>
      </div>
    );
  }
}

export default TurnPlayer;