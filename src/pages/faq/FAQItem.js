import React from "react";
import {Button, ButtonGroup, Divider, Panel} from "rsuite";

function FAQItem(props) {
    return (
        <Panel bordered={true} className="mb-4 mx-2 shadow-sm" style={{ borderRadius: "24px", backgroundColor: "white"}}>
            <small>Question</small>
            <h5>{props.FAQ.question}</h5>
            <Divider>Answer</Divider>
            <h4>{props.FAQ.answer}</h4>
            <Divider/>
            <ButtonGroup block={true}>
                <Button>Delete</Button>
                <Button>Edit</Button>
            </ButtonGroup>
        </Panel>
    )
}

export default FAQItem;