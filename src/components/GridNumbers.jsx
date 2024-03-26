import '../styles/components/GridNumbers.css'
import { ButtonCharacter } from './ButtonCharacter';

export const GridNumbers = ({onAddNumbers,classComponents,theme}) => {

  return (
    <div className={`grid-numbers ${classComponents['grid-numbers'].grid[theme]}`}>
      <ButtonCharacter
        classComponents={classComponents}
        classNameButton={`seven`}
        theme={theme}
        character={'7'}
        onAddCharacter={() => onAddNumbers('7')}
      />
      <ButtonCharacter
        classComponents={classComponents}
        classNameButton={`eight`}
        theme={theme}
        character={'8'}
        onAddCharacter={() => onAddNumbers('8')}
      />
      <ButtonCharacter
        classComponents={classComponents}
        classNameButton={`nine`}
        theme={theme}
        character={'9'}
        onAddCharacter={() => onAddNumbers('9')}
      />
      <ButtonCharacter
        classComponents={classComponents}
        classNameButton={`del`}
        theme={theme}
        character={'DEL'}
        onAddCharacter={() => onAddNumbers('del')}
      />
      <ButtonCharacter
        classComponents={classComponents}
        classNameButton={`four`}
        theme={theme}
        character={'4'}
        onAddCharacter={() => onAddNumbers('4')}
      />
      <ButtonCharacter
        classComponents={classComponents}
        classNameButton={`five`}
        theme={theme}
        character={'5'}
        onAddCharacter={() => onAddNumbers('5')}
      />
      <ButtonCharacter
        classComponents={classComponents}
        classNameButton={`six`}
        theme={theme}
        character={'6'}
        onAddCharacter={() => onAddNumbers('6')}
      />
      <ButtonCharacter
        classComponents={classComponents}
        classNameButton={`plus`}
        theme={theme}
        character={'+'}
        onAddCharacter={() => onAddNumbers('+')}
      />
      <ButtonCharacter
        classComponents={classComponents}
        classNameButton={`one`}
        theme={theme}
        character={'1'}
        onAddCharacter={() => onAddNumbers('1')}
      />
      <ButtonCharacter
        classComponents={classComponents}
        classNameButton={`two`}
        theme={theme}
        character={'2'}
        onAddCharacter={() => onAddNumbers('2')}
      />
      <ButtonCharacter
        classComponents={classComponents}
        classNameButton={`three`}
        theme={theme}
        character={'3'}
        onAddCharacter={() => onAddNumbers('3')}
      />
      <ButtonCharacter
        classComponents={classComponents}
        classNameButton={`min`}
        theme={theme}
        character={'-'}
        onAddCharacter={() => onAddNumbers('-')}
      />
      <ButtonCharacter
        classComponents={classComponents}
        classNameButton={`point`}
        theme={theme}
        character={'.'}
        onAddCharacter={() => onAddNumbers('.')}
      />
      <ButtonCharacter
        classComponents={classComponents}
        classNameButton={`zero`}
        theme={theme}
        character={'0'}
        onAddCharacter={() => onAddNumbers('0')}
      />
      <ButtonCharacter
        classComponents={classComponents}
        classNameButton={`slash`}
        theme={theme}
        character={'/'}
        onAddCharacter={() => onAddNumbers('/')}
      />
      <ButtonCharacter
        classComponents={classComponents}
        classNameButton={`multi`}
        theme={theme}
        character={'x'}
        onAddCharacter={() => onAddNumbers('x')}
      />
      <ButtonCharacter
        classComponents={classComponents}
        classNameButton={`reset`}
        theme={theme}
        character={'RESET'}
        onAddCharacter={() => onAddNumbers('reset')}
      />
      <ButtonCharacter
        classComponents={classComponents}
        classNameButton={`equal`}
        theme={theme}
        character={'='}
        onAddCharacter={() => onAddNumbers('=')}
      />
    </div>
  );
};
