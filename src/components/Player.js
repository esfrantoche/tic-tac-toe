import React, {Component} from 'react';
import { Form, Button, Col } from 'react-bootstrap';
import { CardText } from 'reactstrap';

class Player extends Component{
  handleForm(e) {
    e.preventDefault();
    this.props.player(e.target.player.value);
  }
  render(){
    return (
      <div>
          <CardText>Choose a player to start.</CardText>
          <Form onSubmit={(e) => this.handleForm(e)}>
            <Form.Row>
              <Form.Group as={Col} controlId="formBasicChecboxP1">
                <Form.Label>Player 1 (X)</Form.Label>
                <Form.Check type="radio" name="player" value="X" />
              </Form.Group>
              <Form.Group as={Col} controlId="formBasicChecboxP2">
                <Form.Label>Player 2 (0)</Form.Label>
                <Form.Check type="radio" name="player" value="0" />
              </Form.Group>
              <Button color="primary" type="submit">
                Start Game
              </Button>{' '}
            </Form.Row>
          </Form>
      </div>)
  };
}

export default Player;