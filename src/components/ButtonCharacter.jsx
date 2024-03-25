import '../styles/components/ButtonCharacter.css'

export const ButtonCharacter = ({classButtons,onAddCharacter,character}) => {
  return (
    <button
    className={`btn-number ${classButtons}`}
    onClick={onAddCharacter}
    >
      {character}
    </button>
  )
}
