import { FC, useState } from 'react';

import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import CreateIcon from '@material-ui/icons/Create';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

import {
    Container,
    HeaderWrapper,
    CategoryNameWrapper,
    CategoryAvatar,
    CategoryName,
    ButtonsWrapper,
    CustomUL,
    CustomLI,
} from './Category.styles';

import { TCategory } from '../../../types';

type TProps = { item: TCategory }

export const Category: FC<TProps> = ({ item: { name, exercises } }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Container isOpen={isOpen}>
            <HeaderWrapper>
                <CategoryNameWrapper>
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
            </HeaderWrapper>

            <CustomUL>
                {exercises.map((exercise, index) => (
                    <CustomLI isLast={index === exercises.length - 1}>
                        {exercise.name}
                    </CustomLI>
                ))}
            </CustomUL>
        </Container>
    );
};

export default Category;
