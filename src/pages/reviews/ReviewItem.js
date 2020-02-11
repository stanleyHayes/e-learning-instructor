import React from "react";
import {Avatar, Panel} from "rsuite";

function ReviewItem(props) {

    const styles = {
        rating: {
            fontSize: "24px",
            fontFamily: "cursive",
            fontWeight: "bold",
            color: "gold"
        },
        course: {
            fontSize: "16px",
            fontFamily: "cursive",
            fontWeight: "bold"
        },
        review: {
            fontSize: "24px",
            fontFamily: "cursive",
            fontWeight: "bold"
        },
        owner: {

            fontSize: "16px",
            fontFamily: "cursive",
            fontWeight: "bold"

        }
    };

    return (
        <Panel className="shadow-sm bg-white" style={{borderRadius: "24px"}}>
            <div className="d-flex justify-content-start">
                <Avatar
                    src={(props.review.owner.image) ? process.env.PUBLIC_URL + "/defaultprofile.png" : props.review.owner.image}
                    circle={true} size="lg"/>
                <div className="pl-2">
                    <p style={styles.owner}>{props.review.owner.name}</p>
                    <p className="my-0">{new Date(props.review.date_created).toDateString()}</p>
                    <p style={styles.course}>{props.review.course.name}</p>
                    <p className="font-weight-bolder">
                        <span
                            style={styles.rating}>{props.review.rating}</span> {props.review.rating === 1 ? "Star" : "Stars"}
                    </p>
                </div>
            </div>
            <p style={styles.review} className="my-2">{props.review.review}</p>
        </Panel>
    )
}

export default ReviewItem;
