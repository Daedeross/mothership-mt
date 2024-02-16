import { Action, Dispatch, ListenerEffectAPI } from '@reduxjs/toolkit';
import { compare } from 'fast-json-patch';
import { isEmpty, isEqual, startsWith } from 'lodash';

import { RootState } from './store';
import { executeSilentMacro, extractDto } from './utils';
import { linkerSlice } from './linker-slice';
import { rollModeSlice } from '../features/shared/roll/roll-mode-slice';
import { armorActions } from '../features/shared/armor/armor-slice';
import { weaponActions } from '../features/shared/weapon/weapon-slice';

const UPDATE_MACRO = 'updateCharacter';

export const nonCharacterSlices = [
    linkerSlice.name,
    rollModeSlice.name,
    armorActions.setDisplayed.type,
    weaponActions.setDisplayed.type,
]

export const isStateChanged = (action: Action, currentState: RootState, previousState: RootState) => !isEqual(currentState, previousState);
export const isCharacterChanged = (action: Action, currentState: RootState, previousState: RootState) => {
    const foo = !(previousState.token.changing || currentState.token.changing)
                && nonCharacterSlices.reduce((last, current) => last && !startsWith(action.type, current), true)
                && !isEqual(currentState, previousState);

    return foo;
}

export const pushChangesToMapTool = (action: Action, listenerApi: ListenerEffectAPI<RootState, Dispatch> ) => {
    const lastState = listenerApi.getOriginalState();
    const newState = listenerApi.getState();
    const lastDto = extractDto(lastState);
    const newDto = extractDto(newState);

    const diff = compare(lastDto, newDto);
    if (isEmpty(diff)) {
        return;
    }
    executeSilentMacro(UPDATE_MACRO, diff, lastDto.id);
};