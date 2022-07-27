import React from 'react';
import {MapTo} from '@adobe/aem-react-editable-components';
import {FooterPrincipalContainer, TextFooter, UserNameFooter} from './FooterPrincipal.styled.js';

const FooterPrincipal = (props) => {
    return (
        <FooterPrincipalContainer>
            <TextFooter>{props.text} </TextFooter><UserNameFooter>{props.name} </UserNameFooter><TextFooter>- {props.link}</TextFooter>
        </FooterPrincipalContainer>
    )
};

export default MapTo('reactapp/components/footer-principal')(FooterPrincipal);