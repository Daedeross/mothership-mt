import { isNil } from 'lodash-es';
import PcSheet from './pc/pc-sheet';
import EmptySheet from './empty-sheet';
import NpcSheet from './npc/npc-sheet';

function CharacterSheet({character}) {
    console.log(character);
    console.log(character.kind);
    if (isNil(character)) {
        console.log('nil');
        return (<EmptySheet />);
    }
    else if (character.kind === 'PC')
    {
        console.log('pc');
        return (<PcSheet character={character} />);
    }
    else if (character.kind == 'NPC' || character.kind == 'Basic')
    {
        console.log('npc');
        return (<NpcSheet />);
    }
    else {
        console.log('other');
        return (<EmptySheet />);
    }
}

export default CharacterSheet;