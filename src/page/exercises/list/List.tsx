import AddIcon from '@material-ui/icons/Add';

import Header from '../../../components/header/Header';

import {
    AddCategoryButton,
    ListWrapper,
    CategoryHeader,
} from './List.styles';

import Exercises from '../exercises/Exercises';

const x = [
    { id: 1, name: 'Biceps', avatar: '' },
    { id: 2, name: 'Klata', avatar: '' },
    { id: 3, name: 'Nogi', avatar: '' },
    { id: 4, name: 'Plecy', avatar: '' },
];

export const ExercisesList = () => {
    console.log(1);
    return (
        <>
            <Header>
                <AddCategoryButton type="button">
                    <AddIcon />
                    Add category
                </AddCategoryButton>
            </Header>
            List

            <ListWrapper>
                <CategoryHeader>Categories</CategoryHeader>

                {x.map((item) => <Exercises item={item} />)}
            </ListWrapper>
        </>
    );
};

export default ExercisesList;
