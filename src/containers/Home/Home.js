import React, { Component } from 'react';
import {test} from '../../Helper/Helper'

class Home extends Component {

	constructor(props) {
		super(props);
		this.state = {
			error: null,
			
		}
	}

    componentDidMount() {
        test();
    }

	render() {

		return (
			<div className="App">
				<h1>HOME</h1>
			</div>
		);
	}

}

export default Home;
