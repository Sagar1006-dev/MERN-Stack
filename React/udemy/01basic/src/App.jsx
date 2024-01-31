import "./App.css";
import Header from "./componets/Header/Header";
import CoreConcepts from "./componets/CoreConcepts";
import Examples from "./componets/Examples";

function App() {
  return (
    <div>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </div>
  );
}

export default App;
