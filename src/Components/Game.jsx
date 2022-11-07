import "./Game.scss";

import React from "react";
import GameUserInput from "./GameUserInput";
import GameScore from "./GameScore";

const Game = () => {
  return (
    <div className="game">
      <div className="game__columns">
        <div className="game__columns__left">
          <GameUserInput />
        </div>
        <div className="game__columns__right">
          <GameScore />
        </div>
      </div>
    </div>
  );
};

export default Game;
