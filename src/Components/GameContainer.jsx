import "./GameContainer.scss";

import React, { useContext, useEffect, useState } from "react";
import GuessContext from "../Storage/guess-context";
import Header from "./Header";
import Game from "./Game";

const GameContainer = (props) => {
  const guessContext = useContext(GuessContext);
  const gameWon = guessContext.gameWon;
  return (
    <div className={`game-container ${gameWon && "game-container__win"}`}>
      <Header />
      <Game />
    </div>
  );
};

export default GameContainer;
