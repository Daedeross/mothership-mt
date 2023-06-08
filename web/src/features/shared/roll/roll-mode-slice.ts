import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../../app/store';

export interface SkillBonus {
    name: string;
    bonus: number;
}

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
    skill: SkillBonus | null;
}

const initialState: RollModeState = {
    mode: RollMode.None,
    display: DisplayType.All,
    skill: null
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
            state.skill = null;
        },
        setDisplayType: (state: RollModeState, action: PayloadAction<DisplayType>) => {
            state.display = action.payload;
        },
        setRollSkill: (state: RollModeState, action: PayloadAction<SkillBonus | null>) => {
            state.skill = action.payload;
        }
    }
});

export const { setRollMode, toggleRollMode, setDisplayType, setRollSkill } = rollModeSlice.actions;

export const selectRollMode = (state: RootState) => state.rollmode.mode;
export const selectDisplayType = (state: RootState) => state.rollmode.display;
export const selectRollSkill = (state: RootState) => state.rollmode.skill;

export default rollModeSlice.reducer;