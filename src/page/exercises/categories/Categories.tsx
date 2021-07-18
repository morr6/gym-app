import { FC, useEffect } from 'react';
import { useSelector, useDispatch, batch } from 'react-redux';

import AddIcon from '@material-ui/icons/Add';

import { MODAL_TYPES } from '../modal/utils/modalTypes';

import {
    AddCategoryButton,
    ListWrapper,
    CategoryHeader,
} from './Categories.styles';

import Header from '../../../components/header/Header';
import Category from './components/category/Category';

import { fetchCategories } from './CategoriesActions';
import { categoriesStateRoot } from './CategoriesSlice';
import { setModalType, openModal } from '../modal/ModalSlice';

import { TCategory } from '../types';

export const ExercisesList: FC = () => {
    const dispatch = useDispatch();

    const [categories, isWaiting] = useSelector(
        (state) => categoriesStateRoot(state, ['items', 'isWaiting']),
    );

    const openAddCategoryModal = () => {
        batch(() => {
            dispatch(setModalType(MODAL_TYPES.ADD_CATEGORY));
            dispatch(openModal());
        });
    };

    useEffect(() => {
        dispatch(fetchCategories());
    }, []);

    return (
        <>
            <Header>
                <AddCategoryButton
                    type="button"
                    onClick={openAddCategoryModal}
                >
                    <AddIcon />
                    Add category
                </AddCategoryButton>
            </Header>

            {isWaiting
                ? <div style={{ color: 'white' }}>LOADING</div>
                : (
                    <ListWrapper>
                        <CategoryHeader>Categories</CategoryHeader>

                        {categories?.map(
                            (item: TCategory) => <Category key={item.id} item={item} />,
                        )}
                    </ListWrapper>
                )}
        </>
    );
};

export default ExercisesList;
