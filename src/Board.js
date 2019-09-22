import React, { Component } from "react";

//components
import SquareBox from "./SquareBox";

class Board extends Component {
  square(i) {
    return (
      <SquareBox
        value={this.props.boxes[i]}
        onClick={() => {
          this.props.onClick(i);
        }}
      />
    );
  }
  render() {
    return (
      <div>
        <div className="boarder">
          {this.square(0)}
          {this.square(1)}
          {this.square(2)}
        </div>
        <div className="boarder">
          {this.square(3)}
          {this.square(4)}
          {this.square(5)}
        </div>
        <div className="boarder">
          {this.square(6)}
          {this.square(7)}
          {this.square(8)}
          <br></br>
        </div>
      </div>
    );
  }
}

export default Board;
