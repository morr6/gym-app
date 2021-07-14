import styled from 'styled-components';
import variables from '../../../resources/variables';

const { color, button } = variables;

export const AddCategoryButton = styled.button`
    height: 10%;

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 2rem;
    border-radius: 5px;

    background: ${color.lightBlack};
    box-shadow: ${button.boxShadow};
    border: none;

    font-size: 1.75rem;
    color: ${color.white};
`;

export const ListWrapper = styled.div`
    padding: 1rem 2rem;
    font-size: 5rem;
    max-height: 75%;
    overflow: scroll;
`;

export const CategoryHeader = styled.h1`
    color: ${color.white};
    margin-bottom: 3rem;
`;
