import { isNil } from 'lodash';
import { useSelector } from 'react-redux';
import { ReactElement } from 'react';

import PcSheet from './pc/pc-sheet/pc-sheet';
import EmptySheet from './empty-sheet';
import { CharacterType, selectKind } from '../app/token-slice';

function CharacterSheet(): ReactElement {
    const kind = useSelector(selectKind);

    switch (kind) {
        case CharacterType.PC:
            return <PcSheet />
        default:
            return <EmptySheet />
    }
    // console.log(character);
    // console.log(character.kind);
    // if (isNil(character)) {
    //     console.log('nil');
    //     return (<EmptySheet />);
    // }
    // else if (character.kind === 'PC')
    // {
    //     console.log('pc');
    //     return (<PcSheet character={character} />);
    // }
    // else if (character.kind == 'NPC' || character.kind == 'Basic')
    // {
    //     console.log('npc');
    //     return (<NpcSheet />);
    // }
    // else {
    //     console.log('other');
    //     return (<EmptySheet />);
    // }
}

export default CharacterSheet;