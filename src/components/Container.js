import React from 'react';
import styled from 'styled-components';

import Header from './Header';
import Nav from './Nav';
import Main from './Main';
import Footer from './Footer';

const SContainter = styled.section`
	outline: 1px dotted gray;
`;

const Containter = () => (
	<SContainter>
		<Header/>
		<Nav/>
		<Main/>
		<Footer/>
	</SContainter>
);

export default Containter;

