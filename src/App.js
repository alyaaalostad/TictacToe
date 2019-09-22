import React, { Component } from "react";
import "./App.css";
import TicTacToe from "./TicTacToe";

class App extends Component {
  state = {
    show: false
  };

  trigerPage = () => {
    if (!this.state.show) {
      return this.setState({
        show: true
      });
    } else return this.setState({ show: false });
  };

  showPage = () => {
    if (this.state.show)
      return (
        <div className="back-image">
          <img
            src="http://tictactoepty.com/wp-content/uploads/2018/02/logo-1.png"
            className="image"
          />
          <TicTacToe />
        </div>
      );
    else {
      return (
        <div>
          <div>
            <img
              className="buttonposition"
              src="https://media1.giphy.com/media/QJvwBSGaoc4eI/200.webp?cid=790b76110d4a825292337785400db2c9a582b1375afbd425&rid=200.webp"
              onClick={() => this.trigerPage()}
            />
          </div>
        </div>
      );
    }
  };
  render() {
    return <div>{this.showPage()}</div>;
  }
}

export default App;
