import {
	LOAD_COURSE,
	COURSE_LOADED,
	LOADING
} from '../constants/constants';

import CourseApi from '../api/mockCourseApi';

export function loadCourse() {
	return {
		type: LOAD_COURSE
	}
}

export function courseLoaded(courses) {
	return {
		type: COURSE_LOADED,
		courses
	}
}

export function showLoader() {
	return {
		type: LOADING
	}
}

export function fetchCourse() {
	return (dispatch) => {
		return CourseApi.getAllCourses()
			.then((courses) => {
				dispatch(courseLoaded(courses));
			})
			.catch((err) => {

			})
	}
}