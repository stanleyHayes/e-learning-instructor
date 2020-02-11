import React from "react";
import {Panel} from "rsuite";
import {Card} from "react-bootstrap";

function CourseListItem(props) {

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
        currency: {
            fontSize: "16px",
            fontFamily: "Geneva",
            fontWeight: "normal",
        },
        registered: {
            fontSize: "16px",
            fontFamily: "Helvetica",
            fontWeight: "bold",
        }
    };
    return (
        <Panel style={{backgroundColor: "white", borderRadius: "24px"}} className="shadow-sm">
            <Card.Img src={props.course.image}/>
            <Card.Body>
                <p style={styles.name}>{props.course.name}</p>
                <p style={styles.status}>{props.course.status}</p>
                <p style={styles.amount}>{props.course.price.amount} <span style={styles.currency}>{props.course.price.currency}</span></p>
                <p style={styles.registered}>{props.course.students.length} registered students</p>
            </Card.Body>
        </Panel>
    )
}

export default CourseListItem;
