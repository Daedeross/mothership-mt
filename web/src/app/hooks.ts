import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import { CharacterDto } from '../dto/character.model';
import { store, RootState, AppDispatch } from './store';
import { stringToCharacterType, setKind } from './kind-slice';
import { extractHeader, setState as setHeader } from '../features/pc/pc-header/header-slice';
import { extractStats, setState as setStats } from '../features/shared/stat/stats-slice';
import { extractDetails, setState as setDetails } from '../features/shared/personal-details/personal-details-slice';
import { extractConditions, ConditionsState, setState as setValueCondition, setTraumaResponse, setMiscConditions } from '../features/shared/conditions/conditions-slices';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

const setAllConditions = (state: ConditionsState) =>
{
    store.dispatch(setValueCondition({ key: 'health', value: state.health }));
    store.dispatch(setValueCondition({ key: 'wounds', value: state.wounds }));
    store.dispatch(setValueCondition({ key: 'stress', value: state.stress }));
    store.dispatch(setMiscConditions(state.misc));
}

export const testFoo = (x: string) => {
    alert(x);
}

export const updateState = (dto: CharacterDto) => {
    store.dispatch(setKind(stringToCharacterType(dto.kind)));
    store.dispatch(setHeader(extractHeader(dto)));
    store.dispatch(setStats(extractStats(dto)));
    store.dispatch(setDetails(extractDetails(dto)));
    setAllConditions(extractConditions(dto));
}