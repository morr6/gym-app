import { combineReducers } from 'redux';

import exercisesReducer from './exercises/ExercisesSlice';

export default combineReducers({
    exercises: exercisesReducer,
});
