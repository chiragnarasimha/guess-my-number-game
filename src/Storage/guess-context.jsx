import { findAllByDisplayValue } from "@testing-library/react";
import React from "react";
const GuessContext = React.createContext({
  score: 0,
  highScore: 0,
  correctAnswer: 0,
  previousGuess: 0,
  gameWon: false,

  setScore: () => {},
  setHighScore: () => {},
  setCorrectAnswer: () => {},
  setPreviousGuess: () => {},
  setGameWon: () => {},
});

export default GuessContext;
