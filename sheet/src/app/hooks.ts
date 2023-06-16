import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import { CharacterDto } from '../dto/character.model';
import { store, RootState, AppDispatch } from './store';
import { stringToCharacterType, setKind, setId, setChanging } from './token-slice';
import { extractStats, setStats } from '../features/shared/stat/stats-slice';
import { extractDetails, setDetails } from '../features/shared/personal-details/personal-details-slice';
import { extractConditions, ConditionsState, actions as conditionsActions } from '../features/shared/conditions/conditions-slices';
import { extractSkills, setSkills } from '../features/pc/skills/skills-slice';
import { armorActions } from '../features/shared/armor/armor-slice';
import { weaponActions } from '../features/shared/weapon/weapon-slice';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

const setAllConditions = (state: ConditionsState) => {
    store.dispatch(conditionsActions.setState({ key: 'health', value: state.health }));
    store.dispatch(conditionsActions.setState({ key: 'wounds', value: state.wounds }));
    store.dispatch(conditionsActions.setState({ key: 'stress', value: state.stress }));
    store.dispatch(conditionsActions.setMiscConditions(state.misc));
}

export const testFoo = (x: string) => {
    alert(x);
}

export const updateState = (dto: CharacterDto) => {
    store.dispatch(setChanging(true));
    store.dispatch(setId(dto.id));
    store.dispatch(setKind(stringToCharacterType(dto.kind)));
    store.dispatch(setStats(extractStats(dto)));
    store.dispatch(setDetails(extractDetails(dto)));
    setAllConditions(extractConditions(dto));
    store.dispatch(setSkills(extractSkills(dto)));
    store.dispatch(armorActions.setArmors(dto.armors));
    store.dispatch(armorActions.setCurrent(dto.currentarmor > 0 ? dto.currentarmor : null))
    store.dispatch(weaponActions.setWeapons(dto.weapons));
    store.dispatch(weaponActions.setCurrent(dto.currentweapon > 0 ? dto.currentweapon : null))

    store.dispatch(setChanging(false));
}