import styled from 'styled-components';
import variables from '../../../resources/variables';

const { color, button } = variables;

export const Item = styled.div`
    transition: 0.5s;

    width: 100%;
    height: auto;
    max-height: ${({ isOpen }: {isOpen: boolean}) => (isOpen ? '300px' : '50px')};
    margin: 10px auto;
    padding: 1rem;

    color: ${color.white};

    box-shadow: ${button.boxShadow};
    background: ${color.lightBlack};
    border-radius: 5px;
`;

export const Wrapper = styled.div`
    height: 30px;

    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const CategoryNameWrapper = styled.div`
    width: 65%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`;

export const CategoryName = styled.span`
    font-size: 2rem;
    margin-left: 1rem;
    max-width: 1%;
`;

export const ButtonsWrapper = styled.div`
    width: 30%;

    display: flex;
    justify-content: space-around;
    align-items: center;
`;
