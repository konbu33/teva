import React from 'react';
import styled from 'styled-components';
import Input from './Input';

const SMain = styled.main`
	outline: 1px dotted gray;
	height: 300px;
`;

const Main = () => (
	<SMain>Main Contents
		<Input/>
	</SMain>
);

export default Main;

