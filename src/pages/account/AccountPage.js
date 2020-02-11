import React, {useState} from "react";
import Layout from "../../components/layout/Layout";
import {Button, Col, Grid, List, Notification, Panel, Row} from "rsuite";
import {Link, useHistory} from "react-router-dom";
import axios from "axios";

function AccountPage(props) {

    const history = useHistory();

    const [userID, setUserID] = useState(localStorage.getItem("user_id") || null);
    const [token, setToken] = useState(localStorage.getItem("token") || null);

    function showNotification(message, status) {
        if (status === "error") {
            Notification.error({
                title: "Failure",
                description: message
            });
        } else {
            Notification.success({
                title: "Success",
                description: message
            });
        }
    }

    function handleLogout(event) {
        event.preventDefault();
        axios({
            method: "post",
            url: "http://localhost:5000/api/v1/users/logout",
            headers: {Authorization: `Bearer ${token}`}
        }).then(function (response) {
            localStorage.clear();
            history.push("/login");
        }).catch(function (error) {
            showNotification(error.message, "error");
        })
    }

    function handleDeactivate(event) {

    }

    return (
        <Layout>
            <Grid fluid={true}>
                <Row style={{
                    display: "flex",
                    flexDirection: "column",
                    minHeight: "80vh",
                    justifyContent: "center"
                }}>
                    <Col xs={24} sm={24} mdOffset={2} md={20} lgOffset={6} lg={12}>
                        <Panel bordered={false} style={{backgroundColor: "white", borderRadius: "24px"}} className="shadow-sm">
                            <List bordered={true} hover={true} size="md">
                                <List.Item>
                                    <Link to="/edit-profile">
                                        Edit Profile
                                    </Link>
                                </List.Item>

                                <List.Item>
                                    <Link to="/change-password">
                                        Change Password
                                    </Link>
                                </List.Item>

                                <List.Item>
                                    <Button block={true} color="orange" size="sm" className="rounded-pill"  onClick={handleLogout}>
                                        Logout
                                    </Button>
                                </List.Item>

                                <List.Item>
                                    <Button block={true} color="red" size="sm" className="rounded-pill"  onClick={handleDeactivate}>
                                        De-activate Account
                                    </Button>
                                </List.Item>

                                <List.Item>
                                    <Button block={true} color="red" size="sm" className="rounded-pill" onClick={handleDeactivate}>
                                        Delete Account
                                    </Button>
                                </List.Item>
                            </List>
                        </Panel>
                    </Col>
                </Row>
            </Grid>
        </Layout>
    )
}

export default AccountPage;
