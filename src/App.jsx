import { useState } from "react";
import { HeaderCalculator, GridNumbers, ScreenResultCalc } from "./components";
import "./styles/components/App.css";
import { useCalculator } from "./hooks/useCalculator";

function App() {
  const { results, handleAddCharacter } = useCalculator();

  const [toggleTheme, setToggleTheme] = useState({
    "container-calculator": {
      one: "theme-one-container-calculator",
      two: "theme-two-container-calculator",
      three: "theme-three-container-calculator",
    },
    header: {
      one: "header-calculator-theme-one",
      two: "header-calculator-theme-two",
      three: "header-calculator-theme-three",
    },
    toggle: {
      one: "range-theme-one",
      two: "range-theme-two",
      three: "range-theme-three",
    },
    screen: {
      container: {
        one: "range-theme-one",
        two: "range-theme-two",
        three: "range-theme-three",
      },
      numbers: {
        one: "result-numbers-theme-one",
        two: "result-numbers-theme-two",
        three: "result-numbers-theme-three",
      },
    },
    "grid-numbers": {
      grid: {
        one: "grid-numbers-theme-one",
        two: "grid-numbers-theme-two",
        three: "grid-numbers-theme-three",
      },
      btn: {
        one: "btn-theme-one",
        two: "btn-theme-two",
        three: "btn-theme-three",
      },
    },
  });

  const [theme, setTheme] = useState("one");
  const onChangeTheme = (newTheme) => {
    setTheme(newTheme);
  };
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
