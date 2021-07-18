import styled from 'styled-components';
import variables from '../../../../../resources/variables';

const { color, button } = variables;

export const Container = styled.div`
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
    overflow: hidden;
`;

export const HeaderWrapper = styled.div`
    height: 30px;
    margin-bottom: 1rem;

    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const CategoryNameWrapper = styled.div`
    display: flex;
    align-items: center;

    width: 65%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`;

export const CategoryAvatar = styled.img`
    width: 3rem;
    height: 3rem;
`;

export const CategoryName = styled.span`
    font-size: 1.75rem;
    margin-left: 1rem;
`;

export const ButtonsWrapper = styled.div`
    width: 30%;

    display: flex;
    justify-content: space-around;
    align-items: center;
`;

export const CustomUL = styled.ul`
    padding: 0;
`;

export const CustomLI = styled.li`
    padding: 1rem 0;
    font-size: 1.5rem;
    border-bottom: ${({ isLast }: {isLast?: boolean}) => (isLast ? 'none' : `1px solid ${color.transparentWhite}`)}
`;
