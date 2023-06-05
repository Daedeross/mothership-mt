import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '../../../app/store';
import { CharacterClass, CharacterDto } from '../../../dto/character.model';

export interface HeaderState {
    name: string;
    player: string;
    highscore: number;
    class: CharacterClass;
}

const initialState: HeaderState = {
    name : "",
    player: "",
    highscore: 0,
    class: CharacterClass.Scientist
}

export const headerSlice = createSlice({
    name: 'header',
    initialState,
    reducers: {
        setState: (state: HeaderState, action: PayloadAction<HeaderState>) => {
            state = {
                ...action.payload
            };
        },
        setName: (state: HeaderState, action: PayloadAction<string>) => {
            state.name = action.payload;
        },
        setPlayer: (state: HeaderState, action: PayloadAction<string>) => {
            state.player = action.payload;
        },
        setClass: (state: HeaderState, action: PayloadAction<CharacterClass>) => {
            state.class = action.payload;
        },
        setHighScore: (state: HeaderState, action: PayloadAction<number>) => {
            state.highscore = action.payload;
        }
    }
});

export const { setState, setName, setPlayer, setClass, setHighScore } = headerSlice.actions;

export const selectHeader = (state: RootState) => state.header;
export const extractHeader = (dto: CharacterDto): HeaderState => {
    return {
        name: dto.name,
        player: dto.player,
        highscore: dto.highscore,
        class: dto.class
    }
}

export const selectors = {
     name: (state: RootState) => selectHeader(state).name,
     player: (state: RootState) => selectHeader(state).player,
     class: (state: RootState) => selectHeader(state).class,
     highscore: (state: RootState) => selectHeader(state).highscore
}

export default headerSlice.reducer;