import {
    CREATE_CLASS_FAILURE,
    CREATE_CLASS_REQUEST,
    CREATE_CLASS_SUCCESS,
    DELETE_CLASS_FAILURE,
    DELETE_CLASS_REQUEST,
    DELETE_CLASS_SUCCESS,
    GET_CLASS_FAILURE,
    GET_CLASS_REQUEST,
    GET_CLASS_SUCCESS,
    GET_CLASSES_FAILURE,
    GET_CLASSES_REQUEST,
    GET_CLASSES_SUCCESS,
    JOIN_CLASS_FAILURE,
    JOIN_CLASS_REQUEST,
    JOIN_CLASS_SUCCESS,
    LEAVE_CLASS_FAILURE,
    LEAVE_CLASS_REQUEST,
    LEAVE_CLASS_SUCCESS,
    UPDATE_CLASS_FAILURE,
    UPDATE_CLASS_REQUEST,
    UPDATE_CLASS_SUCCESS
} from "./classes-types";

import axios from "axios";

import {BASE_URL} from "../../utils/constants";


const createClassRequest = () => {
    return {
        type: CREATE_CLASS_REQUEST
    }
}

const createClassSuccess = courseClass => {
    return {
        type: CREATE_CLASS_SUCCESS,
        payload: courseClass
    }
}

const createClassFailure = error => {
    return {
        type: CREATE_CLASS_FAILURE,
        payload: error
    }
}

const createClass = (courseClass, token) => {
    return dispatch => {
        dispatch(createClassRequest());
        axios({
            method: `post`,
            url: `${BASE_URL}/classes`,
            headers: {
                Authorization: `Bearer ${token}`
            },
            data: courseClass
        }).then(response => {
            const {data} = response.data;
            dispatch(createClassSuccess(data));
        }).catch(error => {
            dispatch(createClassFailure(error.response.data.error));
        })
    }
}



const getClassesRequest = () => {
    return {
        type: GET_CLASSES_REQUEST
    }
}

const getClassesSuccess = classes => {
    return {
        type: GET_CLASSES_SUCCESS,
        payload: classes
    }
}

const getClassesFailure = error => {
    return {
        type: GET_CLASSES_FAILURE,
        payload: error
    }
}

const getClasses = () => {
    return dispatch => {
        dispatch(getClassesRequest());
        axios({
            method: `get`,
            url: `${BASE_URL}/classes`
        }).then(response => {
            const {data: classes} = response.data;
            dispatch(getClassesSuccess(classes));
        }).catch(error => {
            dispatch(getClassesFailure(error.response.data.error));
        })
    }
}



const getClassRequest = () => {
    return {
        type: GET_CLASS_REQUEST
    }
}

const getClassSuccess = course => {
    return {
        type: GET_CLASS_SUCCESS,
        payload: course
    }
}

const getClassFailure = error => {
    return {
        type: GET_CLASS_FAILURE,
        payload: error
    }
}

const getClass = (classID) => {
    return dispatch => {
        dispatch(getClassRequest());
        axios({
            method: `get`,
            url: `${BASE_URL}/classes/${classID}`
        }).then(response => {
            const {data} = response.data;
            dispatch(getClassSuccess(data));
        }).catch(error => {
            dispatch(getClassFailure(error.response.data.error));
        })
    }
}



const updateClassRequest = () => {
    return {
        type: UPDATE_CLASS_REQUEST
    }
}

const updateClassSuccess = (courseClass) => {
    return {
        type: UPDATE_CLASS_SUCCESS,
        payload: courseClass
    }
}

const updateClassFailure = error => {
    return {
        type: UPDATE_CLASS_FAILURE,
        payload: error
    }
}

const updateClass = (classID, courseClass, token) => {
    return dispatch => {
        dispatch(updateClassRequest());
        axios({
            method: `put`,
            url: `${BASE_URL}/classes/${classID}`,
            headers: {
                Authorization: `Bearer ${token}`
            },
            data: courseClass
        }).then(response => {
            const {data} = response.data;
            dispatch(updateClassSuccess(data));
        }).catch(error => {
            dispatch(updateClassFailure(error.response.data.error));
        })
    }
}



const deleteCourseRequest = () => {
    return {
        type: DELETE_CLASS_REQUEST
    }
}

const deleteClassSuccess = courseClass => {
    return {
        type: DELETE_CLASS_SUCCESS,
        payload: courseClass
    }
}

const deleteClassFailure = error => {
    return {
        type: DELETE_CLASS_FAILURE,
        payload: error
    }
}

const deleteClass = (classID, token) => {
    return dispatch => {
        dispatch(deleteCourseRequest());
        axios({
            method: `post`,
            url: `${BASE_URL}/courses/${classID}`,
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(response => {
            const {data} = response.data;
            dispatch(deleteClassSuccess(data));
        }).catch(error => {
            dispatch(deleteClassFailure(error.response.data.error));
        })
    }
}



const leaveClassRequest = () => {
    return {
        type: LEAVE_CLASS_REQUEST
    }
}

const leaveClassSuccess = (courseClass) => {
    return {
        type: LEAVE_CLASS_SUCCESS,
        payload: courseClass
    }
}

const leaveClassFailure = error => {
    return {
        type: LEAVE_CLASS_FAILURE,
        payload: error
    }
}

const leaveClass = (classID, token) => {
    return dispatch => {
        dispatch(leaveClassRequest());
        axios({
            method: `put`,
            url: `${BASE_URL}/classes/${classID}/leave`,
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(response => {
            const {data} = response.data;
            dispatch(leaveClassSuccess(data));
        }).catch(error => {
            dispatch(leaveClassFailure(error.response.data.error));
        })
    }
}



const joinClassRequest = () => {
    return {
        type: JOIN_CLASS_REQUEST
    }
}

const joinClassSuccess = courseClass => {
    return {
        type: JOIN_CLASS_SUCCESS,
        payload: courseClass
    }
}

const joinClassFailure = error => {
    return {
        type: JOIN_CLASS_FAILURE,
        payload: error
    }
}

const joinClass = (classID, token) => {
    return dispatch => {
        dispatch(joinClassRequest());
        axios({
            method: `put`,
            url: `${BASE_URL}/classes/${classID}`,
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(response => {
            const {data} = response.data;
            dispatch(joinClassSuccess(data));
        }).catch(error => {
            dispatch(joinClassFailure(error.response.data.error));
        })
    }
}
