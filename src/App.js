import React, {Component} from 'react';
import './App.css';
import Status from './components/Status';
class App extends Component{
  constructor (props){
    super(props)
    this.state = {
      board : Array(9).fill(null),
      turn: null,
      winner: null,
      draw:false
    }
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
        alert("you won");
        this.setState({winner:this.state.turn});
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
      draw:false
    });
  }

  render(){
    const Box = this.state.board.map(
      (box, index) => 
        <div
            className="box col-md-4 text-center" 
            key={index} 
            onClick={ (e) => this.handleClick(index)}>
              {box}
        </div>
      );
    return (
      <div className="container">
        <h1>Tic Tac Toe Game</h1>
        <Status 
          player = {this.state.turn} 
          setPlayer = {(e) => {this.setPlayer(e)}}
          winner = {this.state.winner}
          draw = {this.state.draw} />
        <div className="row">
          {Box}
        </div>
        <button type="button" class="btn btn-success" onClick={() => this.gameReset()}>Restart</button>
      </div>
    );
  }
}

export default App;
