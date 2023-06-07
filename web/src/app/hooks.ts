import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import { CharacterDto } from '../dto/character.model';
import { store, RootState, AppDispatch } from './store';
import { stringToCharacterType, setKind, setId } from './token-slice';
import { extractStats, setStats } from '../features/shared/stat/stats-slice';
import { extractDetails, setDetails } from '../features/shared/personal-details/personal-details-slice';
import { extractConditions, ConditionsState, actions as conditionsActions } from '../features/shared/conditions/conditions-slices';

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
    store.dispatch(setId(dto.id));
    store.dispatch(setKind(stringToCharacterType(dto.kind)));
    store.dispatch(setStats(extractStats(dto)));
    store.dispatch(setDetails(extractDetails(dto)));
    setAllConditions(extractConditions(dto));
}