import React from 'react';
import styled from 'styled-components';
import Copylight from './Copylight';

const SFooter = styled.footer`
	outline: 1px dotted gray;
`;

const Footer = () => (
	<SFooter>
		<Copylight/>
	</SFooter>
);

export default Footer;

