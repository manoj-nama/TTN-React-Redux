import React, {Component} from 'react';

class About extends Component {
	render() {
		return (
			<div>
				This is About Component
				{
					this.props.children
				}
			</div>
		);
	}
}

export default About;