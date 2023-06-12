import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { pull } from 'lodash';

import { RootState } from '../../../app/store';
import { CharacterDto } from '../../../dto/character.model';

export enum SkillType {
    Trained,
    Expert,
    Master
}

export interface SkillsState {
    trained: Array<string>;
    expert: Array<string>;
    master: Array<string>;
}

const initialState: SkillsState = {
    trained: [],
    expert: [],
    master: [],
}

export interface SkillActionPayload {
    kind: SkillType;
    name: string;
}

export const selectKind = (state: SkillsState, kind: SkillType) => {
    switch (kind) {
        case SkillType.Trained: return state.trained;
        case SkillType.Expert: return state.expert;
        case SkillType.Master: return state.master;
        default: throw Error(`Unrecognized skill type: ${kind}.`)
    }
}

const skillsSlice = createSlice({
    name: 'skills',
    initialState,
    reducers: {
        setSkills: (state: SkillsState, action: PayloadAction<SkillsState>) => {
            return action.payload;
        },
        addSkill: (state: SkillsState, action: PayloadAction<SkillActionPayload>) => {
            selectKind(state, action.payload.kind).push(action.payload.name);
        },
        removeSkill: (state: SkillsState, action: PayloadAction<SkillActionPayload>) => {
            pull(selectKind(state, action.payload.kind), action.payload.name);
        }
    }
});

export const { setSkills, addSkill, removeSkill } = skillsSlice.actions;

export const extractSkills = (dto: CharacterDto): SkillsState => {
    return {
        trained: dto.trainedskills,
        expert: dto.expertskills,
        master: dto.masterskills
    }
}

export const selectSkillsDto = (state: RootState) => ({
    trainedskills: state.skills.trained,
    expertskills : state.skills.expert,
    masterskills : state.skills.master
})

export const selectSkillsOfType = (kind: SkillType) => (state: RootState) => selectKind(state.skills, kind);

export default skillsSlice.reducer;
