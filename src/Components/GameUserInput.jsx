import "./GameUserInput.scss";

import React from "react";

const GameUserInput = (props) => {
  return (
    <form className="game-user-input">
      <input
        type="number"
        className="game-user-input__input"
        min={1}
        max={20}
        step={1}
      />
      <button className="game-user-input__button">Check!</button>
    </form>
  );
};

export default GameUserInput;
