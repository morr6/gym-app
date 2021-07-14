import { createSlice } from '@reduxjs/toolkit';
// import { getCategoryExercises } from './ExercisesActions';

export type TStore = { exercises: { id: number; name: string; }[] }

export const exercisesStateRoot = (state: TStore) => state.exercises;

export const slice = createSlice({
    name: 'exercise',
    initialState: {
        items: [],
        isWaiting: false,
    },
    reducers: {
        startWaiting: (state) => {
            state.isWaiting = true;
        },
        stopWaiting: (state) => {
            state.isWaiting = false;
        },
    },
    extraReducers: (builder) => {
        builder.addCase('fullfild', (state, action) => {
            console.log({ state, action });
        });
    },
});

export const { startWaiting, stopWaiting } = slice.actions;

export default slice.reducer;
