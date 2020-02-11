import React, {useEffect, useState} from "react";
import Layout from "../../components/layout/Layout";
import {Col, Divider, Grid, Icon, IconButton, Row} from "rsuite";
import axios from "axios";
import WrittenQuestion from "./WrittenQuestion";
import MultipleChoiceQuestion from "./MultipleChoiceQuestion";
import {Link} from "react-router-dom";

function QuestionsPage(props) {

    const MCQquestion = {
        question: "Which of the following is not a valid variable name?",
        options: ["hello", "hello_1", "hello1", "hello 1"],
        course: {
            name: "Programming in C",
            course_code: "COE211"
        },
        answer: "hello 1",
        marks: 1,
        type: "MCQ"
    };

    const writtenQuestion = {
        question: "What is a variable?",
        course: {
            name: "Programming in C",
            course_code: "COE211"
        },
        answer: "A variable is defined as a named space in memory. A variable is used to store data. A variable has a name, value, a type and an address.",
        marks: 5,
        type: "written"
    };

    const [userID, setUserID] = useState(localStorage.getItem("user_id") || null);
    const [token, setToken] = useState(localStorage.getItem("token") || null);
    const [MCQs, setMCQs] = useState([MCQquestion, MCQquestion, MCQquestion, MCQquestion, MCQquestion]);
    const [writtenQuestions, setWrittenQuestions] = useState([writtenQuestion, writtenQuestion, writtenQuestion]);

    useEffect(function () {
        axios({
            method: "get",
            url: `http://localhost:5000/api/v1/questions?type=MCQ&owner=${userID}`,
            headers: {Authorization: `Bearer ${token}`}
        }).then(function (response) {
            console.log(response.data.questions);
            setMCQs(response.data.questions);
        }).catch(function (error) {
            console.log(error);
        });
    });

    useEffect(function () {
        axios({
            method: "get",
            url: `http://localhost:5000/api/v1/questions?type=written&owner=${userID}`,
            headers: {Authorization: `Bearer ${token}`}
        }).then(function (response) {
            console.log(response.data.questions);
            setWrittenQuestions(response.data.questions);
        }).catch(function (error) {
            console.log(error);
        });
    });


    return (
        <Layout>
            <Grid fluid={false}>
                <Row>
                    <Col xs={24} sm={24} md={24} lg={24} className="mb-3">
                        <IconButton icon={<Icon icon="plus"/>} placement="left" size="lg" color="red" block={false}>
                            <Link to="/new/question" className="text-white">
                                Add Question
                            </Link>
                        </IconButton>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={24} className="mb-5">
                        <h2 className="text-center">Written Choice Questions</h2>
                    </Col>
                    {
                        (MCQs.length === 0) ? (
                            <Col
                                xs={24} sm={24} md={24} lg={24}
                                style={{
                                    display: "flex",
                                    minHeight: "50vh",
                                    justifyContent: "center",
                                    alignItems: "center"
                                }}>
                                <h5>No Questions Available</h5>
                            </Col>
                        ) : (
                            MCQs.map(function (question) {
                                return (
                                    <Col xs={24} md={12} lg={8} className="mb-4">
                                        <MultipleChoiceQuestion question={question}/>
                                    </Col>
                                )
                            })
                        )
                    }
                </Row>

                <Divider/>

                <Row>
                    <Col xs={24} className="mb-5">
                        <h2 className="text-center">Multiple Choice Questions</h2>
                    </Col>
                    {
                        (writtenQuestions.length === 0) ? (
                            <Col
                                xs={24} sm={24} md={24} lg={24}
                                style={{
                                    display: "flex",
                                    minHeight: "50vh",
                                    justifyContent: "center",
                                    alignItems: "center"
                                }}>
                                <h5>No Questions Available</h5>
                            </Col>
                        ) : (
                            writtenQuestions.map(function (question) {
                                return (
                                    <Col xs={24} md={12} lg={8} className="mb-4">
                                        <WrittenQuestion question={question}/>
                                    </Col>
                                )
                            })
                        )
                    }
                </Row>
            </Grid>
        </Layout>
    )
}

export default QuestionsPage;
