import { configureStore } from '@reduxjs/toolkit';

import exercisesReducer from '../page/exercises/ExercisesReducer';

const store = configureStore({
    reducer: {
        exercises: exercisesReducer,
    },
});

export type TStore = ReturnType<typeof store.getState>

export default store;
