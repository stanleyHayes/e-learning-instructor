import {
    CREATE_EXERCISE_FAILURE,
    CREATE_EXERCISE_REQUEST,
    CREATE_EXERCISE_SUCCESS,
    DELETE_EXERCISE_FAILURE,
    DELETE_EXERCISE_REQUEST,
    DELETE_EXERCISE_SUCCESS,
    GET_EXERCISE_FAILURE,
    GET_EXERCISE_REQUEST,
    GET_EXERCISE_SUCCESS,
    GET_EXERCISES_FAILURE,
    GET_EXERCISES_REQUEST,
    GET_EXERCISES_SUCCESS,
    UPDATE_EXERCISE_FAILURE,
    UPDATE_EXERCISE_REQUEST,
    UPDATE_EXERCISE_SUCCESS

} from "./exercises-types";

import axios from "axios";

import {BASE_URL} from "../../utils/constants";

const createExerciseRequest = () => {
    return {
        type: CREATE_EXERCISE_REQUEST
    }
}

const createExerciseSuccess = exercise => {
    return {
        type: CREATE_EXERCISE_SUCCESS,
        payload: exercise
    }
}

const createExerciseFailure = error => {
    return {
        type: CREATE_EXERCISE_FAILURE,
        payload: error
    }
}

const createExercise = (exercise, token) => {
    return dispatch => {
        dispatch(createExerciseRequest());
        axios({
            method: `post`,
            url: `${BASE_URL}/exercises`,
            headers: {
                Authorization: `Bearer ${token}`
            },
            data: exercise
        }).then(response => {
            const {data} = response.data;
            dispatch(createExerciseSuccess(data));
        }).catch(error => {
            dispatch(createExerciseFailure(error.response.data.error));
        })
    }
}



const getExercisesRequest = () => {
    return {
        type: GET_EXERCISES_REQUEST
    }
}

const getExercisesSuccess = exercises => {
    return {
        type: GET_EXERCISES_SUCCESS,
        payload: exercises
    }
}

const getExercisesFailure = error => {
    return {
        type: GET_EXERCISES_FAILURE,
        payload: error
    }
}

const getExercises = () => {
    return dispatch => {
        dispatch(getExercisesRequest());
        axios({
            method: `get`,
            url: `${BASE_URL}/exercises`
        }).then(response => {
            const {data} = response.data;
            dispatch(getExercisesSuccess(data));
        }).catch(error => {
            dispatch(getExercisesFailure(error.response.data.error));
        })
    }
}



const getExerciseRequest = () => {
    return {
        type: GET_EXERCISE_REQUEST
    }
}

const getExerciseSuccess = lesson => {
    return {
        type: GET_EXERCISE_SUCCESS,
        payload: lesson
    }
}

const getExerciseFailure = error => {
    return {
        type: GET_EXERCISE_FAILURE,
        payload: error
    }
}

const getExercise = (exerciseID) => {
    return dispatch => {
        dispatch(getExerciseRequest());
        axios({
            method: `get`,
            url: `${BASE_URL}/exercises/${exerciseID}`
        }).then(response => {
            const {data} = response.data;
            dispatch(getExerciseSuccess(data));
        }).catch(error => {
            dispatch(getExerciseFailure(error.response.data.error));
        })
    }
}



const updateExerciseRequest = () => {
    return {
        type: UPDATE_EXERCISE_REQUEST
    }
}

const updateExerciseSuccess = (exercise) => {
    return {
        type: UPDATE_EXERCISE_SUCCESS,
        payload: exercise
    }
}

const updateExerciseFailure = error => {
    return {
        type: UPDATE_EXERCISE_FAILURE,
        payload: error
    }
}

const updateExercise = (exerciseID, exercise, token) => {
    return dispatch => {
        dispatch(updateExerciseRequest());
        axios({
            method: `put`,
            url: `${BASE_URL}/exercises/${exerciseID}`,
            headers: {
                Authorization: `Bearer ${token}`
            },
            data: exercise
        }).then(response => {
            const {data: lesson} = response.data;
            dispatch(updateExerciseSuccess(lesson));
        }).catch(error => {
            dispatch(updateExerciseFailure(error.response.data.error));
        })
    }
}



const deleteExerciseRequest = () => {
    return {
        type: DELETE_EXERCISE_REQUEST
    }
}

const deleteExerciseSuccess = exercise => {
    return {
        type: DELETE_EXERCISE_SUCCESS,
        payload: exercise
    }
}

const deleteExerciseFailure = error => {
    return {
        type: DELETE_EXERCISE_FAILURE,
        payload: error
    }
}

const deleteExercise = (exerciseID, token) => {
    return dispatch => {
        dispatch(deleteExerciseRequest());
        axios({
            method: `delete`,
            url: `${BASE_URL}/exercises/${exerciseID}`,
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(response => {
            const {data} = response.data;
            dispatch(deleteExerciseSuccess(data));
        }).catch(error => {
            dispatch(deleteExerciseFailure(error.response.data.error));
        })
    }
}

