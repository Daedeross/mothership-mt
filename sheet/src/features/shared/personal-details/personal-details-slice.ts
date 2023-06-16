import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../../app/store';
import { CharacterClass, CharacterDto } from '../../../dto/character.model';
import { defaultTo } from 'lodash';

export interface PersonalDetailsState {
    name: string;
    pronouns: string;
    notes: string;
    age: number;
    player?: string;
    highscore?: number;
    class?: CharacterClass;
}

const initialState: PersonalDetailsState = {
    age: 0,
    name : "",
    pronouns: "they/them",
    notes: "",
}

export const personalDetailsSlice = createSlice({
    name: 'details',
    initialState,
    reducers: {
        setState: (state: PersonalDetailsState, action: PayloadAction<PersonalDetailsState>) => {
            return action.payload;
        },
        setName: (state: PersonalDetailsState, action: PayloadAction<string>) => {
            state.name = action.payload;
        },
        setPronouns: (state: PersonalDetailsState, action: PayloadAction<string>) => {
            state.pronouns = action.payload;
        },
        setNotes: (state: PersonalDetailsState, action: PayloadAction<string>) => {
            state.notes = action.payload;
        },
        setPlayer: (state: PersonalDetailsState, action: PayloadAction<string>) => {
            state.player = action.payload;
        },
        setClass: (state: PersonalDetailsState, action: PayloadAction<CharacterClass>) => {
            state.class = action.payload;
        },
        setHighScore: (state: PersonalDetailsState, action: PayloadAction<number>) => {
            state.highscore = action.payload;
        },
        setAge: (state: PersonalDetailsState, action: PayloadAction<number>) => {
            state.age = action.payload;
        },
    }
});

export const actions = { ...personalDetailsSlice.actions };

export const setDetails = actions.setState;

export const extractDetails = (dto: CharacterDto): PersonalDetailsState => {
    return {
        age: dto.age,
        name: dto.name,
        pronouns: dto.pronouns,
        notes: dto.notes,
        player: dto.player,
        highscore: dto.highscore,
        class: dto.class
    };
};

export const selectDetails = (state: RootState) => state.details;
export const selectors = {
    age: (state: RootState) => selectDetails(state).age,
    name: (state: RootState) => selectDetails(state).name,
    pronouns: (state: RootState) => selectDetails(state).pronouns,
    notes: (state: RootState) => selectDetails(state).notes,
    player: (state: RootState) => selectDetails(state).player,
    class: (state: RootState) => selectDetails(state).class,
    highscore: (state: RootState) => selectDetails(state).highscore
}

export default personalDetailsSlice.reducer;