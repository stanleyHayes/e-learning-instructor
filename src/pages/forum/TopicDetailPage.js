import React, {useState} from "react";
import {Button, List, Panel} from "rsuite";
import CommentListItem from "./CommentListItem";
import {Form, Col} from "react-bootstrap";

function TopicDetailPage(props) {
    const [loading, setLoading] = useState(false);
    return (
        <React.Fragment>
            <Panel bordered={true} className="mb-2">
                <Form>
                    <Form.Row>
                        <Col xs={9} sm={9} md={9} lg={9} xl={9}>
                            <Form.Control className="rounded-pill" placeholder="Type comment here" />
                        </Col>
                        <Col xs={3} sm={3} md={4} lg={3} xl={3}>
                            <Button appearance="blue" className="rounded-pill" loading={loading} disabled={loading}>
                                Comment
                            </Button>
                        </Col>
                    </Form.Row>
                </Form>
            </Panel>
            {
                (props.topic.comments.length === 0) ? (
                    <div style={{
                        backgroundColor: "whitesmoke",
                        minHeight: "90vh"
                    }} className="d-flex flex-column justify-content-center align-items-center flex-grow-1">
                        <h6>No comments</h6>
                    </div>
                ) : (
                    <List bordered={true} hover={true} size="sm">
                        {
                            (props.topic.comments.map(function (comment, index) {
                                return (
                                    <CommentListItem comment={comment} key={index}/>
                                )
                            }))
                        }
                    </List>
                )
            }
        </React.Fragment>
    )
}

export default TopicDetailPage;
