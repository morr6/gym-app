import { FC, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import CreateIcon from '@material-ui/icons/Create';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

import {
    Item,
    Wrapper,
    CategoryNameWrapper,
    CategoryName,
    ButtonsWrapper,
} from './Exercises.styles';

import { exercisesStateRoot, TStore } from './ExercisesSlice';
import { getCategoryExercises } from './ExercisesActions';

type TProps = {
    item: {
        id: number;
        name: string;
        avatar: string;
    }
}

export const ListItem: FC<TProps> = ({ item: { name, avatar, id } }) => {
    const dispatch = useDispatch();

    const [isOpen, setIsOpen] = useState(false);

    const exercises = useSelector((state: TStore) => exercisesStateRoot(state));

    useEffect(() => {
        dispatch(getCategoryExercises());
    }, [id]);

    return (
        <Item isOpen={isOpen}>
            <Wrapper>
                <CategoryNameWrapper>
                    <img src={avatar} alt="avatar" />
                    <CategoryName>{name}</CategoryName>
                </CategoryNameWrapper>

                <ButtonsWrapper>
                    <AddIcon
                        style={{ fontSize: 15 }}
                    />
                    <CreateIcon
                        onClick={() => console.log('edit')}
                        style={{ fontSize: 15, marginLeft: '10px' }}
                    />
                    <DeleteIcon
                        onClick={() => console.log('delete')}
                        style={{ fontSize: 15, marginLeft: '10px' }}
                    />
                    {!!exercises?.length && (
                        <ArrowDropDownIcon
                            style={{
                                fontSize: 50,
                                transition: '0.3s',
                                transform: isOpen ? 'rotate(180deg)' : 'none',
                            }}
                            onClick={() => setIsOpen((s) => !s)}
                        />
                    )}
                </ButtonsWrapper>
            </Wrapper>
        </Item>
    );
};

export default ListItem;
