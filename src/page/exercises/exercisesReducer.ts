import { combineReducers } from 'redux';

import categoriesReducer from './categories/CategoriesSlice';
import modalReducer from './modal/ModalSlice';

export default combineReducers({
    categories: categoriesReducer,
    modal: modalReducer,
});
