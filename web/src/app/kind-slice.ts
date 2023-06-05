import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { toLower } from 'lodash'
import { RootState } from './store';

export enum CharacterType {
    PC,
    NPC,
    Other,
}

export function stringToCharacterType(value: string) {
    switch (toLower(value)) {
        case 'pc': return CharacterType.PC;
        case 'npc': return CharacterType.NPC;
        default: return CharacterType.Other;
    }
}

export interface KindState {
    value: CharacterType;
}

export const kindSlice = createSlice({
    name: 'kind',
    initialState: { value: CharacterType.Other },
    reducers: {
        setKind: (state: KindState, action: PayloadAction<CharacterType>) => {
            state.value = action.payload;
        }
    }
});

export const { setKind } = kindSlice.actions;

export const selectKind = (state: RootState): CharacterType => state.kind.value;

export default kindSlice.reducer;