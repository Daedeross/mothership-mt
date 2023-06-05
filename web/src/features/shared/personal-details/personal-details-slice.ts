import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../../app/store';
import { CharacterDto } from '../../../dto/character.model';

export interface PersonalDetailsState {
    name: string;
    pronouns: string;
    notes: string;
}

const initialState: PersonalDetailsState = {
    name : "",
    pronouns: "they/them",
    notes: "",
}

export const personalDetailsSlice = createSlice({
    name: 'details',
    initialState,
    reducers: {
        setState: (state: PersonalDetailsState, action: PayloadAction<PersonalDetailsState>) => {
            state = {
                ...action.payload
            };
        },
        setName: (state: PersonalDetailsState, action: PayloadAction<string>) => {
            state.name = action.payload;
        },
        setPronouns: (state: PersonalDetailsState, action: PayloadAction<string>) => {
            state.pronouns = action.payload;
        },
        setNotes: (state: PersonalDetailsState, action: PayloadAction<string>) => {
            state.notes = action.payload;
        }
    }
});

export const { setState, setName, setPronouns, setNotes } = personalDetailsSlice.actions;

export const selectDetails = (state: RootState) => state.details;
export const extractDetails = (dto: CharacterDto): PersonalDetailsState => {
    return {
        name: dto.name,
        pronouns: dto.pronouns,
        notes: dto.notes
    };
};

export const selectors = {
    name: (state: RootState) => selectDetails(state).name,
    pronouns: (state: RootState) => selectDetails(state).pronouns,
    notes: (state: RootState) => selectDetails(state).notes
}

export default personalDetailsSlice.reducer;