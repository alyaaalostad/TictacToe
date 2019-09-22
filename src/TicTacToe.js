import React, { Component } from "react";
import Board from "./Board";

class TicTacToe extends Component {
  state = {
    x: true,
    boxes: Array(9).fill(""),
    result: ""
  };

  whoWon = boxes => {
    const cross = [
      [6, 4, 2],
      [2, 5, 8],
      [1, 4, 7],
      [0, 3, 6],
      [6, 7, 8],
      [3, 4, 5],
      [0, 1, 2],
      [0, 4, 8]
    ];
    let rbox = null;
    cross.forEach((box, i) => {
      let [a, b, c] = cross[i];
      if (box !== null) {
        if (boxes[a] && boxes[a] === boxes[b] && boxes[a] === boxes[c]) {
          rbox = boxes[a];
        }
      }
    });
    this.assignResult(rbox);
    return rbox;
  };

  whenClicked = i => {
    const boxes = this.state.boxes;
    boxes[i] = this.state.x ? "X" : "O";
    this.setState({
      boxes: boxes,
      x: !this.state.x
    });
    if (this.whoWon(this.state.boxes)) {
      return;
    }
  };
  CheckforTie = boxes => {
    for (let i = 0; i < this.state.boxes.length; i++) {
      if (boxes[i] === "") return false;
    }
    return true;
  };
  assignResult = winner => {
    let message;
    if (winner) {
      message = `Winner is ${winner}`;
      this.setState({ result: message });
    } else {
      message = "Next Player is " + (this.state.x ? "O" : "X");
      this.setState({ result: message });
      if (this.CheckforTie(this.state.boxes)) {
        message = "It's a Tie!";
        this.setState({ result: message });
      }
    }
  };

  render() {
    return (
      <>
        <div className="game">
          <div className="board">
            <Board
              onClick={i => this.whenClicked(i)}
              boxes={this.state.boxes}
            />
            <h2 className="position">{this.state.result}</h2>
          </div>
        </div>
      </>
    );
  }
}

export default TicTacToe;
