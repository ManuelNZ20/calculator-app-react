import "../styles/components/HeaderCalculator.css";

export const HeaderCalculator = () => {
  return (
    <header className="header-calculator">
      <h4>calc</h4>
      <div className="switcher-theme">
        Theme
        <div className="switcher">
          <div className="numbers">
            <span>1</span>
            <span>2</span>
            <span>3</span>
          </div>
          <div className="switch">⭕</div>
        </div>
      </div>
    </header>
  );
};
