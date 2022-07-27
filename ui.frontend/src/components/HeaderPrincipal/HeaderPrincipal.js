import React from 'react';
import {MapTo} from '@adobe/aem-react-editable-components';
import {HeaderContainer, HeaderPrincipalStyled} from './HeaderPrincipal.styled.js';

const HeaderPrincipal = (props) => {
    return(
        <HeaderContainer>
            <HeaderPrincipalStyled>{props.text}</HeaderPrincipalStyled>
        </HeaderContainer>
    )
};

export default MapTo('reactapp/components/header-principal')(HeaderPrincipal);