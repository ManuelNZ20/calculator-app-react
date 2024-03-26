import '../styles/components/ScreenResultCalc.css'

export const ScreenResultCalc = ({results,classComponents,theme}) => {
  return (
    <div className={`container-numbers ${classComponents['screen'].container[theme]}`}>
      <p className={`result-numbers ${classComponents['screen'].numbers[theme]}`}>{results}</p>
    </div>
  );
};
