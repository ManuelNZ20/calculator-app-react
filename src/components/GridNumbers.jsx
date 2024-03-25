import '../styles/components/GridNumbers.css'
import { ButtonCharacter } from './ButtonCharacter';

export const GridNumbers = ({onAddNumbers}) => {

  return (
    <div className="grid-numbers theme-one">
      <ButtonCharacter
        classButtons={'btn-theme-one seven'}
        character={'7'}
        onAddCharacter={() => onAddNumbers('7')}
      />
      <ButtonCharacter
        classButtons={'btn-theme-one eight'}
        character={'8'}
        onAddCharacter={() => onAddNumbers('8')}
      />
      <ButtonCharacter
        classButtons={'btn-theme-one nine'}
        character={'9'}
        onAddCharacter={() => onAddNumbers('9')}
      />
      <ButtonCharacter
        classButtons={'btn-theme-one del'}
        character={'DEL'}
        onAddCharacter={() => onAddNumbers('del')}
      />
      <ButtonCharacter
        classButtons={'btn-theme-one four'}
        character={'4'}
        onAddCharacter={() => onAddNumbers('4')}
      />
      <ButtonCharacter
        classButtons={'btn-theme-one five'}
        character={'5'}
        onAddCharacter={() => onAddNumbers('5')}
      />
      <ButtonCharacter
        classButtons={'btn-theme-one six'}
        character={'6'}
        onAddCharacter={() => onAddNumbers('6')}
      />
      <ButtonCharacter
        classButtons={'btn-theme-one plus'}
        character={'+'}
        onAddCharacter={() => onAddNumbers('+')}
      />
      <ButtonCharacter
        classButtons={'btn-theme-one one'}
        character={'1'}
        onAddCharacter={() => onAddNumbers('1')}
      />
      <ButtonCharacter
        classButtons={'btn-theme-one two'}
        character={'2'}
        onAddCharacter={() => onAddNumbers('2')}
      />
      <ButtonCharacter
        classButtons={'btn-theme-one three'}
        character={'3'}
        onAddCharacter={() => onAddNumbers('3')}
      />
      <ButtonCharacter
        classButtons={'btn-theme-one min'}
        character={'-'}
        onAddCharacter={() => onAddNumbers('-')}
      />
      <ButtonCharacter
        classButtons={'btn-theme-one point'}
        character={'.'}
        onAddCharacter={() => onAddNumbers('.')}
      />
      <ButtonCharacter
        classButtons={'btn-theme-one zero'}
        character={'0'}
        onAddCharacter={() => onAddNumbers('0')}
      />
      <ButtonCharacter
        classButtons={'btn-theme-one slash'}
        character={'/'}
        onAddCharacter={() => onAddNumbers('/')}
      />
      <ButtonCharacter
        classButtons={'btn-theme-one multi'}
        character={'x'}
        onAddCharacter={() => onAddNumbers('x')}
      />
      <ButtonCharacter
        classButtons={'btn-theme-one reset'}
        character={'RESET'}
        onAddCharacter={() => onAddNumbers('reset')}
      />
      <ButtonCharacter
        classButtons={'btn-theme-one equal'}
        character={'='}
        onAddCharacter={() => onAddNumbers('=')}
      />
    </div>
  );
};
