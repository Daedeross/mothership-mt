import { createEntityAdapter, createSlice, EntityState, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '../../../app/store';
import { Armor } from '../../../dto/character.model';
import { indexOf, isNil } from 'lodash';

export interface ArmorsState {
    current: number | null;
    displayed: number | null;
    armors: EntityState<Armor>;
}

export const armorsAdapter = createEntityAdapter<Armor>();

const initialState: ArmorsState = {
    current: null,
    displayed: null,
    armors: armorsAdapter.getInitialState()
}  

export const armorSlice = createSlice({
    name: 'armor',
    initialState,
    reducers: {
        setArmors: (state: ArmorsState, action: PayloadAction<Array<Armor>>) => {
            state.armors = armorsAdapter.setAll(state.armors, action.payload);
        },
        addArmor: (state: ArmorsState, action: PayloadAction<Armor>) => {
            state.armors = armorsAdapter.addOne(state.armors, action.payload);
        },
        removeArmor: (state: ArmorsState, action: PayloadAction<number>) => {
            state.armors = armorsAdapter.removeOne(state.armors, action.payload);
            if (state.current === action.payload) {
                state.current = null;
            }
            if (state.displayed === action.payload) {
                state.displayed = null;
            }
        },
        setArmor: (state: ArmorsState, action: PayloadAction<Armor>) => {
            armorsAdapter.setOne(state.armors, action.payload);
        },
        setCurrent: (state: ArmorsState, action: PayloadAction<number | null>) => {
            if (isNil(action.payload) || indexOf(state.armors.ids, action.payload) >= 0) {
                state.current = action.payload;
            }
        },
        setDisplayed: (state: ArmorsState, action: PayloadAction<number | null>) => {
            if (isNil(action.payload) || indexOf(state.armors.ids, action.payload) >= 0) {
                state.displayed = action.payload;
            }
        }
    }
});

export const armorActions = { ...armorSlice.actions };

const adapter_selectors = armorsAdapter.getSelectors((state: RootState) => state.armor.armors);

export const armorSelectors = {
    ...adapter_selectors,
    selectorById: (id: number) => (state:RootState) => adapter_selectors.selectById(state, id),
    selectCurrentId: (state:RootState) => state.armor.current,
    selectCurrent: (state: RootState) => {
        if (isNil(state.armor.current)) {
            return null;
        }

        return adapter_selectors.selectById(state, state.armor.current)
    },
    selectDisplayedId: (state:RootState) => state.armor.displayed,
    selectDisplayed: (state: RootState) => {
        if (isNil(state.armor.displayed)) {
            return null;
        }

        return adapter_selectors.selectById(state, state.armor.displayed)
    },
}

export default armorSlice.reducer;