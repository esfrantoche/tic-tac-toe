import React, {Component} from 'react';
import { Form, Button, Col } from 'react-bootstrap';

class Player extends Component{
  render(){
    return <Form>
            <Form.Row>
              <Form.Group as={Col} controlId="formBasicChecboxP1">
                <Form.Label>Player 1 (X)</Form.Label>
                <Form.Check type="radio" name="player" value="X" />
              </Form.Group>
              <Form.Group as={Col} controlId="formBasicChecboxP2">
                <Form.Label>Player 2 (0)</Form.Label>
                <Form.Check type="radio" name="player" value="0" />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Button variant="primary" type="submit">
                New Game
              </Button>
              <Form.Text as={Col} className="text-muted">
                Start Game or select game
              </Form.Text>
            </Form.Row>
          </Form>
  };
}

export default Player;