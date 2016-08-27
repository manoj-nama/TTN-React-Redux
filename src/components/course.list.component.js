import React, {Component} from 'react';

export default class CourseList extends Component {
	render() {
		return (
			<table>
			<thead>
				<tr>
					<th>id</th>
					<th>title</th>
				</tr>
			</thead>
			<tbody>
			{
				this.props.courses.map((course) => {
					return(
						<tr>
							<td> {course.id} </td>
							<td> {course.title} </td>
						</tr>
					)
				})
			}
			</tbody>
			</table>
		);
	}
}