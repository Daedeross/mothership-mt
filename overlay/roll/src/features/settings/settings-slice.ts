import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { isInteger, reduce } from 'lodash';

import { addOrUpdate, tryUpdate } from '../../app/utils';
import { doSimpleRoll } from '../../app/linker';

export enum Position {
    TopLeft,
    TopRight,
    BottomLeft,
    BottomRight
}

export interface SettingsState {
    position: Position,
    availableDice: Array<number>,
}