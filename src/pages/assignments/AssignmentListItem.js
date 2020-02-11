import React from "react";
import {Divider, Panel} from "rsuite";
import {Card} from "react-bootstrap";

function AssignmentListItem(props) {

    const styles = {
        course: {
            fontSize: "24px",
            fontFamily: "cursive",
            color: "blue"
        },
        questions: {
            fontSize: "16px",
            fontWeight: "bold",
        },
        submission_date: {
            fontSize: "24px",
            fontFamily: "cursive",
            fontWeight: "bold",
        },
        start_date: {
            fontSize: "16px",
            fontFamily: "cursive",
            fontWeight: "normal",
        },
        submissions: {
            fontSize: "16px",
            fontFamily: "cursive",
            fontWeight: "bold",
        }
    };

    return (
        <Panel style={{backgroundColor: "white", borderRadius: "24px"}} className="shadow-sm">
            <Card.Img src={props.assignment.course.image}/>
            <Card.Body>
                <p style={styles.course}>{props.assignment.course.name}</p>
                <p style={styles.questions}>{props.assignment.questions.length} Quesions</p>
                <Divider>Start Date</Divider>
                <p style={styles.start_date}>{new Date(props.assignment.start_date).toDateString()}</p>
                <Divider>Submission Date</Divider>
                <p style={styles.submission_date}>{new Date(props.assignment.submission_date).toDateString()}</p>
                <p style={styles.submissions}>{props.assignment.submissions.length} submitted assignments</p>
            </Card.Body>
        </Panel>
    )
}

export default AssignmentListItem;
