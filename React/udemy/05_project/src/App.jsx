import React from "react";
import Player from "./components/Player";
import TimerChallenge from "./components/TimerChallenge";

const App = () => {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge title="Easy" targetTime={1} />
        <TimerChallenge title="Not easy" targetTime={5} />
        <TimerChallenge title="Getting tough" targetTime={10} />
        <TimerChallenge title="pros only" targetTime={15} />
      </div>
    </>
  );
};

export default App;