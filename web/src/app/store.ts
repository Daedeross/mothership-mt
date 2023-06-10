import { configureStore } from '@reduxjs/toolkit';

import tokenReducer from './token-slice';
import linkerReducer from './linker-slice';
import statsReducer from '../features/shared/stat/stats-slice';
import detailsReducer from '../features/shared/personal-details/personal-details-slice';
import conditionsReducer from '../features/shared/conditions/conditions-slices';
import rollModeReducer from '../features/shared/roll/roll-mode-slice';
import skillsReducer from '../features/pc/skills/skills-slice';
import armorReducer from '../features/shared/armor/armor-slice';
import weaponReducer from '../features/shared/weapon/weapon-slice';

export const store = configureStore({
    reducer: {
        token: tokenReducer,
        stats: statsReducer,
        details: detailsReducer,
        conditions: conditionsReducer,
        rollmode: rollModeReducer,
        skills: skillsReducer,
        linker: linkerReducer,
        armor: armorReducer,
        weapon: weaponReducer,
    }
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;