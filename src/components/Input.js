import React, { Fragment } from 'react';
import styled from 'styled-components';

const SInput = styled.input`
	&:hover {
		color: red;
	}
`;

const SLabel = styled.label`
	&:hover {
		color: red;
	}
`;

const Input = () => (
	<Fragment>
	
		<br/>
		<SInput type='radio' id='radio1' onClick={ () => { console.log('Click Radio')}}/>
		<SLabel htmlFor='radio1'>radio1</SLabel>

		<br/>
		<SInput type='radio' id='radio2' defaultChecked onClick={ () => { console.log('Click Radio')}}/>
		<SLabel htmlFor='radio2'>radio2</SLabel>

		<br/>
		<SInput type='checkbox' id='checkbox1' onClick={ () => { console.log('Click Checkbox')}}/>
		<SLabel htmlFor='checkbox1'>checkbox1</SLabel>

		<br/>
		<SInput type='checkbox' id='checkbox2' defaultChecked onClick={ () => { console.log('Click Checkbox')}}/>
		<SLabel htmlFor='checkbox2'>checkbox2</SLabel>

		<br/>
		<SLabel htmlFor='text1'>text1</SLabel>
		<SInput type='text' id='text1' onClick={ () => { console.log('Click Input')}}/>

		<br/>
		<SLabel htmlFor='text2'>text2</SLabel>
		<SInput type='text' id='text2' onChange={ () => { console.log('Changed Input')}}/>
	</Fragment>
);

export default Input;

