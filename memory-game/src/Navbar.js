import React, {Component} from 'react';

class Navbar extends Component{
	render() {
		return (
			<div className="navbar">
				<h2> Memory Game </h2>
				<p onClick={this.props.handleNewGame}>New Game</p>
			</div>
		);
	}
}

export default Navbar;