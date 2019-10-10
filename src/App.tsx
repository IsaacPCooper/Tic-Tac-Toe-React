import * as React from "react";
import logo from "./logo.svg";
import "./App.css";

type ONGOING_GAME = -1;
const ONGOING_GAME = -1;

enum Player {
  None = 0,
  One = 1,
  Two = 2
}

interface IState {
  board: Player[];
  gameisWon: Player | ONGOING_GAME;
  nextPlayerTurn: Player;
}

/* Player.none identifies no user has chosen a cell
 * 0 can also be used, however this code is more efficent + easier to debug.
 */
class App extends React.Component<{}, IState> {
  public state = {
    board: [
      Player.None,
      Player.None,
      Player.None,
      Player.None,
      Player.None,
      Player.None,
      Player.None,
      Player.None,
      Player.None
    ],
    gameisWon: ONGOING_GAME,
    nextPlayerTurn: Player.One
  };

  public checkGameState = (board: Player[]) => {
    // WIN CHECK
    if (
      board[0] === board[1] &&
      board[1] === board[2] &&
      board[2] !== Player.None
    ) {
      return board[0];
    } else if (
      board[3] === board[4] &&
      board[4] === board[5] &&
      board[5] !== Player.None
    ) {
      return board[3];
    } else if (
      board[6] === board[7] &&
      board[7] === board[8] &&
      board[8] !== Player.None
    ) {
      return board[6];
    } else if (
      board[0] === board[3] &&
      board[3] === board[6] &&
      board[6] !== Player.None
    ) {
      return board[0];
    } else if (
      board[1] === board[4] &&
      board[4] === board[7] &&
      board[7] !== Player.None
    ) {
      return board[1];
    } else if (
      board[2] === board[5] &&
      board[5] === board[8] &&
      board[8] !== Player.None
    ) {
      return board[2];
    } else if (
      board[0] === board[4] &&
      board[4] === board[8] &&
      board[8] !== Player.None
    ) {
      return board[0];
    }

    //Draw Check
    for (const player of board) {
      if (player === Player.None) {
        return ONGOING_GAME;
      }
    }
    return Player.None;
  };

  public createOnClickHandler = (index: number) => () => {
    const { board, nextPlayerTurn, gameisWon } = this.state;

    if (gameisWon !== ONGOING_GAME || board[index] !== Player.None) {
      return;
    }

    //Player Cannot overwrite taken square, if square has value other than Player.None, they cannot effect it.
    if (board[index] !== Player.None) {
      return;
    }
    const newBoard = board.slice();
    newBoard[index] = nextPlayerTurn;
    const newGameIsWon = this.checkGameState(newBoard);
    this.setState({
      board: newBoard,
      nextPlayerTurn: 3 - nextPlayerTurn,
      gameisWon: newGameIsWon
    });
  };

  public renderCell = (index: number) => {
    const { board } = this.state;
    return (
      <div
        className="cell"
        onClick={this.createOnClickHandler(index)}
        data-player={board[index]}
      />
    );
  };

  public renderBoard = () => {
    const { board } = this.state;

    return (
      <div className="board-container">
        {board.map((value, key) => this.renderCell(key))}
      </div>
    );
  };
  public renderStatus = () => {
    const { gameisWon } = this.state;

    const winningText =
      gameisWon !== Player.None
        ? `Player ${gameisWon} won`
        : `The game is a draw!`;
    return (
      <div className="App-status">
        {"Player 1 is Red"} <br />
        {"Player 2 is Blue"} <br />
        {gameisWon === ONGOING_GAME ? "The Game is in progress" : winningText}
      </div>
    );
  };

  public render() {
    return (
      <div className="App">
        <div className="App-wrap">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-Title">
              {" "}
              Tic Tac Toe Application using React TypeScript
            </h1>
          </header>
          {this.renderBoard()}
          {this.renderStatus()}
          <footer className="App-footer"></footer>
        </div>
      </div>
    );
  }
}

export default App;
