import { combineReducers, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { get, inRange, isEmpty, isNil, isNumber } from 'lodash';
import { RootState } from '../../../app/store';
import { CharacterDto } from '../../../dto/character.model';
import { useAppDispatch } from '../../../app/hooks';

export interface KeyedPayload<T> {
    key: string
    value: T
}

export interface ConditionValueState {
    current: number;
    min: number;
    max: number;
}

const initialValueState: ConditionValueState = {
    current: 0,
    min: 0,
    max: 0,
}

const conditionValueSliceFactory = (key: string, initialState: ConditionValueState) =>
    createSlice({
        name: 'condition-value',
        initialState: initialValueState,
        reducers: {
            setState: (state: ConditionValueState, action: PayloadAction<KeyedPayload<ConditionValueState>>) => {
                if (action.payload.key === key) {
                    return action.payload.value;
                }
            },
            setCurrent: (state: ConditionValueState, action: PayloadAction<KeyedPayload<number>>) => {
                if (action.payload.key === key) {
                    if (inRange(action.payload.value, state.min, state.max)) {
                        state.current = action.payload.value;
                    }
                }
            },
            setMin: (state: ConditionValueState, action: PayloadAction<KeyedPayload<number>>) => {
                if (action.payload.key === key) {
                    state.min = action.payload.value;
                    if (state.current < action.payload.value) {
                        state.current = action.payload.value;
                    }
                }
            },
            setMax: (state: ConditionValueState, action: PayloadAction<KeyedPayload<number>>) => {
                if (action.payload.key === key) {
                    state.max = action.payload.value;
                    if (state.current > action.payload.value) {
                        state.current = action.payload.value;
                    }
                }
            }
        }
    });

export interface ConditionsState {
    health: ConditionValueState;
    wounds: ConditionValueState;
    stress: ConditionValueState;
}

const initialState: ConditionsState = {
    health: { ...initialValueState },
    wounds: { ...initialValueState },
    stress: { current: 2, min: 2, max: Number.MAX_SAFE_INTEGER }
}

const healthSlice = conditionValueSliceFactory('health', { ... initialValueState});
const woundsSlice = conditionValueSliceFactory('wounds', { ... initialValueState});
const stressSlice = conditionValueSliceFactory('stress', { current: 2, min: 2, max: 20 });

export const { setState, setCurrent, setMax, setMin } = healthSlice.actions;

export const selectConditions = (state: RootState) => state.conditions;

export const selectCurrentFactory = (key: string) => (rootState: RootState): number => {
    const value = get(rootState.conditions, [key, 'current'], null);
    if (!isNumber(value)) {
        throw Error(`${key}.current not found in state.conditions or is not a number`);
    }

    return value as number;
}

export const selectMaxFactory = (key: string) => (rootState: RootState): number => {
    const value = get(rootState.conditions, [key, 'max'], null);
    if (!isNumber(value)) {
        throw Error(`${key}.max not found in state.conditions or is not a number`);
    }

    return value as number;
}

export const selectMinFactory = (key: string) => (rootState: RootState): number => {
    const value = get(rootState.conditions, [key, 'min'], null);
    if (!isNumber(value)) {
        throw Error(`${key}.min not found in state.conditions or is not a number`);
    }

    return value as number;
}

export const extractConditions = (dto: CharacterDto): ConditionsState => {
    return {
        health: {
            current: dto.currenthealth,
            max: dto.maxhealth,
            min: 0,
        },
        wounds : {
            current: dto.currentwounds,
            max: dto.maxwounds,
            min: 0
        },
        stress : {
            current: dto.currentstress,
            min: dto.minimumstress,
            max: Number.MAX_SAFE_INTEGER
        }
    }
}



export default combineReducers({
    health: healthSlice.reducer,
    wounds: woundsSlice.reducer,
    stress: stressSlice.reducer,
})