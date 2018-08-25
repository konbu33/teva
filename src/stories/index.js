import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';

import Logo from '../components/Logo';
import Header from '../components/Header';
import Nav from '../components/Nav';
import Main from '../components/Main';
import Copylight from '../components/Copylight';
import Footer from '../components/Footer';
import Container from '../components/Container';

import Input from '../components/Input';

storiesOf('Logo',module)
	.add('Normal', () => (
		<Logo/>
	));

storiesOf('Header', module)
	.add('Normal', () => (
		<Header/>
	));

storiesOf('Nav', module)
	.add('Normal', () => (
		<Nav/>
	));

storiesOf('Main', module)
	.add('Normal', () => (
		<Main/>
	));

storiesOf('Copylight', module)
	.add('Normal', () => (
		<Copylight/>
	));

storiesOf('Footer', module)
	.add('Normal', () => (
		<Footer/>
	));

storiesOf('Container', module)
	.add('Normal', () => (
		<Container/>
	));

storiesOf('Input', module)
	.add('Normal', () => (
		<Input/>
	));


/*
storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));
*/

