import React from "react";
import {Icon, List} from "rsuite";
import {Col, Form} from "react-bootstrap";

function CourseContentOptionItem(props) {

    function handleRemoveOptionSelected() {
        props.handleOptionRemove(props.option)
    }

    return (
        <List.Item onClick={handleRemoveOptionSelected}>
            <Form fluid={true}>
                <Col xs={20}>
                    {props.content.title}
                </Col>
                <Col xs={4}>
                    <Icon icon="trash" size="2x"/>
                </Col>
                <Col xs={24}>
                    {props.content.description}
                </Col>
            </Form>
        </List.Item>
    )
}

export default CourseContentOptionItem;
