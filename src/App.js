import React, {Component} from 'react';
import './App.css';
import Player from './components/Player';

class App extends Component{
  constructor (props){
    super(props)
    this.state = {
      board : Array(9).fill(null),
      turn: null,
      winner: null
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
    for (let index = 0; index < tttRows.length; index++) {
      const [a,b,c] = tttRows[index];
      if(this.state.board[a] && this.state.board[a] === this.state.board[b] && this.state.board[a] === this.state.board[c]){
        alert("You won");
        this.setState({winner:this.state.turn});
      }
    }
  }
  setPlayer(player){
    this.setState({
      turn: player
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
        <Player player={(e) => this.setPlayer(e)}/>
        <div className="row">
          {Box}
        </div>
      </div>
    );
  }
}

export default App;
