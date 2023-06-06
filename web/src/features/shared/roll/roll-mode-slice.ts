import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../../app/store';

export enum RollMode {
    None = 0,
    Normal,
    Advantage,
    Disadvantage
}

export interface RollModeState {
    mode: RollMode;
}

const initialState: RollModeState = {
    mode: RollMode.None
}

export const rollModeSlice = createSlice({
    name: 'roll-mode',
    initialState,
    reducers: {
        setRollMode: (state: RollModeState, action: PayloadAction<RollMode>) => {
            state.mode = action.payload;
        },
        toggleRollMode: (state: RollModeState) => {
            state.mode = state.mode === RollMode.None
                ? RollMode.Normal
                : RollMode.None;
        }
    }
});

export const { setRollMode, toggleRollMode } = rollModeSlice.actions;

export const selectRollMode = (state: RootState) => state.rollmode.mode

export default rollModeSlice.reducer;