import React from 'react';
import styled from 'styled-components';

const SLogo = styled.h1`
	color: red;
	opacitiy: 0.5;
`;

const Logo = () => (
	<SLogo onClick={ () => { console.log('Click Logo'); } }>Hello React Storybook</SLogo>
);

export default Logo;

