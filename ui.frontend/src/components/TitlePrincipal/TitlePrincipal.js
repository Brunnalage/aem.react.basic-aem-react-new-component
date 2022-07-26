import React from 'react';
import {MapTo} from '@adobe/aem-react-editable-components';
import { TitlePrincipalStyled } from './TitlePrincipal.styled';
import './TitlePrincipal.css'

const TitlePrincipal = (props) => {
    return(
        <h2 className='principal'>{props.text}</h2>
    )
}

export default MapTo('reactapp/components/title-principal')(TitlePrincipal);