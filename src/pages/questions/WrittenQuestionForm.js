import React, {useState} from "react";
import {Button, Panel} from "rsuite";
import {Form} from "react-bootstrap";

function WrittenQuestionForm(props) {

    const [question, setQuestion] = useState({});
    const [loading, setLoading] = useState(false);

    function handleQuestionChange(event) {
        setQuestion({...question, [event.target.name]: event.target.value})
    }

    function handleQuestionAdd(event) {
        event.preventDefault();

    }

    return (
        <Panel bordered={true} className="shadow-sm" style={{backgroundColor: "white", borderRadius: "24px"}}>
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

                    <Form.Label>Answer</Form.Label>
                    <Form.Control
                        as="textarea"
                        placeholder="Type Answer here"
                        rows={2}
                        className="rounded-pill"
                        name="answer"
                        onChange={handleQuestionChange}
                    />

                </Form.Group>

                <Form.Group>

                    <Form.Label>Maximum Mark</Form.Label>
                    <Form.Control
                        type="number"
                        placeholder="Type Answer here"
                        name="marks"
                        className="rounded-pill"
                        onChange={handleQuestionChange}
                    />

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

export default WrittenQuestionForm;
