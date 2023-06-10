import { createEntityAdapter, createSlice, EntityState, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '../../../app/store';
import { Weapon } from '../../../dto/character.model';
import { indexOf, isNil } from 'lodash';

export interface WeaponsState {
    current: number | null;
    displayed: number | null;
    weapons: EntityState<Weapon>;
}

export const weaponsAdapter = createEntityAdapter<Weapon>();

const initialState: WeaponsState = {
    current: null,
    displayed: null,
    weapons: weaponsAdapter.getInitialState()
}  

export const weaponSlice = createSlice({
    name: 'weapon',
    initialState,
    reducers: {
        setWeapons: (state: WeaponsState, action: PayloadAction<Array<Weapon>>) => {
            state.weapons = weaponsAdapter.setAll(state.weapons, action.payload);
        },
        addWeapon: (state: WeaponsState, action: PayloadAction<Weapon>) => {
            state.weapons = weaponsAdapter.addOne(state.weapons, action.payload);
        },
        removeWeapon: (state: WeaponsState, action: PayloadAction<number>) => {
            state.weapons = weaponsAdapter.removeOne(state.weapons, action.payload);
            if (state.current === action.payload) {
                state.current = null;
            }
            if (state.displayed === action.payload) {
                state.displayed = null;
            }
        },
        setWeapon: (state: WeaponsState, action: PayloadAction<Weapon>) => {
            weaponsAdapter.setOne(state.weapons, action.payload);
        },
        setCurrent: (state: WeaponsState, action: PayloadAction<number | null>) => {
            if (isNil(action.payload) || indexOf(state.weapons.ids, action.payload) >= 0) {
                state.current = action.payload;
            }
        },
        setDisplayed: (state: WeaponsState, action: PayloadAction<number | null>) => {
            if (isNil(action.payload) || indexOf(state.weapons.ids, action.payload) >= 0) {
                state.displayed = action.payload;
            }
        }
    }
});

export const weaponActions = { ...weaponSlice.actions };

const adapter_selectors = weaponsAdapter.getSelectors((state: RootState) => state.weapon.weapons);

export const weaponSelectors = {
    ...adapter_selectors,
    selectorById: (id: number) => (state:RootState) => adapter_selectors.selectById(state, id),
    selectCurrentId: (state:RootState) => state.weapon.current,
    selectCurrent: (state: RootState) => {
        if (isNil(state.weapon.current)) {
            return null;
        }

        return adapter_selectors.selectById(state, state.weapon.current)
    },
    selectDisplayedId: (state:RootState) => state.weapon.displayed,
    selectDisplayed: (state: RootState) => {
        if (isNil(state.weapon.displayed)) {
            return null;
        }

        return adapter_selectors.selectById(state, state.weapon.displayed)
    },
}

export default weaponSlice.reducer;