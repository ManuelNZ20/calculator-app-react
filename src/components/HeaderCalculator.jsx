import "../styles/components/HeaderCalculator.css";
import { ToggleSwitchTheme } from "./ToggleSwitchTheme";

export const HeaderCalculator = ({onChangeTheme,classComponents,theme}) => {
  return (
    <header className={`header-calculator ${classComponents['header'][theme]}`}>
      <h2>calc</h2>
      <ToggleSwitchTheme
        onChangeTheme={onChangeTheme}
        classComponents={classComponents}
        theme={theme}
      />
    </header>
  );
};
