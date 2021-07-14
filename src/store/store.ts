import { configureStore } from '@reduxjs/toolkit';

import exercisesReducer from '../page/exercises/exercisesReducer';

const store = configureStore({
    reducer: {
        main: exercisesReducer,
    },
});

export default store;
