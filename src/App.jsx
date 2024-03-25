import { useState } from "react";
import { HeaderCalculator, GridNumbers, ScreenResultCalc } from "./components";
import "./styles/components/App.css";
import { useCalculator } from "./hooks/useCalculator";

function App() {
  const {results,handleAddCharacter} = useCalculator()
  return (
    <div className="container-app-calculator theme-one-container-calculator">
      <HeaderCalculator />
      <main className="main-calculator">
        <ScreenResultCalc results={results.res} />
        <GridNumbers onAddNumbers={handleAddCharacter} />
      </main>
    </div>
  );
}

export default App;
