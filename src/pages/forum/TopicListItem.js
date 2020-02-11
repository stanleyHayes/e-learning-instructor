import React from "react";
import {Avatar, List} from "rsuite";

function TopicListItem(props) {

    function handleClick() {
        props.handleSelectedTopic(props.topic);
    }

    const styles = {
        owner:{
            fontSize: "16px",
            fontFamily: "cursive"
        },
        course: {
            fontSize: "20px",
            fontFamily: "cursive",
            fontWeight: "bold"
        },
        date: {
            fontSize: "12px",
            fontFamily: "cursive"
        },
        comments: {
            fontSize: "16px",
            fontFamily: "cursive",
            fontWeight: "bold"
        },
        topic: {
            fontSize: "16px",
            fontFamily: "cursive"
        }
    };
    return (
        <List.Item onClick={handleClick}>
            <div className="d-flex justify-content-start">
                <Avatar
                    src={(props.topic.owner.image) ? process.env.PUBLIC_URL + "/defaultprofile.png" : props.topic.owner.image}
                    circle={true} size="lg"/>
                <div className="px-5">
                    <p style={styles.owner}>{props.topic.owner.name}</p>
                    <p style={styles.date} className="my-0">{new Date(props.topic.date_created).toDateString()}</p>
                    <p style={styles.course} className="my-0">{props.topic.course.name}</p>
                    <p style={styles.comments}>{props.topic.comments.length} Comments</p>
                </div>
            </div>
            <p style={styles.topic} className="mt-3">{props.topic.topic}</p>
        </List.Item>
    )
}

export default TopicListItem;
