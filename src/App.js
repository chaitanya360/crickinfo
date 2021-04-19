import "./App.css";
import Header from "./components/header.js";
import MainBlock from "./components/mainBlock.js";
import StatsBlock from "./components/statsBlock.js";
import Footer from "./components/footer.js";
import Background from "./components/background";
import Body from "./components/body.js";
import { data as players } from "./data/raw_data.js";
import { useState } from "react";

function App() {
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);

  const onPrevPressed = () => {
    setCurrentPlayerIndex((old) => (old > 0 ? old - 1 : 0));
  };

  const onNextPressed = () => {
    setCurrentPlayerIndex((old) =>
      old < players.length - 1 ? old + 1 : players.length - 1
    );
  };

  return (
    <Background>
      <Header />
      <Body>
        <MainBlock
          playerId={players[currentPlayerIndex].playerId}
          overview={players[currentPlayerIndex].overview}
          onPrevPressed={onPrevPressed}
          onNextPressed={onNextPressed}
        />
        <StatsBlock
          stats={players[currentPlayerIndex].stats}
          playerId={players[currentPlayerIndex].playerId}
        />
      </Body>
      <Footer />
    </Background>
  );
}

export default App;
