import { useState } from "react";
import { HeaderCalculator, GridNumbers, ScreenResultCalc } from "./components";
import "./styles/components/App.css";
import { useCalculator } from "./hooks/useCalculator";
import { useThemeCalculator } from "./hooks/useThemeCalculator";

function App() {
  const { results, handleAddCharacter } = useCalculator();
  const { toggleTheme, onChangeTheme, theme } = useThemeCalculator();

  return (
    <div
      className={`container-app-calculator ${toggleTheme["container-calculator"][theme]}`}
    >
      <HeaderCalculator
        onChangeTheme={onChangeTheme}
        classComponents={toggleTheme}
        theme={theme}
      />
      <main className="main-calculator">
        <ScreenResultCalc
          results={results.res}
          classComponents={toggleTheme}
          theme={theme}
        />
        <GridNumbers
          onAddNumbers={handleAddCharacter}
          classComponents={toggleTheme}
          theme={theme}
        />
      </main>
    </div>
  );
}

export default App;
