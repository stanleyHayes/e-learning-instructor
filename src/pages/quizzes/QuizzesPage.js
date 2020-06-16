import React, {useState} from "react";
import Layout from "../../components/layout/Layout";
import {Col, Grid, Icon, IconButton, Row} from "rsuite";
import {Link} from "react-router-dom";
import QuizListItem from "./QuizListItem";

function QuizzesPage(props) {

    const _quiz = {
        course: {
            name: "Programming in C",
            code: "COE252",
            image: `${process.env.PUBLIC_URL}/cprogrammingcover.jpg`
        },
        status: "Yet to Start",
        start_date: "08-09-2020",
        duration: {
            amount: 120,
            unit: "minutes"
        }
    };

    const [quizzes, setQuizzes] = useState([_quiz, _quiz, _quiz, _quiz, _quiz, _quiz, _quiz]);

    return (
        <Layout>
            <div className="py-5" style={{backgroundColor: "#ddd"}}>
                <Grid fluid={false}>
                    <Row>
                        <Col xs={24} sm={24} md={24} lg={24} className="mb-5">
                            <IconButton icon={<Icon icon="plus"/>} placement="left" size="lg" color="red" block={false}>
                                <Link to="/new/quiz" className="text-white">
                                    Add Quiz
                                </Link>
                            </IconButton>
                        </Col>
                    </Row>

                    <Row>
                        {
                            (quizzes.length === 0) ? (
                                <Col style={{minHeight: " 60vh"}}
                                     className="d-flex justify-content-center align-items-center">
                                    <h5>No Quizzes available</h5>
                                </Col>
                            ) : (


                                quizzes.map(function (quiz, index) {
                                    return (
                                        <Col key={index} xs={24} sm={24} md={8} lg={8} className="mb-3">
                                            <QuizListItem quiz={quiz}/>
                                        </Col>
                                    )
                                })


                            )
                        }
                    </Row>
                </Grid>
            </div>
        </Layout>
    )
}

export default QuizzesPage;
