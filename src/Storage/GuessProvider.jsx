import React, { useEffect, useReducer, useState } from "react";
import GuessContext from "./guess-context";

const defaultGameState = {
  score: 0,
  highScore: 0,
  correctAnswer: 0,
  previousGuess: 0,
  gameWon: false,
};

const gameReducer = (state, action) => {
  if (action.type === "UPDATE_SCORE") {
    console.log(`Updating Score`);

    return {
      score: action.score,
      highScore: state.highScore,
      correctAnswer: state.correctAnswer,
      previousGuess: state.previousGuess,
      gameWon: state.gameWon,
    };
  }

  if (action.type === "UPDATE_HIGH_SCORE") {
    console.log(`Updating High Score`);

    return {
      score: state.score,
      highScore: action.highScore,
      correctAnswer: state.correctAnswer,
      previousGuess: state.previousGuess,
      gameWon: state.gameWon,
    };
  }

  if (action.type === "UPDATE_CORRECT_ANSWER") {
    console.log(`Updating Correct Answer ${action.correctAnswer}`);
    return {
      score: state.score,
      highScore: state.highScore,
      correctAnswer: action.correctAnswer,
      previousGuess: state.previousGuess,
      gameWon: state.gameWon,
    };
  }

  if (action.type === "UPDATE_PREVIOUS_GUESS") {
    console.log(`Updating Previous Guess ${action.previousGuess}!`);
    return {
      score: state.score,
      highScore: state.highScore,
      correctAnswer: state.correctAnswer,
      previousGuess: action.previousGuess,
      gameWon: state.gameWon,
    };
  }

  if (action.type === "UPDATE_GAME_WON") {
    console.log(`Updating Previous Game Won ${action.gameWon}!`);
    return {
      score: state.score,
      highScore: state.highScore,
      correctAnswer: state.correctAnswer,
      previousGuess: state.previousGuess,
      gameWon: action.gameWon,
    };
  }

  return defaultGameState;
};

const GuessProvider = (props) => {
  const [gameState, dispatchGameAction] = useReducer(
    gameReducer,
    defaultGameState
  );

  const setScoreHandler = (score) => {
    dispatchGameAction({ type: "UPDATE_SCORE", score: score });
  };
  const setHighScoreHandler = (highScore) => {
    dispatchGameAction({
      type: "UPDATE_HIGH_SCORE",
      highScore: highScore,
    });
  };
  const setCorrectAnswerHandler = () => {
    const correctAnswerMin = 1,
      correctAnswerMax = 20,
      correctAnswerRange = correctAnswerMax - correctAnswerMin,
      correctAnswer = Math.floor(
        Math.random() * (correctAnswerRange + 1) + correctAnswerMin
      );

    dispatchGameAction({
      type: "UPDATE_CORRECT_ANSWER",
      correctAnswer: correctAnswer,
    });
  };
  const setPreviousGuessHandler = (previousGuess) => {
    dispatchGameAction({
      type: "UPDATE_PREVIOUS_GUESS",
      previousGuess: previousGuess,
    });
  };

  const setGameWonHandler = (gameWon) => {
    dispatchGameAction({
      type: "UPDATE_GAME_WON",
      gameWon: gameWon,
    });
  };

  // Generate a initial value for the correct answer
  useEffect(() => {
    setCorrectAnswerHandler();
    return () => {};
  }, []);

  const guessContext = {
    score: gameState.score,
    highScore: gameState.highScore,
    correctAnswer: gameState.correctAnswer,
    previousGuess: gameState.previousGuess,
    gameWon: gameState.gameWon,

    setScore: setScoreHandler,
    setHighScore: setHighScoreHandler,
    setCorrectAnswer: setCorrectAnswerHandler,
    setPreviousGuess: setPreviousGuessHandler,
    setGameWon: setGameWonHandler,
  };

  return (
    <GuessContext.Provider value={guessContext}>
      {props.children}
    </GuessContext.Provider>
  );
};

export default GuessProvider;
