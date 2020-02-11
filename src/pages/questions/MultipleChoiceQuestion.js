import React from "react";
import {Button, Divider, List, Panel} from "rsuite";

function MultipleChoiceQuestion(props) {

    const styles = {
        course: {
            fontSize: "24px",
            fontFamily: "cursive",
            color: "blue"
        },
        question: {
            fontSize: "16px",
            fontWeight: "bold",
            fontFamily: "cursive"
        },
        answer: {
            fontSize: "24px",
            fontFamily: "cursive",
            fontWeight: "bold",
        },
        marks: {
            fontSize: "16px",
            fontFamily: "cursive",
            fontWeight: "normal",
        },
        option: {
            fontSize: "16px",
            fontFamily: "cursive",
            fontWeight: "normal",
        }
    };

    return (
        <Panel bordered={true} style={{backgroundColor: "white", borderRadius: "24px"}} className="shadow-sm">
            <p style={styles.course}>{props.question.course.name}</p>
            <Divider>Question</Divider>
            <p style={styles.question}>{props.question.question}</p>
            <Divider>Answer</Divider>
            <p style={styles.answer}>{props.question.answer}</p>
            <Divider>Marks</Divider>
            <p style={styles.marks}>{props.question.marks} {(props.question.marks > 1) ? "Marks" : "Mark"}</p>
            <Divider>Options</Divider>
            <List bordered={true} hover={true} size="md">
                {
                    props.question.options.map(function (option) {
                        return (
                            <List.Item>
                                <p style={styles.option}>{option}</p>
                            </List.Item>
                        )
                    })
                }
            </List>
            <Button block={true} color="red" className="my-3 rounded-pill">
                Delete Question
            </Button>
        </Panel>
    )
}

export default MultipleChoiceQuestion;
