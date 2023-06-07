import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../../app/store';

export enum RollMode {
    None = 0,
    Normal,
    Advantage,
    Disadvantage
}

export enum DisplayType {
    Self = "self",
    Gm = "gm",
    All = "all",
    None = "none",
    GmSelf = "gm-self",
    List = "list"
}

export interface RollModeState {
    mode: RollMode;
    display: DisplayType;
}

const initialState: RollModeState = {
    mode: RollMode.None,
    display: DisplayType.All
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
        },
        setDisplayType: (state: RollModeState, action: PayloadAction<DisplayType>) => {
            state.display = action.payload;
        }
    }
});

export const { setRollMode, toggleRollMode, setDisplayType } = rollModeSlice.actions;

export const selectRollMode = (state: RootState) => state.rollmode.mode;
export const selectDisplayType = (state: RootState) => state.rollmode.display;

export default rollModeSlice.reducer;