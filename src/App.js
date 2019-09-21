import React from "react";
import "./App.css";
import Board from "./Board";
import TicTacToe from "./TicTacToe";

function App() {
  return (
    <div className="back-image">
      <header className="title"> Tic Tac Toe</header>
      <TicTacToe />
    </div>
  );
}

export default App;
