import '../styles/components/ScreenResultCalc.css'

export const ScreenResultCalc = ({results}) => {
  return (
    <div className="container-numbers">
      <p className="result-numbers">{results}</p>
    </div>
  );
};
