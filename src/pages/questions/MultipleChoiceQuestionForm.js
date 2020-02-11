import React, {useState} from "react";
import {Button, Divider, List, Panel} from "rsuite";
import {Col, Form} from "react-bootstrap";
import QuestionOptionItem from "./QuestionOptionItem";

function MultipleChoiceQuestionForm(props) {

    const [question, setQuestion] = useState({});
    const [loading, setLoading] = useState(false);
    const [options, setOptions] = useState([]);
    const [option, setOption] = useState("");
    const [answer, setAnswer] = useState(null);

    function handleQuestionChange(event) {
        setQuestion({...question, [event.target.name]: event.target.value})
    }

    function handleQuestionAdd(event) {
        setLoading(true);
        event.preventDefault();

        setLoading(false);
    }

    function handleOptionChange(event) {
        setOption(event.target.value);
    }

    function handleOptionAdd() {
        setOptions([...options, option]);
    }

    function handleOptionRemove(option) {
        setOptions(options.filter(function (item) {
                return option !== item
            })
        )
    }

    function handleAnswerAdd(option) {
        setAnswer(option);
    }

    return (
        <Panel bordered={true} style={{backgroundColor: "white", borderRadius: "24px"}}>
            <Form>
                <Form.Group>
                    <Form.Label>Question</Form.Label>
                    <Form.Control
                        as="textarea"
                        placeholder="Type Question here"
                        rows={2}
                        className="rounded-pill"
                        name="question"
                        onChange={handleQuestionChange}
                    />
                </Form.Group>

                <Form.Group>

                    <Form.Label>Add Option</Form.Label>

                    <Form.Row>
                        <Col xs={12} sm={12} md={8} lg={8} xl={8}>
                            <Form.Control
                                as="textarea"
                                placeholder="Type Option here"
                                rows={1}
                                className="rounded-pill"
                                name="option"
                                onChange={handleOptionChange}
                            />
                        </Col>

                        <Col xs={12} sm={12} md={4} lg={4} xl={4}>
                            <Button
                                onClick={handleOptionAdd}
                                loading={loading}
                                disabled={loading}
                                block={true}
                                className="rounded-pill"
                                appearance="primary">
                                {loading ? "Adding Option" : "Add Option"}
                            </Button>
                        </Col>
                    </Form.Row>

                    <Divider>Added Options</Divider>

                    <List bordered={true} size="md" hover={true}>
                        {
                            (options.length === 0) ? (
                                <List.Item>
                                    <p
                                        className="text-center py-5"
                                        style={{
                                            backgroundColor: "whitesmoke"
                                        }}>
                                        No options added
                                    </p>
                                </List.Item>
                            ) : (
                                options.map(function (option, index) {
                                    return (
                                        <QuestionOptionItem
                                            key={index}
                                            option={option}
                                            handleOptionRemove={handleOptionRemove}
                                        />
                                    )
                                })
                            )
                        }
                    </List>

                </Form.Group>

                <Divider>Answer</Divider>

                <Form.Group>
                    <p className="py-5 text-center" style={{fontSize: "20px", fontFamily: "cursive"}}>
                        {(!answer) ? "No answer selected" : answer}
                    </p>

                    <Divider>Options</Divider>

                    <List bordered={true} size="md" hover={true}>
                        {
                            (options.length === 0) ? (
                                <List.Item>
                                    <p
                                        className="text-center py-5"
                                        style={{
                                            backgroundColor: "whitesmoke"
                                        }}>
                                        No options to select from
                                    </p>
                                </List.Item>
                            ) : (
                                options.map(function (option, index) {
                                    return (
                                        <List.Item key={index} onClick={() => handleAnswerAdd(option)}>
                                            {option}
                                        </List.Item>
                                    )
                                })
                            )
                        }
                    </List>

                </Form.Group>

                <Form.Group>
                    <Button
                        onClick={handleQuestionAdd}
                        loading={loading}
                        disabled={loading}
                        block={true}
                        className="rounded-pill"
                        appearance="primary">
                        {loading ? "Adding Question" : "Add Question"}
                    </Button>
                </Form.Group>
            </Form>
        </Panel>
    )
}

export default MultipleChoiceQuestionForm;
