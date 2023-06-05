import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { defaultTo } from 'lodash';
import { RootState } from '../../../app/store';
import { CharacterDto } from '../../../dto/character.model';

export enum StatName {
    strength,
    speed,
    intellect,
    combat,
    sanity,
    fear,
    body,
    instinct,
    loyalty,
}

export interface SetStatPayload {
    name: StatName;
    value: number
}

export interface StatsState {
    //shared
    combat: number;
    // pc only
    strength?: number;
    speed?: number;
    intellect?: number;
    sanity?: number;
    fear?: number;
    body?: number;
    // npc only
    instinct?: number;
    loyalty?: number;
}

const initialState: StatsState = {
    strength: 0,
    speed: 0,
    intellect: 0,
    combat: 0,
    sanity: 0,
    fear: 0,
    body: 0,
    instinct: undefined,
    loyalty: undefined
}

export const statsSlice = createSlice({
    name: 'stats',
    initialState,
    reducers: {
        setState: (state: StatsState, action: PayloadAction<StatsState>) => {
            state = {
                ...action.payload
            };
        },
        setValue: (state: StatsState, action: PayloadAction<SetStatPayload>) => {
            switch (action.payload.name) {
                case StatName.body:
                    state.body = defaultTo(state.body, 0) + action.payload.value;
                case StatName.combat:
                    state.combat = defaultTo(state.combat, 0) + action.payload.value;
                case StatName.fear:
                    state.fear = defaultTo(state.fear, 0) + action.payload.value;
                case StatName.intellect:
                    state.intellect = defaultTo(state.intellect, 0) + action.payload.value;
                case StatName.sanity:
                    state.sanity = defaultTo(state.sanity, 0) + action.payload.value;
                case StatName.speed:
                    state.speed = defaultTo(state.speed, 0) + action.payload.value;
                case StatName.strength:
                    state.strength = defaultTo(state.strength, 0) + action.payload.value;
            }
        }
    }
});

export const { setState, setValue } = statsSlice.actions;

export const selectStats = (state: RootState) => state.stats;
export const selectStat = (state: RootState, name: StatName) => {
    const stats = state.stats;
    switch (name) {
        case StatName.body:
            return stats.body;
        case StatName.combat:
            return stats.combat;
        case StatName.fear:
            return stats.fear;
        case StatName.intellect:
            return stats.intellect;
        case StatName.sanity:
            return stats.sanity;
        case StatName.speed:
            return stats.speed;
        case StatName.strength:
            return stats.strength;
    }

};

export const extractStats = (dto: CharacterDto) => {
    return {
        strength: dto.strength,
        speed: dto.speed,
        intellect: dto.intellect,
        combat: dto.combat,
        sanity: dto.sanity,
        fear: dto.fear,
        body: dto.body,
    }
}

export function makeSelector(n: StatName) {
    return (state: RootState) => selectStat(state, n);
}

export default statsSlice.reducer;