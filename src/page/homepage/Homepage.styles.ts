import styled from 'styled-components';
import { Link } from 'react-router-dom';
import variables from '../../resources/variables';

const { color } = variables;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
  position: relative; 
  height: 100%;
  padding: 15% 10%;
  color: red;
`;

export const MiddleLine = styled.div`
  position: absolute;

  height: 70%;
  width: 1px;

  top: 2.5%;
  right: 0;
  bottom: 0;
  left: 0;

  margin: auto;
  
  opacity: 0.5;
  background-color: ${color.white}
`;

export const LinksWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const CustomLink = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-decoration: none;
  background: transparent;
  border: none;
  border-bottom: ${({ noBorder }: { noBorder?: boolean }) => (noBorder
        ? 'none'
        : `1px solid ${color.transparentWhite}`)};

  color: ${color.white};
  font-size: 1.5rem;

  padding: 0 1rem;

  width: calc(50% - 0.5px);
  height: 150px
`;
