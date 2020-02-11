import React, {useState} from "react";
import Layout from "../../components/layout/Layout";
import {Col, Grid, Icon, IconButton, List, Row} from "rsuite";
import TopicListItem from "./TopicListItem";
import TopicDetailPage from "./TopicDetailPage";
import {Link} from "react-router-dom";

function TopicsPage(props) {

    const _topic = {
        owner: {
            name: "Zeus Jupiter Ra",
            image: `${process.env.PUBLIC_URL}/default_profile.png`
        },
        forum: "",
        course: {
            name: "Object-Oriented Programming in Java"
        },
        date_created: "08-29-2020",
        title: "Quiz inaccessible",
        topic: "I have been trying to access the quiz but it gives me an error whenever I try",
        comments: [
            {
                owner: {
                    name: "Zeus Jupiter Ra",
                    image: `${process.env.PUBLIC_URL}/default_profile.png`
                },
                date_created: "08-29-2020",
                comment: "I have been trying to access the quiz but it gives me an error whenever I try",
            },
            {
                owner: {
                    name: "Stanley Hayford",
                    image: `${process.env.PUBLIC_URL}/default_profile.png`
                },
                date_created: "08-30-2020",
                comment: "Logout and login again. It worked for me",
            },
            {
                owner: {
                    name: "Emmanuella Sangmuah",
                    image: `${process.env.PUBLIC_URL}/default_profile.png`
                },
                date_created: "08-29-2020",
                comment: "I am facing the same issue. I am facing the same issue. I am facing the same issue. I am facing the same issue.",
            }
        ]
    };

    const [topics, setTopics] = useState([_topic, _topic]);
    const [selectedTopic, setSelectedTopic] = useState(null);

    function handleSelectedTopic(topic) {
        setSelectedTopic(topic)
    }

    return (
        <Layout>
            <Grid fluid={false}>
                <Row>
                    <Col xs={24} sm={24} md={24} lg={24} className="mb-5">
                        <IconButton icon={<Icon icon="plus"/>} placement="left" size="lg" color="red" block={false}>
                            <Link to="/new/topic" className="text-white">
                                Add Topic
                            </Link>
                        </IconButton>
                    </Col>
                    <Col xs={24} sm={24} md={14} lg={14}>

                        <Row>
                            {
                                (topics.length === 0) ? (
                                    <Col style={{
                                        backgroundColor: "whitesmoke",
                                        minHeight: "90vh"
                                    }} xs={24}
                                         className="d-flex flex-column justify-content-center align-items-center flex-grow-1">
                                        <h5>No topics available</h5>
                                    </Col>
                                ) : (
                                    <Col>
                                        <List hover={true} bordered={true}>
                                            {
                                                topics.map(function (topic, index) {
                                                    return (
                                                        <TopicListItem
                                                            key={index}
                                                            handleSelectedTopic={handleSelectedTopic}
                                                            topic={topic}
                                                        />
                                                    )
                                                })
                                            }
                                        </List>
                                    </Col>
                                )
                            }
                        </Row>
                    </Col>

                    <Col xs={24} sm={24} md={10} lg={10}>
                        {
                            (topics.length > 0 && selectedTopic) ? (
                                <TopicDetailPage topic={selectedTopic}/>
                            ) : (
                                <div style={{
                                    backgroundColor: "whitesmoke",
                                    minHeight: "90vh"
                                }} className="d-flex flex-column justify-content-center align-items-center flex-grow-1">
                                    <h6>No topic Selected</h6>
                                </div>
                            )
                        }
                    </Col>
                </Row>
            </Grid>
        </Layout>
    )
}

export default TopicsPage;
