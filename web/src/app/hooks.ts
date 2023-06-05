import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from './store';
import { store } from './store';
import { stringToCharacterType, setKind } from './kind-slice';
import { extractHeader, setState as setHeader } from '../features/pc/pc-header/header-slice';
import { extractStats, setState as setStats } from '../features/shared/stat/stats-slice';
import { extractDetails, setState as setDetails } from '../features/shared/personal-details/personal-details-slice';
import { CharacterDto } from '../dto/character.model';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const updateState = (dto: CharacterDto) => {
    store.dispatch(setKind(stringToCharacterType(dto.kind)));
    store.dispatch(setHeader(extractHeader(dto)));
    store.dispatch(setStats(extractStats(dto)));
    store.dispatch(setDetails(extractDetails(dto)));
}