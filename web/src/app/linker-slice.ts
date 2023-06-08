import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const LINKER_ID = "linker";

export interface LinkerState {
    uri: string;
}

const initialState: LinkerState = {
    uri: ''
}

const linkerSlice = createSlice({
    name: 'linker',
    initialState,
    reducers: {
        executeLink: (state: LinkerState, action: PayloadAction<string>) => {
            state.uri = action.payload;
            document.getElementById(LINKER_ID)?.setAttribute('href', action.payload);
            document.getElementById(LINKER_ID)?.click();
        }
    }
});

export const executeLink = linkerSlice.actions.executeLink

export default linkerSlice.reducer