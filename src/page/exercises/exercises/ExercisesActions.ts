import { createAsyncThunk } from '@reduxjs/toolkit';

export const getCategoryExercises = createAsyncThunk(
    'EXERCISES_GET_CATEGORY_EXERCISES',
    async (userId, thunkAPI) => {
        console.log({ userId, thunkAPI });
    //   const response = await userAPI.fetchById(userId)
    //   return response.data
    },
);
