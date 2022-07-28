import React from 'react';
import {MapTo} from '@adobe/aem-react-editable-components';
import {PPrincipalStyled, PContainer} from './ParagraphPrincipal.styled.js';

const ParagraphPrincipal = (props) => {
    return (
        <PContainer>
            <PPrincipalStyled>{props.text}</PPrincipalStyled>
        </PContainer>
    )
};

export default MapTo('reactapp/components/paragraph-principal')(ParagraphPrincipal);