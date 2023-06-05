import { configureStore } from '@reduxjs/toolkit';

import statsReducer, { extractStats } from '../features/shared/stat/stats-slice';
import headerReducer, { extractHeader } from '../features/pc/pc-header/header-slice';
import detailsReducer, { extractDetails } from '../features/shared/personal-details/personal-details-slice';
import kindReducer, { stringToCharacterType } from './kind-slice';
import conditionsReducer, { extractConditions } from '../features/shared/conditions/conditions-slices';
import { CharacterDto } from '../dto/character.model';


export const extractState = (dto: CharacterDto): RootState => {
    return {
        kind: { value: stringToCharacterType(dto.kind) },
        header: extractHeader(dto),
        details: extractDetails(dto),
        stats: extractStats(dto),
        conditions: extractConditions(dto),
    };
};

export const store = configureStore({
    reducer: {
        kind: kindReducer,
        header: headerReducer,
        stats: statsReducer,
        details: detailsReducer,
        conditions: conditionsReducer,
    }
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;