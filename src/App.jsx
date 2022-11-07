import { useContext, useEffect } from "react";
import "./App.scss";
import Game from "./Components/Game";
import GameContainer from "./Components/GameContainer";
import Header from "./Components/Header";
import GuessContext from "./Storage/guess-context";
import GuessProvider from "./Storage/GuessProvider";

function App() {
  return (
    <GuessProvider>
      <GameContainer />
    </GuessProvider>
  );
}

export default App;
