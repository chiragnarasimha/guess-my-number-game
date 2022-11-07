import "./GameUserInput.scss";

import React, { useContext, useRef } from "react";
import GuessContext from "../Storage/guess-context";

const GameUserInput = () => {
  const guessContext = useContext(GuessContext);
  const inputRef = useRef();
  const submitHandler = (event) => {
    event.preventDefault();
    // Store the input value as a integer
    guessContext.setPreviousGuess(+inputRef.current.value);
  };
  return (
    <form className="game-user-input" onSubmit={submitHandler}>
      <input
        ref={inputRef}
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
