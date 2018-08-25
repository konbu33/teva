import React from 'react';
import styled from 'styled-components';

const menuList = [
	"Products",
	"Company",
	"Access",
	"Contact",
];

const SNav = styled.nav`
	outline: 1px dotted gray;
`;

const SUl= styled.ul`
	outline: 1px dotted gray;
	display: flex;
	justify-content: space-around;
	align-items: center;
	height: 50px;
`;

const SLi = styled.li`
	outline: 1px dotted gray;
	list-style: none;
`;

const Nav = () => (
	<SNav>
		<SUl>
			{
				menuList.map( (item, index) => { 
					return <SLi key={index}>{item}</SLi> 
				})
			}
		</SUl>
	</SNav>
);

export default Nav;

