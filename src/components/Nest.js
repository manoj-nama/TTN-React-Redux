import React, {Component} from 'react';

class Nest extends Component {
	render() {
		return (
			<div>
				This is Dynamic parametrized component

				<p>
				we got: 
					{
						this.props.params.name
					}
					{
						this.props.location.query.a
					}
				</p>
			</div>
		);
	}
}

export default Nest;