import React, {useState} from "react";
import Layout from "../../components/layout/Layout";
import {Col, Grid, Icon, IconButton, Row} from "rsuite";
import {Link} from "react-router-dom";
import CourseListItem from "./CourseListItem";

function CoursesPage(props) {

    const _course = {
        name: "Programming in C",
        code: "COE252",
        students: [],
        price: {
            amount: 50.00,
            currency: "GHS"
        },
        status: "Started",
        image: `${process.env.PUBLIC_URL}/cprogrammingcover.jpg`
    };
    const [courses, setCourses] = useState([_course, _course,_course, _course,_course, _course]);
    return (
        <Layout>
            <Grid fluid={false}>
                <Row>
                    <Col xs={24} sm={24} md={24} lg={24} className="mb-5">
                        <IconButton icon={<Icon icon="plus"/>} placement="left" size="lg" color="red" block={false}>
                            <Link to="/new/course" className="text-white">
                                Add Course
                            </Link>
                        </IconButton>
                    </Col>
                </Row>
                <Row>
                    {
                        (courses.length === 0) ? (
                            <Col style={{minHeight: " 60vh"}}
                                 className="d-flex justify-content-center align-items-center">
                                <h5>No courses available</h5>
                            </Col>
                        ) : (


                            courses.map(function (course, index) {
                                return (
                                    <Col key={index} xs={24} sm={24} md={8} lg={8} className="mb-3">
                                        <CourseListItem course={course}/>
                                    </Col>
                                )
                            })


                        )
                    }
                </Row>
            </Grid>
        </Layout>
    )
}

export default CoursesPage;
