import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { isInteger, reduce } from 'lodash';

import { addOrUpdate, tryUpdate } from '../../app/utils';
import { doSimpleRoll } from '../../app/linker';

export interface RollState {
    dice: Array<number>;
    modifier: number;
    advantage: number;
}

const initialState: RollState = {
    dice: [],
    modifier: 0,
    advantage: 0
}

export const dieExpression = (value: any, index: any) => {
    if (isInteger(value) && value > 0) {
        return `${value}d${index}`;
    } else {
        return '';
    }
}

export const constructExpression = (state: RollState): string => {
    const dice = reduce(state.dice, (acc, value, index) => acc + dieExpression(value, index), '');
    const modifier = state.modifier > 0
                     ? `+${state.modifier}`
                     : state.modifier < 0 
                        ? `${state.modifier}`
                        : '';
    // TODO: Advantage;
    return dice + modifier;
}

export const rollSlice = createSlice({
    name: 'roll',
    initialState,
    reducers: {
        reset: (state: RollState, action: PayloadAction) => {
            return initialState;
        },
        addDie: (state: RollState, action: PayloadAction<number>) => {
            if (!(isInteger(action.payload) && action.payload > 0)) {
                throw new RangeError('# of die sides must be a positive integer.');
            }
            addOrUpdate(
                state.dice,
                action.payload,
                (cur: number) => cur+1,
                () => 1);
        },
        removeDie: (state: RollState, action: PayloadAction<number>) => {
            if (!(isInteger(action.payload) && action.payload > 0)) {
                throw new RangeError('# of die sides must be a positive integer.');
            }
            const hasIt = tryUpdate(
                state.dice,
                action.payload,
                (cur: number) => cur-1);
            if (hasIt && state.dice[action.payload] === 0) {
                delete state.dice[action.payload];
            }
        },
        clearDice: (state: RollState, action: PayloadAction) => {
            state.dice = [];
        },
        setModifier: (state: RollState, action: PayloadAction<number>) => {
            state.modifier = action.payload;
        },
        setAdvantage: (state: RollState, action: PayloadAction<number>) => {
            state.advantage = action.payload;
        },
        execute:  (state: RollState, action: PayloadAction) => {
            doSimpleRoll(constructExpression(state));
            return initialState;
        }
    }
});