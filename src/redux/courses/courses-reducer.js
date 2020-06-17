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

import {COURSES} from "./courses-data";

const INITIAL_STATE = {
    courses: COURSES,
    loading: false,
    error: null,
    selectedCourse: COURSES[0]
}

const courseReducer = (state = INITIAL_STATE, action) => {
    let updateCourseList;

    switch (action.type) {
        case CREATE_COURSE_REQUEST:
            return {
                ...state,
                loading: true
            }

        case CREATE_COURSE_SUCCESS:
            return {
                ...state,
                loading: true,
                courses: [...state.courses, action.payload]
            }

        case CREATE_COURSE_FAILURE:
            return {
                ...state,
                loading: true,
                error: action.payload
            }


        case GET_COURSE_REQUEST:
            return {
                ...state,
                loading: true
            }

        case GET_COURSE_SUCCESS:
            return {
                ...state,
                loading: true,
                selectedCourse: action.payload
            }

        case GET_COURSE_FAILURE:
            return {
                ...state,
                loading: true,
                error: action.payload,
                selectedCourse: {}
            }


        case GET_COURSES_REQUEST:
            return {
                ...state,
                loading: true
            }

        case GET_COURSES_SUCCESS:
            return {
                ...state,
                loading: true,
                courses: state.courses,
                error: null
            }

        case GET_COURSES_FAILURE:
            return {
                ...state,
                loading: true,
                error: action.payload,
                courses: []
            }


        case UPDATE_COURSE_REQUEST:
            return {
                ...state,
                loading: true
            }

        case UPDATE_COURSE_SUCCESS:
            updateCourseList = state.courses.map(course => {
                if(course._id === action.payload._id){
                    return action.payload;
                }
                return course;
            })
            return {
                ...state,
                loading: true,
                courses: [...updateCourseList],
                error: null
            }

        case UPDATE_COURSE_FAILURE:
            return {
                ...state,
                loading: true,
                error: action.payload
            }


        case DELETE_COURSE_REQUEST:
            return {
                ...state,
                loading: true
            }

        case DELETE_COURSE_SUCCESS:

            updateCourseList = state.courses.map( course => {
                return course._id !== action.payload._id
            });

            return {
                ...state,
                loading: true,
                courses: [...updateCourseList],
                error: null
            }

        case DELETE_COURSE_FAILURE:
            return {
                ...state,
                loading: true,
                error: action.payload
            }
        default:
            return state;
    }
}

export default courseReducer;
