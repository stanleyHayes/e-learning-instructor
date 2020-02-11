import React from "react";
import {Avatar, List} from "rsuite";

function CommentListItem(props) {

    const styles = {
        owner: {
            fontSize: "16px",
            fontFamily: "cursive"
        },

        date: {
            fontSize: "12px",
            fontFamily: "cursive"
        },

        comment: {
            fontSize: "16px",
            fontFamily: "cursive"
        }
    };

    return (
        <List.Item>
            <div className="d-flex justify-content-start">
                <Avatar
                    src={(props.comment.owner.image) ? process.env.PUBLIC_URL + "/defaultprofile.png" : props.comment.owner.image}
                    circle={true} size="md"/>
                <div className="px-5">
                    <p style={styles.owner}>{props.comment.owner.name}</p>
                    <p style={styles.date} className="my-0">{new Date(props.comment.date_created).toDateString()}</p>
                </div>
            </div>
            <p style={styles.comment} className="mt-3">{props.comment.comment}</p>
        </List.Item>
    )
}

export default CommentListItem;
