import "./GameScore.scss";

import React, { useContext, useEffect } from "react";
import GuessContext from "../Storage/guess-context";

const GameScore = () => {
  const guessContext = useContext(GuessContext);
  const correctAnswer = guessContext.correctAnswer;
  const previousGuess = guessContext.previousGuess;
  const score = guessContext.score;
  const highScore = guessContext.highScore;

  let hint = `Try any number (1 - 20)`;

  useEffect(() => {
    if (correctAnswer === previousGuess) {
      guessContext.setGameWon(true);
      hint = `🎉 congrats`;
    } else guessContext.setGameWon(false);

    return () => {};
  }, [correctAnswer, previousGuess]);

  return (
    <div className="game-score">
      <div className="game-score__section1">
        <p>🤔 Start Guessing...</p>
      </div>
      <div className="game-score__section2">
        <p>🤠 Previous Guess: {previousGuess}</p>
        <p>😉 Hint: {hint}</p>
        <p>💯 Score: {score}</p>
        <p>🥇 High Score: {highScore}</p>
        <p>*****🐞 DEBUG*****</p>
        <p>🥇 Correct Answer: {correctAnswer}</p>
      </div>
    </div>
  );
};

export default GameScore;
