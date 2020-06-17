import {
    GET_TOPICS_FAILURE,
    GET_TOPICS_SUCCESS,
    GET_TOPICS_REQUEST,
    CREATE_TOPIC_FAILURE,
    CREATE_TOPIC_REQUEST,
    CREATE_TOPIC_SUCCESS,
    DELETE_TOPIC_FAILURE,
    DELETE_TOPIC_REQUEST,
    DELETE_TOPIC_SUCCESS,
    GET_TOPIC_FAILURE,
    GET_TOPIC_REQUEST,
    GET_TOPIC_SUCCESS,
    UPDATE_TOPIC_FAILURE,
    UPDATE_TOPIC_REQUEST,
    UPDATE_TOPIC_SUCCESS
} from "./topics-types";

import axios from "axios";

import {BASE_URL} from "../../utils/constants";

const createTopicRequest = () => {
    return {
        type: CREATE_TOPIC_REQUEST
    }
}

const createTopicSuccess = topic => {
    return {
        type: CREATE_TOPIC_SUCCESS,
        payload: topic
    }
}

const createTopicFailure = error => {
    return {
        type: CREATE_TOPIC_FAILURE,
        payload: error
    }
}

const createTopic = (topic, token) => {
    return dispatch => {
        dispatch(createTopicRequest());
        axios({
            method: `post`,
            url: `${BASE_URL}/topics`,
            headers: {
                Authorization: `Bearer ${token}`
            },
            data: topic
        }).then(response => {
            const {data} = response.data;
            dispatch(createTopicSuccess(data));
        }).catch(error => {
            dispatch(createTopicFailure(error.response.data.error));
        })
    }
}


const getTopicsRequest = () => {
    return {
        type: GET_TOPICS_REQUEST
    }
}

const getTopicsSuccess = topics => {
    return {
        type: GET_TOPICS_SUCCESS,
        payload: topics
    }
}

const getTopicsFailure = error => {
    return {
        type: GET_TOPICS_FAILURE,
        payload: error
    }
}

const getTopics = () => {
    return dispatch => {
        dispatch(getTopicsRequest());
        axios({
            method: `get`,
            url: `${BASE_URL}/topics`
        }).then(response => {
            const {data} = response.data;
            dispatch(getTopicsSuccess(data));
        }).catch(error => {
            dispatch(getTopicsFailure(error.response.data.error));
        })
    }
}


const getTopicRequest = () => {
    return {
        type: GET_TOPIC_REQUEST
    }
}

const getTopicSuccess = topic => {
    return {
        type: GET_TOPIC_SUCCESS,
        payload: topic
    }
}

const getTopicFailure = error => {
    return {
        type: GET_TOPIC_FAILURE,
        payload: error
    }
}

const getTopic = (topicID) => {
    return dispatch => {
        dispatch(getTopicRequest());
        axios({
            method: `get`,
            url: `${BASE_URL}/topics/${topicID}`
        }).then(response => {
            const {data} = response.data;
            dispatch(getTopicSuccess(data));
        }).catch(error => {
            dispatch(getTopicFailure(error.response.data.error));
        })
    }
}


const updateTopicRequest = () => {
    return {
        type: UPDATE_TOPIC_REQUEST
    }
}

const updateTopicSuccess = (topic) => {
    return {
        type: UPDATE_TOPIC_SUCCESS,
        payload: topic
    }
}

const updateTopicFailure = error => {
    return {
        type: UPDATE_TOPIC_FAILURE,
        payload: error
    }
}

const updateTopic = (topicID, topic, token) => {
    return dispatch => {
        dispatch(updateTopicRequest());
        axios({
            method: `put`,
            url: `${BASE_URL}/topics/${topicID}`,
            headers: {
                Authorization: `Bearer ${token}`
            },
            data: topic
        }).then(response => {
            const {data} = response.data;
            dispatch(updateTopicSuccess(data));
        }).catch(error => {
            dispatch(updateTopicFailure(error.response.data.error));
        })
    }
}


const deleteTopicRequest = () => {
    return {
        type: DELETE_TOPIC_REQUEST
    }
}

const deleteTopicSuccess = topic => {
    return {
        type: DELETE_TOPIC_FAILURE,
        payload: topic
    }
}

const deleteTopicFailure = error => {
    return {
        type: DELETE_TOPIC_SUCCESS,
        payload: error
    }
}

const deleteTopic = (topicID, token) => {
    return dispatch => {
        dispatch(deleteTopicRequest());
        axios({
            method: `delete`,
            url: `${BASE_URL}/topics/${topicID}`,
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(response => {
            const {data} = response.data;
            dispatch(deleteTopicSuccess(data));
        }).catch(error => {
            dispatch(deleteTopicFailure(error.response.data.error));
        })
    }
}

