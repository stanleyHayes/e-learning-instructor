import React from "react";
import Layout from "../../components/layout/Layout";
import {Col, Grid, Row} from "rsuite";
import CourseListItem from "./CourseListItem";
import {connect} from "react-redux";

function CoursesPage({courses}) {

    return (
        <Layout>
            <div style={{backgroundColor: "#eee"}} className="py-5">
                <Grid fluid={false}>
                    <Row>
                        {
                            (courses.length === 0) ? (
                                <Col style={{minHeight: " 82vh"}}
                                     className="d-flex justify-content-center align-items-center">
                                    <h5>No courses available</h5>
                                </Col>
                            ) : (
                                courses.map(function (course, index) {
                                    return (
                                        <Col key={index} xs={24} sm={24} md={12} lg={8} className="mb-3">
                                            <CourseListItem course={course}/>
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
const mapStateToProps = state => {
    return {
        loading: state.courses.loading,
        courses: state.courses.courses
    }
}
export default connect(mapStateToProps) (CoursesPage);
