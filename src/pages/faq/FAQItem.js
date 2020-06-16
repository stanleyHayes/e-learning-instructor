import React from "react";
import {Button, Col, Divider, Panel} from "rsuite";
import {Form} from "react-bootstrap";

function FAQItem(props) {
    return (
        <Panel bordered={true} className="mb-4 mx-2 shadow-sm" style={{borderRadius: "24px", backgroundColor: "white"}}>
            <small>Question</small>
            <h5>{props.FAQ.question}</h5>
            <Divider>Answer</Divider>
            <h4>{props.FAQ.answer}</h4>
            <Divider/>
            <Form>
                <Form.Row>
                    <Col xs={12} sm={12} md={12} lg={12}>
                        <Button block={true} color="red" className="rounded-pill">Delete</Button>
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={12}>
                        <Button block={true} color="blue" className="rounded-pill">Edit</Button>
                    </Col>
                </Form.Row>
            </Form>


        </Panel>
    )
}

export default FAQItem;
