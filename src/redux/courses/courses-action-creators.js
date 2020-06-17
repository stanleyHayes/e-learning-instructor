import {
    CREATE_COURSE_FAILURE,
    CREATE_COURSE_REQUEST,
    CREATE_COURSE_SUCCESS,
    DELETE_COURSE_FAILURE,
    DELETE_COURSE_REQUEST,
    DELETE_COURSE_SUCCESS,
    GET_COURSE_FAILURE,
    GET_COURSE_REQUEST,
    GET_COURSE_SUCCESS,
    GET_COURSES_FAILURE,
    GET_COURSES_REQUEST,
    GET_COURSES_SUCCESS,
    UPDATE_COURSE_FAILURE,
    UPDATE_COURSE_REQUEST,
    UPDATE_COURSE_SUCCESS
} from "./courses-types";

import axios from "axios";

import {BASE_URL} from "../../utils/constants";

const createCourseRequest = () => {
    return {
        type: CREATE_COURSE_REQUEST
    }
}

const createCourseSuccess = course => {
    return {
        type: CREATE_COURSE_SUCCESS,
        payload: course
    }
}

const createCourseFailure = error => {
    return {
        type: CREATE_COURSE_FAILURE,
        payload: error
    }
}

const createCourse = (course, token) => {
    return dispatch => {
        dispatch(createCourseRequest());
        axios({
            method: `post`,
            url: `${BASE_URL}/courses`,
            headers: {
                Authorization: `Bearer ${token}`
            },
            data: course
        }).then(response => {
            const {data: course} = response.data;
            dispatch(createCourseSuccess(course));
        }).catch(error => {
            dispatch(createCourseFailure(error.response.data.error));
        })
    }
}



const getCoursesRequest = () => {
    return {
        type: GET_COURSES_REQUEST
    }
}

const getCoursesSuccess = courses => {
    return {
        type: GET_COURSES_SUCCESS,
        payload: courses
    }
}

const getCoursesFailure = error => {
    return {
        type: GET_COURSES_FAILURE,
        payload: error
    }
}

const getCourses = () => {
    return dispatch => {
        dispatch(getCoursesRequest());
        axios({
            method: `get`,
            url: `${BASE_URL}/courses`
        }).then(response => {
            const {data: courses} = response.data;
            dispatch(getCoursesSuccess(courses));
        }).catch(error => {
            dispatch(getCoursesFailure(error.response.data.error));
        })
    }
}



const getCourseRequest = () => {
    return {
        type: GET_COURSE_REQUEST
    }
}

const getCourseSuccess = course => {
    return {
        type: GET_COURSE_SUCCESS,
        payload: course
    }
}

const getCourseFailure = error => {
    return {
        type: GET_COURSE_FAILURE,
        payload: error
    }
}

const getCourse = (courseID) => {
    return dispatch => {
        dispatch(getCourseRequest());
        axios({
            method: `get`,
            url: `${BASE_URL}/courses/${courseID}`
        }).then(response => {
            const {data: course} = response.data;
            dispatch(getCourseSuccess(course));
        }).catch(error => {
            dispatch(getCourseFailure(error.response.data.error));
        })
    }
}



const updateCourseRequest = () => {
    return {
        type: UPDATE_COURSE_REQUEST
    }
}

const updateCourseSuccess = (course) => {
    return {
        type: UPDATE_COURSE_SUCCESS,
        payload: course
    }
}

const updateCourseFailure = error => {
    return {
        type: UPDATE_COURSE_FAILURE,
        payload: error
    }
}

const updateCourse = (courseID, course, token) => {
    return dispatch => {
        dispatch(updateCourseRequest());
        axios({
            method: `put`,
            url: `${BASE_URL}/courses/${courseID}`,
            headers: {
                Authorization: `Bearer ${token}`
            },
            data: course
        }).then(response => {
            const {data: course} = response.data;
            dispatch(updateCourseSuccess(course));
        }).catch(error => {
            dispatch(updateCourseFailure(error.response.data.error));
        })
    }
}



const deleteCourseRequest = () => {
    return {
        type: DELETE_COURSE_REQUEST
    }
}

const deleteCourseSuccess = course => {
    return {
        type: DELETE_COURSE_SUCCESS,
        payload: course
    }
}

const deleteCourseFailure = error => {
    return {
        type: DELETE_COURSE_FAILURE,
        payload: error
    }
}

const deleteCourse = (courseID, token) => {
    return dispatch => {
        dispatch(deleteCourseRequest());
        axios({
            method: `post`,
            url: `${BASE_URL}/courses/${courseID}`,
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(response => {
            const {data: course} = response.data;
            dispatch(deleteCourseSuccess(course));
        }).catch(error => {
            dispatch(deleteCourseFailure(error.response.data.error));
        })
    }
}

