import "../styles/components/ButtonCharacter.css";

export const ButtonCharacter = ({
  classComponents,
  theme,
  classNameButton,
  onAddCharacter,
  character,
}) => {
  return (
    <button
      className={`btn-number ${classNameButton} ${classComponents["grid-numbers"].btn[theme]}`}
      onClick={onAddCharacter}
    >
      {character}
    </button>
  );
};
