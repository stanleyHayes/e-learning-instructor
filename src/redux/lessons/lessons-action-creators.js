import {
    CREATE_LESSON_FAILURE,
    CREATE_LESSON_REQUEST,
    CREATE_LESSON_SUCCESS,
    DELETE_LESSON_FAILURE,
    DELETE_LESSON_REQUEST,
    DELETE_LESSON_SUCCESS,
    GET_LESSON_FAILURE,
    GET_LESSON_REQUEST,
    GET_LESSON_SUCCESS,
    GET_LESSONS_FAILURE,
    GET_LESSONS_REQUEST,
    GET_LESSONS_SUCCESS,
    UPDATE_LESSON_FAILURE,
    UPDATE_LESSON_REQUEST,
    UPDATE_LESSON_SUCCESS

} from "./lessons-types";

import axios from "axios";

import {BASE_URL} from "../../utils/constants";

const createLessonRequest = () => {
    return {
        type: CREATE_LESSON_REQUEST
    }
}

const createLessonSuccess = lesson => {
    return {
        type: CREATE_LESSON_SUCCESS,
        payload: lesson
    }
}

const createLessonFailure = error => {
    return {
        type: CREATE_LESSON_FAILURE,
        payload: error
    }
}

const createLesson = (lesson, token) => {
    return dispatch => {
        dispatch(createLessonRequest());
        axios({
            method: `post`,
            url: `${BASE_URL}/lessons`,
            headers: {
                Authorization: `Bearer ${token}`
            },
            data: lesson
        }).then(response => {
            const {data: course} = response.data;
            dispatch(createLessonSuccess(course));
        }).catch(error => {
            dispatch(createLessonFailure(error.response.data.error));
        })
    }
}


const getLessonsRequest = () => {
    return {
        type: GET_LESSONS_REQUEST
    }
}

const getLessonsSuccess = lessons => {
    return {
        type: GET_LESSONS_SUCCESS,
        payload: lessons
    }
}

const getLessonsFailure = error => {
    return {
        type: GET_LESSONS_FAILURE,
        payload: error
    }
}

const getLessons = () => {
    return dispatch => {
        dispatch(getLessonsRequest());
        axios({
            method: `get`,
            url: `${BASE_URL}/lessons`
        }).then(response => {
            const {data: lessons} = response.data;
            dispatch(getLessonsSuccess(lessons));
        }).catch(error => {
            dispatch(getLessonsFailure(error.response.data.error));
        })
    }
}



const getLessonRequest = () => {
    return {
        type: GET_LESSON_REQUEST
    }
}

const getLessonSuccess = lesson => {
    return {
        type: GET_LESSON_SUCCESS,
        payload: lesson
    }
}

const getLessonFailure = error => {
    return {
        type: GET_LESSON_FAILURE,
        payload: error
    }
}

const getLesson = (lessonID) => {
    return dispatch => {
        dispatch(getLessonRequest());
        axios({
            method: `get`,
            url: `${BASE_URL}/lessons/${lessonID}`
        }).then(response => {
            const {data} = response.data;
            dispatch(getLessonSuccess(data));
        }).catch(error => {
            dispatch(getLessonFailure(error.response.data.error));
        })
    }
}


const updateLessonRequest = () => {
    return {
        type: UPDATE_LESSON_REQUEST
    }
}

const updateLessonSuccess = (course) => {
    return {
        type: UPDATE_LESSON_SUCCESS,
        payload: course
    }
}

const updateLessonFailure = error => {
    return {
        type: UPDATE_LESSON_FAILURE,
        payload: error
    }
}

const updateLesson = (lessonID, lesson, token) => {
    return dispatch => {
        dispatch(updateLessonRequest());
        axios({
            method: `put`,
            url: `${BASE_URL}/lessons/${lessonID}`,
            headers: {
                Authorization: `Bearer ${token}`
            },
            data: lesson
        }).then(response => {
            const {data: lesson} = response.data;
            dispatch(updateLessonSuccess(lesson));
        }).catch(error => {
            dispatch(updateLessonFailure(error.response.data.error));
        })
    }
}


const deleteCourseRequest = () => {
    return {
        type: DELETE_LESSON_REQUEST
    }
}

const deleteLessonSuccess = lesson => {
    return {
        type: DELETE_LESSON_SUCCESS,
        payload: lesson
    }
}

const deleteCourseFailure = error => {
    return {
        type: DELETE_LESSON_FAILURE,
        payload: error
    }
}

const deleteLesson = (lessonID, token) => {
    return dispatch => {
        dispatch(deleteCourseRequest());
        axios({
            method: `delete`,
            url: `${BASE_URL}/lessons/${lessonID}`,
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(response => {
            const {data: course} = response.data;
            dispatch(deleteLessonSuccess(course));
        }).catch(error => {
            dispatch(deleteCourseFailure(error.response.data.error));
        })
    }
}

