import React from 'react';
import {MapTo} from '@adobe/aem-react-editable-components';
import { TitlePrincipalStyled } from './TitlePrincipal.styled';

const TitlePrincipal = (props) => {
    return(
        <TitlePrincipalStyled>{props.text}</TitlePrincipalStyled>
    )
}

export default MapTo('reactapp/components/title-principal')(TitlePrincipal);