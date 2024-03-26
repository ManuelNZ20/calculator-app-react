import { useState } from "react";
import "../styles/components/ToggleSwitchTheme.css";

export const ToggleSwitchTheme = ({
  onChangeTheme,
  classComponents,
  theme,
}) => {
  const [range, setRange] = useState(0);

  const handleToggleRange = (e) => {
    const { value } = e.target;
    setRange(value);
    switch (value) {
      case "0":
        onChangeTheme("one");
        break;
      case "10":
        onChangeTheme("two");
        break;
      case "20":
        onChangeTheme("three");
        break;
    }
  };

  return (
    <div className={`switch-theme`}>
      <h5>THEME</h5>
      <div className="switch">
        <div className="header-numbers">
          <span>1</span>
          <span>2</span>
          <span>3</span>
        </div>
        <div className={`range-container`}>
          <input
            type="range"
            name=""
            id=""
            min={0}
            max={20}
            step={10}
            onChange={handleToggleRange}
            value={range}
            className={`range ${classComponents["toggle"][theme]}`}
          />
        </div>
      </div>
    </div>
  );
};
