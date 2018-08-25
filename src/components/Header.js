import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';

const SHeader = styled.header`
	outline: 1px dotted gray;
`;

const Header = () => (
	<SHeader>
		<Logo/>
	</SHeader>
);

export default Header;

