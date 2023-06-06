import { configureStore } from '@reduxjs/toolkit';

import kindReducer from './kind-slice';
import statsReducer from '../features/shared/stat/stats-slice';
import detailsReducer from '../features/shared/personal-details/personal-details-slice';
import conditionsReducer from '../features/shared/conditions/conditions-slices';
import rollModeReducer from '../features/shared/roll/roll-mode-slice';

export const store = configureStore({
    reducer: {
        kind: kindReducer,
        stats: statsReducer,
        details: detailsReducer,
        conditions: conditionsReducer,
        rollmode: rollModeReducer,
    }
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;