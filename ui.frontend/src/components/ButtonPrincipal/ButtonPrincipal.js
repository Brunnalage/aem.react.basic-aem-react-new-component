import React from 'react';
import {MapTo} from '@adobe/aem-react-editable-components';
import {BtnPrincipalStyled} from './ButtonPrincipal.styled.js';

const ButtonPrincipal = (props) => {
    return (
        <BtnPrincipalStyled>{props.text}</BtnPrincipalStyled>
    )
};

export default MapTo('reactapp/components/button-principal')(ButtonPrincipal);
