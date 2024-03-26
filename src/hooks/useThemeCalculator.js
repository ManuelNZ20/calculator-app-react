import { useState } from "react";

export const useThemeCalculator = () => {
  
  const toggleTheme = {
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
  };

  const [theme, setTheme] = useState("one");
  const onChangeTheme = (newTheme) => {
    setTheme(newTheme);
  };

  return { toggleTheme, theme, onChangeTheme };
};
