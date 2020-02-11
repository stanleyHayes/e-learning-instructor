import React from "react";
import {Button, Panel} from "rsuite";
import {Form} from "react-bootstrap";

function CreateReviewItem(props) {
    return (
        <Panel className="bg-white rounded-pill shadow-sm">
            <Form>
                <Form.Group>
                    <Form.Label>Subject</Form.Label>
                    <Form.Control
                        name="subject"
                        className="rounded-pill"
                        type="text"
                        placeholder="Type subject"
                    />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                        name="message"
                        className="rounded"
                        type="text"
                        placeholder="Type Message"
                        as="textarea"
                        rows={4}
                    />
                </Form.Group>

                <Form.Group>
                    <Button className="rounded-pill" color="blue">
                        Add Message
                    </Button>
                </Form.Group>
            </Form>
        </Panel>
    )
}

export default CreateReviewItem;
