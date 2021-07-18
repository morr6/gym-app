import Modal from 'react-modal';
import { useSelector, useDispatch, batch } from 'react-redux';

import { modalStateRoot, setModalType, closeModal } from '../ModalSlice';

const modalStyles = {
    overlay: {
        background: 'rgba(0,0,0,.75)',
    },
    content: {
        marginTop: 'auto',
        marginBottom: 'auto',
        height: '200px',
    },
};

export const AddCategory = () => {
    const dispatch = useDispatch();

    const [isModalOpen] = useSelector((state) => modalStateRoot(state, ['isModalOpen']));

    const onModalClose = () => {
        batch(() => {
            dispatch(setModalType(''));
            dispatch(closeModal());
        });
    };

    return (
        <Modal
            isOpen={isModalOpen}
            onRequestClose={onModalClose}
            style={modalStyles}
            contentLabel="Example Modal"
        >
            <input type="text" />
        </Modal>
    );
};

export default AddCategory;
