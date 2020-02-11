import React from "react";
import {Icon, List} from "rsuite";
import {Col, Form} from "react-bootstrap";

function SimpleRemovableItem(props) {

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

export default SimpleRemovableItem;
