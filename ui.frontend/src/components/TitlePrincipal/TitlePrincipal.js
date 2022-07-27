import React from 'react';
import {MapTo} from '@adobe/aem-react-editable-components';
import { TitlePrincipalStyled, TitleContainer } from './TitlePrincipal.styled';

const TitlePrincipal = (props) => {
    return(
        <TitleContainer>
        <TitlePrincipalStyled>{props.text}</TitlePrincipalStyled>
        </TitleContainer>
    )
}

export default MapTo('reactapp/components/title-principal')(TitlePrincipal);