import { createSlice } from '@reduxjs/toolkit';
import { TModalTypes } from './utils/modalTypes';

type TInitialStete = { isModalOpen: boolean, modalType: TModalTypes}

const initialState: TInitialStete = {
    isModalOpen: false,
    modalType: '',
};

export const slice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        openModal: (state) => {
            state.isModalOpen = true;
        },
        closeModal: (state) => {
            state.isModalOpen = false;
        },
        setModalType: (state, action) => {
            state.modalType = action.payload;
        },
    },
});

export const { openModal, closeModal, setModalType } = slice.actions;

export const modalStateRoot = (state: any, fields: string[]) => fields
    .map((field) => state.exercises.modal[field]);

export default slice.reducer;
