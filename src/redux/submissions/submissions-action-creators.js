import {
    GET_SUBMISSIONS_FAILURE,
    GET_SUBMISSIONS_SUCCESS,
    GET_SUBMISSIONS_REQUEST,
    CREATE_SUBMISSION_FAILURE,
    CREATE_SUBMISSION_SUCCESS,
    CREATE_SUBMISSION_REQUEST,
    UPDATE_SUBMISSION_SUCCESS,
    UPDATE_SUBMISSION_REQUEST,
    UPDATE_SUBMISSION_FAILURE,
    GET_SUBMISSION_SUCCESS,
    GET_SUBMISSION_REQUEST,
    GET_SUBMISSION_FAILURE,
    DELETE_SUBMISSION_SUCCESS,
    DELETE_SUBMISSION_REQUEST,
    DELETE_SUBMISSION_FAILURE

} from "./submissions-type";

import axios from "axios";

import {BASE_URL} from "../../utils/constants";

const createSubmissionRequest = () => {
    return {
        type: CREATE_SUBMISSION_REQUEST
    }
}

const createSubmissionSuccess = submission => {
    return {
        type: CREATE_SUBMISSION_SUCCESS,
        payload: submission
    }
}

const createSubmissionFailure = error => {
    return {
        type: CREATE_SUBMISSION_FAILURE,
        payload: error
    }
}

const createSubmission = (lesson, token) => {
    return dispatch => {
        dispatch(createSubmissionRequest());
        axios({
            method: `post`,
            url: `${BASE_URL}/submissions`,
            headers: {
                Authorization: `Bearer ${token}`
            },
            data: lesson
        }).then(response => {
            const {data} = response.data;
            dispatch(createSubmissionSuccess(data));
        }).catch(error => {
            dispatch(createSubmissionFailure(error.response.data.error));
        })
    }
}


const getSubmissionsRequest = () => {
    return {
        type: GET_SUBMISSIONS_REQUEST
    }
}

const getSubmissionsSuccess = submissions => {
    return {
        type: GET_SUBMISSIONS_SUCCESS,
        payload: submissions
    }
}

const getSubmissionsFailure = error => {
    return {
        type: GET_SUBMISSIONS_FAILURE,
        payload: error
    }
}

const getSubmissions = () => {
    return dispatch => {
        dispatch(getSubmissionsRequest());
        axios({
            method: `get`,
            url: `${BASE_URL}/submissions`
        }).then(response => {
            const {data: lessons} = response.data;
            dispatch(getSubmissionsSuccess(lessons));
        }).catch(error => {
            dispatch(getSubmissionsFailure(error.response.data.error));
        })
    }
}


const getSubmissionRequest = () => {
    return {
        type: GET_SUBMISSION_REQUEST
    }
}

const getSubmissionSuccess = submission => {
    return {
        type: GET_SUBMISSION_SUCCESS,
        payload: submission
    }
}

const getSubmissionFailure = error => {
    return {
        type: GET_SUBMISSION_FAILURE,
        payload: error
    }
}

const getSubmission = (submissionID) => {
    return dispatch => {
        dispatch(getSubmissionRequest());
        axios({
            method: `get`,
            url: `${BASE_URL}/submissions/${submissionID}`
        }).then(response => {
            const {data: course} = response.data;
            dispatch(getSubmissionSuccess(course));
        }).catch(error => {
            dispatch(getSubmissionFailure(error.response.data.error));
        })
    }
}


const updateSubmissionRequest = () => {
    return {
        type: UPDATE_SUBMISSION_REQUEST
    }
}

const updateSubmissionSuccess = (course) => {
    return {
        type: UPDATE_SUBMISSION_SUCCESS,
        payload: course
    }
}

const updateSubmissionFailure = error => {
    return {
        type: UPDATE_SUBMISSION_FAILURE,
        payload: error
    }
}

const updateSubmission = (submissionID, submission, token) => {
    return dispatch => {
        dispatch(updateSubmissionRequest());
        axios({
            method: `put`,
            url: `${BASE_URL}/submissions/${submissionID}`,
            headers: {
                Authorization: `Bearer ${token}`
            },
            data: submission
        }).then(response => {
            const {data} = response.data;
            dispatch(updateSubmissionSuccess(data));
        }).catch(error => {
            dispatch(updateSubmissionFailure(error.response.data.error));
        })
    }
}


const deleteSubmissionRequest = () => {
    return {
        type: DELETE_SUBMISSION_REQUEST
    }
}

const deleteSubmissionSuccess = lesson => {
    return {
        type: DELETE_SUBMISSION_SUCCESS,
        payload: lesson
    }
}

const deleteSubmissionFailure = error => {
    return {
        type: DELETE_SUBMISSION_FAILURE,
        payload: error
    }
}

const deleteSubmission = (lessonID, token) => {
    return dispatch => {
        dispatch(deleteSubmissionRequest());
        axios({
            method: `delete`,
            url: `${BASE_URL}/lessons/${lessonID}`,
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(response => {
            const {data} = response.data;
            dispatch(deleteSubmissionSuccess(data));
        }).catch(error => {
            dispatch(deleteSubmissionFailure(error.response.data.error));
        })
    }
}

