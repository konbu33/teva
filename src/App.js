import React, { Component, Fragment } from 'react';

class App extends Component {
	constructor(props) {
		super(props)
		this.state = { text: 3}
	}

	changeHandleText = (e) => {
		this.setState( { text: e.target.value} );
	}

	render() {
		return (
			<Fragment>
				<input type='text' onChange={ this.changeHandleText } value={this.state.text}/>
				<Counter name={this.state.text} age={10} count={this.state.text} />
			</Fragment>
		)
	}
};

class Counter extends Component {
	constructor(props) {
		super(props) 
		console.log(props);
		console.log(props.name);
		console.log(props.age);
		this.state = { count: props.text }
		this.state = props;
	}

	handlePlusButton = () => {
		this.setState( { count: this.state.count + 1 } );
	}

	handleMinusButton = () => {
		this.setState( { count: this.state.count - 1 } );
	}

	componentWillMount() {
		console.log('componentWillMount');
	}

	componentDidMount() {
		console.log('componentDidMount');
	}

	componentWillReceivePorps(props) {
		console.log('componentWillReceiveProps++++++++');
		this.setState( { count: props.text } );
	}

	shouldComponentUpdate() {
		console.log('shouldComponentUpdate------------------');
		return true;
	}
	componentWillUpdate() {
		console.log('componentWillUpdate');
	}

	componentDidUpdate() {
		console.log('componentDidUpdate');
	}

	componentWillUnmount() {
		console.log('componentWillUnmount');
	}

	componentDidCatch() {
		console.log('componentDidCatch');
	}
	render() {
		console.log('render: ', this.props);
		console.log('render: ', this.props.name);
		console.log('render: ', this.props.age);
		console.log('render: ', this.props.count);
		//console.log('render: ', this.state);
		return (
			<Fragment>
				<div>count: { this.state.count }</div>
				<button onClick={ this.handlePlusButton  }>+1</button>
				<button onClick={ this.handleMinusButton }>-1</button>
			</Fragment>
		)
	}
};

Counter.defaultProps = {
	name: 'Not Name',
	age: 1
};

export default App;

