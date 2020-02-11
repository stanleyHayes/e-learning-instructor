import React, {useState} from "react";
import Layout from "../../components/layout/Layout";
import {Col, Divider, Grid, Panel, Row} from "rsuite";
import {Form} from "react-bootstrap";
import MultipleChoiceQuestionForm from "./MultipleChoiceQuestionForm";
import WrittenQuestionForm from "./WrittenQuestionForm";

function CreateQuestionPage(props) {

    const [userID, setUserID] = useState(localStorage.getItem("user_id") || null);
    const [token, setToken] = useState(localStorage.getItem("token") || null);
    const [questionTypeForm, setQuestionTypeForm] = useState("MCQ");

    function handleQuestionTypeFormChange(event) {
        setQuestionTypeForm(event.target.value)
    }


    return (
        <Layout>
            <Grid fluid={true}>
                <Row>
                    <Col xs={24} sm={24} md={16} lg={16} mdOffset={4} lgOffset={4}>
                        <Panel bordered={true} className="shadow-sm" style={{backgroundColor: "white", borderRadius: "24px"}}>
                            <Form>
                                <Form.Group>
                                    <Form.Label>Question Type</Form.Label>
                                    <Form.Control
                                        as="select"
                                        onChange={handleQuestionTypeFormChange}
                                        value={questionTypeForm}
                                        className="rounded-pill">

                                        <option value="MCQ">Multiple Choice Question</option>
                                        <option value="written">Written</option>

                                    </Form.Control>
                                </Form.Group>
                            </Form>
                        </Panel>

                        <Divider>Add Question</Divider>
                        {
                            (questionTypeForm === "MCQ") ? (
                                <MultipleChoiceQuestionForm/>
                            ) : (
                                <WrittenQuestionForm/>
                            )
                        }
                    </Col>
                </Row>
            </Grid>
        </Layout>
    )
}

export default CreateQuestionPage;
