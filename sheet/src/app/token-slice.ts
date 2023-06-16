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

export interface TokenState {
    id: string;
    kind: CharacterType;
    changing: boolean;
}

export const tokenSlice = createSlice({
    name: 'token',
    initialState: { id: '', kind: CharacterType.Other, changing: false },
    reducers: {
        setKind: (state: TokenState, action: PayloadAction<CharacterType>) => {
            state.kind = action.payload;
        },
        setId: (state: TokenState, action: PayloadAction<string>) => {
            state.id = action.payload;
        },
        setChanging: (state: TokenState, action: PayloadAction<boolean>) => {
            state.changing = action.payload;
        }
    }
});

export const { setId, setKind, setChanging } = tokenSlice.actions;

export const selectKind = (state: RootState): CharacterType => state.token.kind;
export const selectId = (state: RootState): string => state.token.id;

export default tokenSlice.reducer;