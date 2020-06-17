import React from "react";
import {Panel} from "rsuite";
import {Card} from "react-bootstrap";
import {useHistory, useParams} from "react-router-dom";

function CourseListItem(props) {

    const styles = {
        name: {
            fontSize: "24px",
            fontFamily: "cursive",
            fontWeight: "bold",
            color: "blue",
            cursor: "pointer"
        },
        status: {
            fontSize: "16px",
            fontWeight: "bold",
        },
        amount: {
            fontSize: "32px",
            fontFamily: "cursive",
            fontWeight: "bold",
        },
        currency: {
            fontSize: "16px",
            fontFamily: "cursive",
            fontWeight: "normal",
        },
        registered: {
            fontSize: "16px",
            fontFamily: "cursive",
            fontWeight: "bold",
        }
    };

    const history = useHistory();
    const {courseID} = useParams();

    const handleClick = () => {
        history.push(`/courses/${courseID}`)
    }
    return (
        <Panel
            onClick={handleClick}
            style={{backgroundColor: "white", borderRadius: "24px"}}
            className="shadow-sm">
            <Card.Img style={{height: 200}} src={props.course.image}/>
            <Card.Body>
                <p style={styles.name}>{props.course.name}</p>
                <p style={styles.status}>{props.course.skillLevel}</p>
                <p style={styles.amount}>{props.course.price.amount} <span style={styles.currency}>{props.course.price.currency}</span></p>
            </Card.Body>
        </Panel>
    )
}

export default CourseListItem;
