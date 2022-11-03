import "./GameScore.scss";

import React from "react";

const GameScore = (props) => {
  return (
    <div className="game-score">
      <div className="game-score__section1">
        <p>🤔 Start Guessing...</p>
      </div>
      <div className="game-score__section2">
        <p>💯 Score: 20</p>
        <p>🥇 Highscore: 20</p>
      </div>
    </div>
  );
};

export default GameScore;
