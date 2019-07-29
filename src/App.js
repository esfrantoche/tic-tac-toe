import React, {Component} from 'react';
import './App.css';
import Status from './components/Status';
import { Badge, Card, CardTitle, CardText, Modal, ModalHeader, ModalBody } from 'reactstrap';

class App extends Component{
  constructor (props){
    super(props)
    this.state = {
      board : Array(9).fill(null),
      turn: null,
      winner: null,
      draw:false,
      modal:false
    };
    this.toggle = this.toggle.bind(this);
  }

  handleClick(index){
    if(this.state.turn && !this.state.winner){
      let updatedBoard = this.state.board;
      if (this.state.board[index] === null){
        updatedBoard[index] = this.state.turn;
        let nextTurn = this.state.turn === "X" ? "0" : "X";
        this.setState({
          board: updatedBoard,
          turn: nextTurn
        });
      }
      this.winCalculation();
    }
  }
  winCalculation(){
    let tttRows =
    [
      ["0", "1", "2"],
      ["3", "4", "5"],
      ["6", "7", "8"],
      ["0", "3", "6"],
      ["1", "4", "7"],
      ["2", "5", "8"],
      ["0", "4", "8"],
      ["2", "4", "6"],
    ]
    this.checkWon(tttRows);
  }

  checkWon(tttRows) {
    let isDraw = true;
    for (let index = 0; index < tttRows.length; index++) {
      const [a,b,c] = tttRows[index];
      if(this.state.board[a] && this.state.board[a] === this.state.board[b] && this.state.board[a] === this.state.board[c]){
        this.setState({
          winner:this.state.turn,
          modal:true
        });
      }
      if(this.state.board[a] === null ||  this.state.board[b] === null ||  this.state.board[c] === null){
        isDraw = false;
      }
      this.setState({draw:isDraw})
    }
  }

  setPlayer(player){
    this.setState({
      turn: player
    });
  }

  gameReset(){
    this.setState({
      board : Array(9).fill(null),
      turn: null,
      winner: null,
      draw:false,
      modal:false
    });
  }
  
  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render(){
    const Box = this.state.board.map(
      (box, index) => 
        <div
            className="box col-md-4 text-center" 
            key={index} 
            onClick={ (e) => this.handleClick(index)}>
            <h1><Badge color="secondary">{box}</Badge></h1>
              
        </div>
      );
    return (
      <div className="container">
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Result</ModalHeader>
          <ModalBody>
            You won !            
          </ModalBody>
        </Modal>
        <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
          <CardTitle>Tic Tac Toe Game</CardTitle>
          <CardText>
            <Status 
              player = {this.state.turn} 
              setPlayer = {(e) => {this.setPlayer(e)}}
              winner = {this.state.winner}
              draw = {this.state.draw} />
            <button type="button" class="btn btn-danger" onClick={() => this.gameReset()}>Restart</button>
          </CardText>
        </Card>
        <Card body outline color="secondary">
          <CardText>
            <div className="row">
              {Box}
            </div>
          </CardText>
        </Card>
        
      </div>
    );
  }
}

export default App;
