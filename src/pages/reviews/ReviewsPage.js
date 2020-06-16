import React, {useState} from "react";
import Layout from "../../components/layout/Layout";
import {Col, Grid, Row} from "rsuite";
import ReviewItem from "./ReviewItem";

function ReviewsPage(props) {

    const _review = {
        owner: {
            name: "Zeus Jupiter Ra",
            image: `${process.env.PUBLIC_URL}/default_profile.png`
        },
        course: {
            name: "Programming in C"
        },
        review: "Best course ever taken on this platform and anywhere",
        rating: 5,
        date_created: "08-29-2020"
    };

    const [reviews, setReviews] = useState([_review, _review, _review, _review, _review, _review, _review, _review, _review]);
    return (
        <Layout>
            <div className="py-5" style={{backgroundColor: "#ddd"}}>
                <Grid fluid={false}>
                    <Row>
                        {
                            (reviews.length === 0) ? (
                                <Col style={{minHeight: " 90vh"}}
                                     className="d-flex justify-content-center align-items-center">
                                    <h5>No Reviews available</h5>
                                </Col>
                            ) : (


                                reviews.map(function (review, index) {
                                    return (
                                        <Col key={index} xs={24} sm={24} md={12} lg={12} className="mb-3">
                                            <ReviewItem review={review}/>
                                        </Col>
                                    )
                                })


                            )
                        }
                    </Row>
                </Grid>
            </div>
        </Layout>
    )
}

export default ReviewsPage;
