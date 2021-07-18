import { createSlice } from '@reduxjs/toolkit';
import { fetchCategories } from './CategoriesActions';

import { TCategories } from '../types';

type TInitialState = {
    items: TCategories;
    isWaiting: boolean;
    error: string | null | undefined;
}

const initialState: TInitialState = {
    items: [],
    isWaiting: false,
    error: null,
};

export const slice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        startWaiting: (state) => {
            state.isWaiting = true;
        },
        stopWaiting: (state) => {
            state.isWaiting = false;
        },
        reset: () => initialState,
    },
    extraReducers: ({ addCase }) => {
        addCase(fetchCategories.pending, (state) => {
            state.isWaiting = true;
            state.error = null;
        });
        addCase(fetchCategories.fulfilled, (state, action) => {
            state.items = action.payload;
            state.isWaiting = false;
        });
        addCase(fetchCategories.rejected, (state, action) => {
            state.isWaiting = true;
            state.error = action.error.message;
        });
    },
});

export const { startWaiting, stopWaiting, reset } = slice.actions;

export const categoriesStateRoot = (state: any, fields: string[]) => fields.map(
    (field) => state.exercises.categories[field],
);

export default slice.reducer;
