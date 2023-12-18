import React from "react";
import Search from './components/Search'
import "./App.css";

function App() {
  return (
    <div className="App">
      {/*Search bar */}
      <Search defaultData="Seoul" />
    </div>
  );
}

export default App;
