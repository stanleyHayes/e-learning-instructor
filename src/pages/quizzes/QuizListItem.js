import React from "react";
import {Panel} from "rsuite";
import {Card} from "react-bootstrap";

function QuizListItem(props) {

    const styles = {
        name: {
            fontSize: "32px",
            fontFamily: "cursive",
            fontWeight: "bold",
            color: "blue"
        },
        status: {
            fontSize: "16px",
            fontWeight: "bold",
        },
        amount: {
            fontSize: "32px",
            fontFamily: "san-serif",
            fontWeight: "bold",
        },
        date: {
            fontSize: "16px",
            fontFamily: "Helvetica",
            fontWeight: "bold",
        },
        unit: {
            fontSize: "16px",
            fontFamily: "Helvetica",
            fontWeight: "bold",
        },
        code: {
            fontFamily: "cursive",
            fontWeight: "bold",
            color: "blue"
        }

    };
    return (
        <Panel style={{backgroundColor: "white", borderRadius: "24px"}} className="shadow-sm">
            <Card.Img src={props.quiz.course.image}/>
            <Card.Body>
                <p style={styles.name}>{props.quiz.course.name}</p>
                <p style={styles.code}>{props.quiz.course.code}</p>
                <p style={styles.status}>{props.quiz.status}</p>
                <p style={styles.date}>{new Date(props.quiz.start_date).toDateString()}</p>
                <p style={styles.amount}>{props.quiz.duration.amount} <span
                    style={styles.unit}>{props.quiz.duration.unit}</span></p>
            </Card.Body>
        </Panel>
    )
}

export default QuizListItem;
