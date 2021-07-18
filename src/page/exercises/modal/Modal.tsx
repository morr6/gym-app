import { useSelector } from 'react-redux';

import { MODAL_TYPES } from './utils/modalTypes';

import { modalStateRoot } from './ModalSlice';

import AddCategory from './components/AddCategory';
import AddExercise from './components/AddExercise';
import Delete from './components/Delete';

export const Modal = () => {
    const [modalType] = useSelector((state) => modalStateRoot(state, ['modalType']));

    switch (modalType) {
    case MODAL_TYPES.ADD_CATEGORY:
        return <AddCategory />;
    case MODAL_TYPES.ADD_EXERCISE:
        return <AddExercise />;
    case MODAL_TYPES.DELTE:
        return <Delete />;
    default:
        return null;
    }
};

export default Modal;
