import React from "react";
import {Col, Form, Icon, List} from "rsuite";

function QuestionOptionItem(props) {

    function handleRemoveOptionSelected() {
        props.handleOptionRemove(props.option)
    }

    return (
        <List.Item onClick={handleRemoveOptionSelected}>
            <Form fluid={true}>
                <Col xs={20}>
                    {props.option}
                </Col>
                <Col xs={4}>
                    <Icon icon="trash" size="2x"/>
                </Col>
            </Form>
        </List.Item>
    )
}

export default QuestionOptionItem;
