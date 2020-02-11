import React, {useState} from "react";
import {Button, Col, Grid, Panel, Row} from "rsuite";
import {Form} from "react-bootstrap";
import Layout from "../../components/layout/Layout";

function CreateTopicPage(props) {

    const _course = {
        name: "Programming in C",
        _id: "1"
    };


    const [courses, setCourses] = useState([_course, _course, _course]);

    return (
        <Layout>
            <Grid fluid={false}>
                <Row>
                    <Col xs={24} sm={24} md={14} lg={14} mdOffset={5} lgOffset={5} className="mb-5">
                        <Panel className="shadow-sm" bordered={true}
                               style={{backgroundColor: "white", borderRadius: "24px"}}>
                            <Form>
                                <Form.Group>
                                    <Form.Label>Title</Form.Label>
                                    <Form.Control name="title" className="rounded-pill" type="text"
                                                  placeholder="Type topic title"/>
                                </Form.Group>

                                <Form.Group>
                                    <Form.Label>Description</Form.Label>
                                    <Form.Control as="textarea" rows={3} name="description" className="rounded-pill"
                                                  type="text" placeholder="Type topic description"/>
                                </Form.Group>

                                <Form.Group>
                                    <Form.Label>Course</Form.Label>
                                    <Form.Control as="select" className="rounded-pill">
                                        {
                                            courses.map(function (course, index) {
                                                return (
                                                    <option key={index} value={course._id}>{course.name}</option>
                                                )
                                            })
                                        }
                                    </Form.Control>
                                </Form.Group>

                                <Form.Group>
                                    <Button className="rounded-pill" color="blue">
                                        Add Topic
                                    </Button>
                                </Form.Group>
                            </Form>
                        </Panel>
                    </Col>
                </Row>
            </Grid>
        </Layout>
    )
}

export default CreateTopicPage;
