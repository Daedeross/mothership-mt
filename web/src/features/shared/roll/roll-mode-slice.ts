import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../../app/store';

export enum RollMode {
    None,
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
        }
    }
});

export const { setRollMode } = rollModeSlice.actions;

export const selectRollMode = (state: RootState) => state.rollmode.mode

export default rollModeSlice.reducer;