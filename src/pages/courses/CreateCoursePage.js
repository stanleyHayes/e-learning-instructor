import React, {useState} from "react";
import Layout from "../../components/layout/Layout";
import {Button, Divider, Grid, List, Panel, Row, Col} from "rsuite";
import {Form} from "react-bootstrap";
import QuestionOptionItem from "../questions/QuestionOptionItem";
import SimpleRemovableItem from "../../components/shared/SimpleRemovableItem";
import CourseContentOptionItem from "./CourseContentOptionItem";

function CreateCoursePage(props) {

    const [course, setCourse] = useState({});
    const [objective, setObjective] = useState();
    const [objectives, setObjectives] = useState([]);
    const [prerequisite, setPrerequisite] = useState();
    const [prerequisites, setPrerequisites] = useState([]);
    const [content, setContent] = useState({});
    const [contents, setContents] = useState([]);
    const [loading, setLoading] = useState(false);

    function handleCourseChange(event) {
        setCourse({...course, [event.target.name]: event.target.value})
    }

    function handleObjectiveChange(event) {
        setObjective(event.target.value)
    }

    function handleObjectiveAdd() {
        setObjectives([...objectives, objective]);
    }

    function handlePrerequisiteChange(event) {
        setPrerequisite(event.target.value)
    }

    function handlePrerequisiteAdd() {
        setPrerequisites([...prerequisites, prerequisite]);
    }

    function handleContentChange(event) {
        setContent({...content, [event.target.name]: event.target.value});
    }

    function handleContentAdd() {
        setContents([...contents, content]);
    }

    function handleObjectiveRemove(option) {
        setObjectives(objectives.filter(function (item) {
                return option !== item
            })
        )
    }


    return (
        <Layout>
            <Grid fluid={true}>
                <Row>
                    <Col xs={24} sm={24} md={16} lg={16} mdOffset={4} lgOffset={4}>
                        <Panel
                            bordered={true}
                            className="shadow-sm"
                            style={{
                                backgroundColor: "white",
                                borderRadius: "24px"
                            }}>
                            <Form>
                                <Form.Group>
                                    <Form.Label>Course Name</Form.Label>
                                    <Form.Control
                                        name="name"
                                        className="rounded-pill"
                                        placeholder="Enter Course Name"
                                        onChange={handleCourseChange}
                                    />
                                </Form.Group>

                                <Form.Group>
                                    <Form.Label>Course Code</Form.Label>
                                    <Form.Control
                                        name="code"
                                        className="rounded-pill"
                                        placeholder="Enter Course Code"
                                        onChange={handleCourseChange}
                                    />
                                </Form.Group>

                                <Form.Group>
                                    <Form.Label>Description</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        rows={2}
                                        className="rounded-pill"
                                        name="description"
                                        placeholder="Enter Course Description"
                                        onChange={handleCourseChange}
                                    />
                                </Form.Group>

                                <Form.Group>

                                    <Form.Label>Add Table of Contents</Form.Label>

                                    <Form.Row>
                                        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                                            <Form.Control
                                                as="textarea"
                                                placeholder="Type Course Content title here"
                                                rows={1}
                                                className="rounded-pill mb-2"
                                                name="content-title"
                                                onChange={handleContentChange}
                                            />
                                        </Col>

                                        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                                            <Form.Control
                                                as="textarea"
                                                placeholder="Type Course Content Description here"
                                                rows={1}
                                                className="rounded-pill mb-2"
                                                name="content-description"
                                                onChange={handleContentChange}
                                            />
                                        </Col>

                                        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                                            <Button
                                                onClick={handleContentAdd}
                                                loading={loading}
                                                disabled={loading}
                                                block={true}
                                                className="rounded-pill mb-2"
                                                appearance="primary">
                                                {loading ? "Adding Course Content" : "Add Course Content"}
                                            </Button>
                                        </Col>
                                    </Form.Row>

                                    <Divider>Added Course Content</Divider>

                                    <List bordered={true} size="md" hover={true}>
                                        {
                                            (contents.length === 0) ? (
                                                <List.Item>
                                                    <p
                                                        className="text-center py-5"
                                                        style={{
                                                            backgroundColor: "whitesmoke"
                                                        }}>
                                                        No Contents added
                                                    </p>
                                                </List.Item>
                                            ) : (
                                                contents.map(function (option, index) {
                                                    return (
                                                        <CourseContentOptionItem
                                                            key={index}
                                                            option={option}
                                                            handleOptionRemove={handleObjectiveRemove}
                                                        />
                                                    )
                                                })
                                            )
                                        }
                                    </List>

                                </Form.Group>

                                <Form.Group>

                                    <Form.Label>Add Prerequisite</Form.Label>

                                    <Form.Row>
                                        <Col xs={24} sm={24} md={16} lg={16} xl={16}>
                                            <Form.Control
                                                as="textarea"
                                                placeholder="Type Prerequisite here"
                                                rows={1}
                                                className="rounded-pill"
                                                name="option"
                                                onChange={handlePrerequisiteChange}
                                            />
                                        </Col>

                                        <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                                            <Button
                                                onClick={handlePrerequisiteAdd}
                                                loading={loading}
                                                disabled={loading}
                                                block={true}
                                                className="rounded-pill"
                                                appearance="primary">
                                                {loading ? "Adding Objective" : "Add Objective"}
                                            </Button>
                                        </Col>
                                    </Form.Row>

                                    <Divider>Added Prerequisites</Divider>

                                    <List bordered={true} size="md" hover={true}>
                                        {
                                            (prerequisites.length === 0) ? (
                                                <List.Item>
                                                    <p
                                                        className="text-center py-5"
                                                        style={{
                                                            backgroundColor: "whitesmoke"
                                                        }}>
                                                        No prerequisites added
                                                    </p>
                                                </List.Item>
                                            ) : (
                                                prerequisites.map(function (option, index) {
                                                    return (
                                                        <SimpleRemovableItem
                                                            key={index}
                                                            option={option}
                                                            handleOptionRemove={handleObjectiveRemove}
                                                        />
                                                    )
                                                })
                                            )
                                        }
                                    </List>

                                </Form.Group>


                                <Form.Group>

                                    <Form.Label>Add Objective</Form.Label>

                                    <Form.Row>
                                        <Col xs={12} sm={12} md={8} lg={8} xl={8}>
                                            <Form.Control
                                                as="textarea"
                                                placeholder="Type Objective here"
                                                rows={1}
                                                className="rounded-pill"
                                                name="option"
                                                onChange={handleObjectiveChange}
                                            />
                                        </Col>

                                        <Col xs={12} sm={12} md={4} lg={4} xl={4}>
                                            <Button
                                                onClick={handleObjectiveAdd}
                                                loading={loading}
                                                disabled={loading}
                                                block={true}
                                                className="rounded-pill"
                                                appearance="primary">
                                                {loading ? "Adding Objective" : "Add Objective"}
                                            </Button>
                                        </Col>
                                    </Form.Row>

                                    <Divider>Added Options</Divider>

                                    <List bordered={true} size="md" hover={true}>
                                        {
                                            (objectives.length === 0) ? (
                                                <List.Item>
                                                    <p
                                                        className="text-center py-5"
                                                        style={{
                                                            backgroundColor: "whitesmoke"
                                                        }}>
                                                        No Objectives added
                                                    </p>
                                                </List.Item>
                                            ) : (
                                                objectives.map(function (option, index) {
                                                    return (
                                                        <QuestionOptionItem
                                                            key={index}
                                                            option={option}
                                                            handleOptionRemove={handleObjectiveRemove}
                                                        />
                                                    )
                                                })
                                            )
                                        }
                                    </List>

                                </Form.Group>

                                <Form.Group>
                                    <Button block={true} disabled={loading} loading={loading} appearance="primary">
                                        Add Course
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

export default CreateCoursePage;
