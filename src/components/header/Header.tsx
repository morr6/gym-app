import { FC } from 'react';
import { useHistory } from 'react-router-dom';

import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import HeaderWrapper from './Header.styles';

const iconStyles = { fontSize: 40, color: 'white' };

export const Header: FC = ({ children }) => {
    const history = useHistory();

    return (
        <HeaderWrapper>
            <ArrowBackIcon onClick={history.goBack} style={iconStyles} />

            {children}
        </HeaderWrapper>
    );
};

export default Header;
